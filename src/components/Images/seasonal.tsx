import Image from 'next/image';
import seasonalScreenshot from 'images/screenshots/seasonal.png'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={seasonalScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}