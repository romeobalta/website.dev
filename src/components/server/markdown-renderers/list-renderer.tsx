import { clsx } from 'clsx'

import { ListElementValue } from '@/lib/parse-markdown'

import { renderParagraphElement } from './paragraph-renderer'

function renderList(list: ListElementValue) {
  const { type, items } = list
  const ListTag = type === 'ordered' ? 'ol' : 'ul'

  return (
    <ListTag
      className={clsx(
        type === 'ordered' ? 'list-decimal' : 'list-disc',
        'pl-5 w-full'
      )}
    >
      {items?.map((item, index) => (
        <li key={index} className="my-1">
          {item.value.map((element, elementIndex) =>
            renderParagraphElement(element, `list-${index}-${elementIndex}`)
          )}
          {item.subList && renderList(item.subList.value)}
        </li>
      ))}
    </ListTag>
  )
}

export interface ListRendererProps {
  list: ListElementValue
}

export function ListRenderer({ list }: ListRendererProps) {
  return renderList(list)
}
