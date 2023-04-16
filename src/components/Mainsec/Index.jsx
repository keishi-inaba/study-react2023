import { Inter } from 'next/font/google';
import classes from 'src/components/Mainsec/Mainsec.module.css';
import { HeaderLogo } from 'src/components/HeaderLogo/Index';
import { Links } from 'src/components/Links/Index';
import { Imgs } from 'src/components/Imgs/Index';
import { Headline } from 'src/components/Headline/Index';
import { useEffect } from 'react';


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
