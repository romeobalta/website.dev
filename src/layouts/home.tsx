import { Author } from "@/components/home/author";
import { PropsOf } from "@/util";

type HomeLayoutProps = {
  children: React.ReactNode;
  author: PropsOf<typeof Author>;
};

export function HomeLayout({ children, author }: HomeLayoutProps) {
  // TODO: add jsonLd
  const jsonLd = {};

  return (
    <main className="h-full w-full max-w-md items-stretch py-5 @container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col items-center w-full px-5">
        <Author
          name={author.name}
          description={author.description}
          avatar={author.avatar}
          socials={author.socials}
        />

        {children}
      </div>
    </main>
  );
}
