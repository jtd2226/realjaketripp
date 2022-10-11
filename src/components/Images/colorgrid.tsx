import Image from 'next/image';
import colorGridScreenshot from 'images/screenshots/colorgrid.png'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={colorGridScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}