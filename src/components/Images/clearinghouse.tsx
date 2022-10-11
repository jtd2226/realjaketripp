import Image from 'next/image';
import clearinghouseScreenshot from 'images/screenshots/clearinghouse.png'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={clearinghouseScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}