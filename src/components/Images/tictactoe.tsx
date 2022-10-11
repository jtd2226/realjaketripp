import Image from 'next/image';
import tictactoeScreenshot from 'images/screenshots/tictactoe.png'

export default function StaticImage({ title }: { title: string }) {
  return (
    <Image
      src={tictactoeScreenshot}
      alt={`${title} screenshot`}
      layout="responsive"
      priority
      quality={100}
    />
  )
}