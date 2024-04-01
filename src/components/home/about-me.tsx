import { Section } from "./section";

export function AboutMe({ children }: { children: React.ReactNode }) {
  return <Section heading="About me">{children}</Section>;
}
