import Image from "next/image";

interface BioProps {
  name: string;
  avatar: {
    url: string;
    width?: string;
    height?: string;
  };
  description: string;
}

export function Bio({ name, avatar, description }: BioProps) {
  return (
    <>
      <Image
        src={avatar.url}
        alt={"Avater of " + name}
        className="rounded-full w-24 h-24"
        width={parseInt(avatar.width ?? "0")}
        height={parseInt(avatar.height ?? "0")}
      />

      <h1 className="mt-5 text-2xl font-bold text-center font-source-serif">
        {name}
      </h1>

      <p className="text-sm font-roboto text-center">{description}</p>
    </>
  );
}
