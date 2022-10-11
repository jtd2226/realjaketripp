import Image from 'next/image';
import colorconversionScreenshot from 'images/screenshots/colorconversion.png'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={colorconversionScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}