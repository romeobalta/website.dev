import { H1, H2, H3, H4, H5, H6 } from '../'

interface endererProps {
  children: React.ReactNode
  level: number
}

export function HeadingRenderer({ children, level }: endererProps) {
  if (level === 1) {
    return <H1>{children}</H1>
  }

  if (level === 2) {
    return <H2>{children}</H2>
  }

  if (level === 3) {
    return <H3>{children}</H3>
  }

  if (level === 4) {
    return <H4>{children}</H4>
  }

  if (level === 5) {
    return <H5>{children}</H5>
  }

  return <H6>{children}</H6>
}
