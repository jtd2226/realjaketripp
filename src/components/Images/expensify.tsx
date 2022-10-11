import Image from 'next/image';
import expensifyScreenshot from 'images/screenshots/expensify.jpg'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={expensifyScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}