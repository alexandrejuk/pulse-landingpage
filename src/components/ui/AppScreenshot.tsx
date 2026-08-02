import Image from "next/image";

export function AppScreenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 220px, 300px"
    />
  );
}
