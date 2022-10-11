import Image from 'next/image';
import hairbyfranciscoScreenshot from 'images/screenshots/hairbyfrancisco.jpg'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={hairbyfranciscoScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}