import Image from 'next/image';
import yelpcampScreenshot from 'images/screenshots/yelpcamp.png'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={yelpcampScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}