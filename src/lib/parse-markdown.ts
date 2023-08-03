export type ParagraphTextElementValue =
  | {
      type: 'text'
      value: string
    }
  | {
      type: 'bold'
      value: ParagraphTextElementValue[]
    }
  | {
      type: 'italic'
      value: ParagraphTextElementValue[]
    }
  | {
      type: 'strikethrough'
      value: ParagraphTextElementValue[]
    }
  | {
      type: 'underline'
      value: ParagraphTextElementValue[]
    }

export type ParagraphElement = {
  type: 'paragraph'
  value: ParagraphElementValue[]
}

export type ParagraphElementValue =
  | ParagraphTextElementValue
  | {
      type: 'link'
      value: {
        url: string
        title: string
        tooltip?: string
      }
    }
  | {
      type: 'code'
      value: string
    }

export type ListElement = {
  type: 'list'
  value: ListElementValue
}

export type ListElementValue = {
  type: 'ordered' | 'unordered'
  items: {
    value: ParagraphElementValue[]
    subList?: ListElement
  }[]
}

export type HeadingElement = {
  type: 'heading'
  value: HeadingElementValue
}

export type HeadingElementValue = {
  level: number
  text: string
}

export type BlockquoteElement = {
  type: 'blockquote'
  value: BlockquoteElementValue
}

export type BlockquoteElementValue = string[]

export type CodeElement = {
  type: 'code'
  value: CodeElementValue
}

export type CodeElementValue = {
  language: string
  lines: string
}

export type RichTextElement =
  | ParagraphElement
  | ListElement
  | HeadingElement
  | BlockquoteElement
  | CodeElement

export type Markdown = RichTextElement[]

export function parseMarkdown(markdown: string): Markdown {
  const lines = markdown.split('\n')
  const richText: Markdown = []

  let codeBlockLines: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith('```')) {
      codeBlockLines.push(line)
      if (codeBlockLines.length > 1) {
        richText.push(parseCodeBlock(codeBlockLines))
        codeBlockLines = []
      }
      continue
    }

    if (codeBlockLines.length > 0) {
      codeBlockLines.push(line)
      continue
    }

    if (line.startsWith('#')) {
      richText.push(parseHeading(line))
    } else if (line.startsWith('>')) {
      const blockLines = [line]
      while (lines[++i] && lines[i].startsWith('>')) {
        blockLines.push(lines[i])
      }
      i--
      richText.push(parseBlockquote(blockLines))
    } else if (line.startsWith('-') || /^\d+\./.test(line)) {
      const listLines = [line]
      while (
        lines[++i] &&
        (lines[i].startsWith('-') ||
          /^\d+\./.test(line) ||
          lines[i].startsWith('  '))
      ) {
        listLines.push(lines[i])
      }
      i--
      richText.push(parseList(listLines))
    } else if (line.trim() !== '') {
      richText.push({
        type: 'paragraph',
        value: parseParagraph(line),
      })
    }
  }

  return richText
}

// Parse a heading
function parseHeading(line: string): HeadingElement {
  const level = line.split(' ')[0].length
  const text = line.slice(level + 1)

  return {
    type: 'heading' as const,
    value: { level, text },
  }
}

// Parse a list
function parseList(lines: string[]): ListElement {
  const items: ListElementValue['items'] = []
  const listType = lines[0].startsWith('-') ? 'unordered' : 'ordered'

  let currentItem: ParagraphElementValue[] = []
  let subListLines: string[] = []

  for (const line of lines) {
    if (
      line.startsWith('-') ||
      (listType === 'ordered' && /^\d+\./.test(line))
    ) {
      if (subListLines.length > 0) {
        const subList = parseList(subListLines)
        items.push({ value: currentItem, subList })
        subListLines = []
        currentItem = []
      }

      if (currentItem.length > 0) {
        items.push({ value: currentItem })
        currentItem = []
      }

      const itemValue = parseParagraph(line.slice(line.indexOf(' ') + 1).trim())
      currentItem.push(...itemValue)
    } else if (line.startsWith('  ')) {
      subListLines.push(line.slice(2))
    }
  }

  if (subListLines.length > 0) {
    const subList: ListElement = parseList(subListLines)
    items.push({ value: currentItem, subList })
  } else if (currentItem.length > 0) {
    items.push({ value: currentItem })
  }

  return {
    type: 'list' as const,
    value: {
      type: listType,
      items,
    },
  }
}

// Parse a paragraph
function parseParagraph(line: string): ParagraphElementValue[] {
  return parseElements(line)
}

function parseTextElements(line: string): ParagraphTextElementValue[] {
  const elements: ParagraphTextElementValue[] = []

  // TODO: handle underline
  const regex =
    /\*\*(.+?)\*\*|__(.+?)__|\*(.+?)\*|_(.+?)_|~~(.+?)~~|\<u\>(.+?)\<\/u\>|([^`[\]*_~]+)/g

  let match
  while ((match = regex.exec(line)) !== null) {
    const [
      _,
      boldValueAsterisks,
      boldValueUnderscores,
      italicValueAsterisks,
      italicValueUnderscores,
      strikethroughValue,
      underlineValue,
      textValue,
    ] = match

    if (
      boldValueAsterisks !== undefined ||
      boldValueUnderscores !== undefined
    ) {
      elements.push({
        type: 'bold',
        value: parseTextElements(boldValueAsterisks || boldValueUnderscores),
      })
    } else if (
      italicValueAsterisks !== undefined ||
      italicValueUnderscores !== undefined
    ) {
      elements.push({
        type: 'italic',
        value: parseTextElements(
          italicValueAsterisks || italicValueUnderscores
        ),
      })
    } else if (strikethroughValue !== undefined) {
      elements.push({
        type: 'strikethrough',
        value: parseTextElements(strikethroughValue),
      })
    } else if (underlineValue !== undefined) {
      elements.push({
        type: 'underline',
        value: parseTextElements(underlineValue),
      })
    } else if (textValue !== undefined) {
      elements.push({ type: 'text', value: textValue })
    }
  }

  return elements
}

function parseElements(line: string): ParagraphElementValue[] {
  const elements: ParagraphElementValue[] = []

  const regex = /\[(.+?)\]\((.+?)(?: "([^"]*)")?\)|`(.+?)`|([^`[\]]+)/g

  let match
  while ((match = regex.exec(line)) !== null) {
    const [_, linkTitle, linkUrl, linkTooltip, codeValue, textValue] = match

    if (linkTitle !== undefined) {
      elements.push({
        type: 'link',
        value: {
          url: linkUrl,
          title: linkTitle,
          ...(linkTooltip ? { tooltip: linkTooltip } : {}),
        },
      })
    } else if (codeValue !== undefined) {
      elements.push({ type: 'code', value: codeValue })
    } else if (textValue !== undefined) {
      elements.push(...parseTextElements(textValue))
    }
  }

  return elements
}

// Parse a blockquote
function parseBlockquote(lines: string[]): BlockquoteElement {
  const value = lines.map(line => line.slice(2).trim())
  return {
    type: 'blockquote',
    value,
  }
}

// Parse a code block
function parseCodeBlock(lines: string[]): RichTextElement {
  const language = lines[0].slice(3).trim() || 'plaintext'
  const codeLines = lines.slice(1, -1).join('\n')

  return {
    type: 'code',
    value: { language, lines: codeLines },
  }
}
