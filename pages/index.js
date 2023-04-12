import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { HeaderLogo } from '../components/HeaderLogo';
import { Links } from '@/components/Links';
import { Images } from '@/components/images';
import { Headline } from '@/components/Headline';

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <>
      <Head />
      <main className={styles.main}>
        <div className={`${styles.description} ${styles.title}`}>
          <Headline
            title="Index Page"
            page="index"
            // onClick={() => alert('click!!')}
            code={<code className={styles.code}>pages/{props.page}</code>}
            />

          <HeaderLogo />
        </div>
        <Images />

        <Links />
      </main>
    </>
  )
}
