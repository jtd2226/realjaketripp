import Image from 'next/image';
import screenshot from 'images/screenshots/elderdata.png'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={screenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}