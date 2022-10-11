import Image from 'next/image';
import musicmasterScreenshot from 'images/screenshots/musicmaster.png'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={musicmasterScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}