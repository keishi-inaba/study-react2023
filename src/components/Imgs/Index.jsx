import classes from 'src/components/Imgs/Imgs.module.css'
import Image from 'next/image'


export function Imgs() {
  return (
    <div className={classes.center}>
      <Image
        className={classes.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  )
}
