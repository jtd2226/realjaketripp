import Image from 'next/image';
import quickcopyScreenshot from 'images/screenshots/quickcopy.png'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={quickcopyScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}