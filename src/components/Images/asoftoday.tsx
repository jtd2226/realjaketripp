import Image from 'next/image';
import asoftodayScreenshot from 'images/screenshots/asoftoday.png'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={asoftodayScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}