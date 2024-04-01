import Image from "next/image";

type SocialType = "github" | "threads" | "linkedin";

type SocialsProps = {
  socials?: { type: SocialType; url: string }[];
};

export function Socials({ socials }: SocialsProps) {
  return (
    <div className="flex justify-center space-x-4 invert mt-2">
      {socials?.map((social) => {
        const { type, url } = social;
        return (
          <a key={type} href={url} target="_blank" rel="noopener noreferrer">
            <Image
              src={`/icons/${type}.svg`}
              alt={type}
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </a>
        );
      })}
    </div>
  );
}
