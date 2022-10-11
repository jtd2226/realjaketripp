import Image from 'next/image';
import chatScreenshot from 'images/screenshots/chat.png'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={chatScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}