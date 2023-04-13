import { Inter } from 'next/font/google';
import classes from './Mainsec.module.css';
import { HeaderLogo } from './HeaderLogo';
import { Links } from '@/components/Links';
import { Imgs } from '@/components/Imgs';
import { Headline } from '@/components/Headline';


const inter = Inter({ subsets: ['latin'] })

export function Mainsec(props) {
  return (
    <>
      <main className={classes.main}>
        <div className={`${classes.description} ${classes.title}`}>
          <Headline page={props.page}>
            <code className={classes.code}>pages/{props.page}.js</code>
          </Headline>

          <HeaderLogo />
        </div>
        <Imgs />

        <Links />
      </main>
    </>
  )
}
