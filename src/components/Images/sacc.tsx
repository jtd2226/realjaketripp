import Image from 'next/image';
import saccScreenshot from 'images/screenshots/sacc.png'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={saccScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}