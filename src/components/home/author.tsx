import Image from "next/image";

type SocialType = "github" | "threads" | "linkedin";

type AuthorProps = {
  name: string;
  avatar: {
    url: string;
    width?: string;
    height?: string;
  };
  description: string;
  socials?: { type: SocialType; url: string }[];
};

export function Author({ name, avatar, description, socials }: AuthorProps) {
  return (
    <>
      <Image
        src={avatar.url}
        alt={"Avater of " + name}
        className="rounded-full w-24 h-24"
        width={parseInt(avatar.width ?? "0")}
        height={parseInt(avatar.height ?? "0")}
      />

      <h1 className="mt-5 text-2xl font-bold text-center font-jetbrains-mono uppercase">
        {name}
      </h1>

      <p className="text-base font-jetbrains-mono text-center text-muted-foreground italic">
        {description}
      </p>

      <div className="flex justify-center space-x-4 invert mt-2">
        {socials?.map((social) => {
          const { type, url } = social;
          return (
            <a key={type} href={url} target="_blank" rel="noopener noreferrer">
              <Image
                src={`/icons/${type}.svg`}
                alt={type}
                className="w-6 h-6 social-icon"
                width={24}
                height={24}
              />
            </a>
          );
        })}
      </div>
    </>
  );
}
