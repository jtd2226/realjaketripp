import Image from 'next/image';
import shimbergScreenshot from 'images/screenshots/shimberg.png'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={shimbergScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}