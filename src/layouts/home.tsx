import { Footer } from "@/components/common/footer";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Author } from "@/components/home/author";
import { SITE_URL } from "@/config";
import { PropsOf } from "@/util";
import { Person, WithContext } from "schema-dts";

type HomeLayoutProps = {
  children: React.ReactNode;
  author: PropsOf<typeof Author>;
};

export function HomeLayout({ children, author }: HomeLayoutProps) {
  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author?.name ?? "",
    url: SITE_URL,
    sameAs: author.socials?.map((social) => social?.url ?? ""),
  };

  return (
    <main className="flex flex-col flex-1 h-full w-full max-w-xl items-stretch @container pt-10 px-5">
      <ThemeToggle className="absolute right-10 top-10" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col items-center w-full flex-1">
        <Author
          name={author.name}
          description={author.description}
          avatar={author.avatar}
          socials={author.socials}
        />

        {children}
      </div>
      <Footer />
    </main>
  );
}
