import Image from 'next/image';
import calculatorScreenshot from 'images/screenshots/calculator.png'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={calculatorScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}