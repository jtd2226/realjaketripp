import Image from 'next/image';
import kokolunchboxScreenshot from 'images/screenshots/kokolunchbox.png'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={kokolunchboxScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}