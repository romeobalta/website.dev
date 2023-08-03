import { WORDS_PER_MINUTE } from './constants'

export function calculateReadingTime(text: string) {
  const words = text.split(/\s/g)
  const numberOfWords = words.length
  const minutes = numberOfWords / WORDS_PER_MINUTE
  return Math.ceil(minutes)
}

export function removeMarkdown(text: string) {
  return text.replace(/[#*`]/g, '')
}
