import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type ImgProps = Omit<
  React.ComponentProps<typeof Image>,
  "src" | "height" | "width" | "alt"
> & {
  src?: string | StaticImport;
  height?: string | number;
  width?: string | number;
  alt?: string;
};

export function Img({
  className,
  src,
  alt,
  width: _w,
  height: _h,
  ...props
}: ImgProps) {
  if (!src || !alt) {
    return null;
  }

  let width = 0;
  let height = 0;

  if (typeof src === "string") {
    const [_, attributes] = src.split("#");
    const queryParams = new URLSearchParams(attributes);

    console.log(queryParams);

    width = +(queryParams.get("width") ?? 0);
    height = +(queryParams.get("height") ?? 0);
  }

  return <Image src={src} alt={alt} width={width} height={height} {...props} />;
}
