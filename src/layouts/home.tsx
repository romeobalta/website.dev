import { Bio } from "@/components/home/bio";
import { Socials } from "@/components/home/socials";
import { PropsOf } from "@/util";

type HomeLayoutProps = {
  children: React.ReactNode;
  bio: PropsOf<typeof Bio>;
  socials: PropsOf<typeof Socials>["socials"];
};

export function HomeLayout({ children, bio, socials }: HomeLayoutProps) {
  // TODO: add jsonLd
  const jsonLd = {};

  return (
    <main className="h-full w-full max-w-md items-stretch py-5 @container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col items-center w-full px-5">
        <Bio
          name={bio.name}
          description={bio.description}
          avatar={bio.avatar}
        />

        <Socials socials={socials} />

        {children}
      </div>
    </main>
  );
}
