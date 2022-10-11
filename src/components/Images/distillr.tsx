import Image from 'next/image';
import distillrScreenshot from 'images/screenshots/distillr.png'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={distillrScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}