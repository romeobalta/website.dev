export const getLinkOnServer = (link?: string) => {
  if (!link || link === '') return null

  if (link.startsWith('/')) {
    return `${process.env.NEXT_PUBLIC_SERVER_URL}${link}`
  }

  return link
}
