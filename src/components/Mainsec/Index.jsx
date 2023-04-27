import classes from 'src/components/Mainsec/Mainsec.module.css';
import { HeaderLogo } from 'src/components/HeaderLogo/Index';
import { Links } from 'src/components/Links/Index';
import { Imgs } from 'src/components/Imgs/Index';
import { Headline } from 'src/components/Headline/Index';
import { useCallback, useState } from 'react';


const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs →",
    description: "Find in-depth information about Next.js features API."
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn →",
    description: "Learn about Next.js in an interactive course with quizzes!"
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates →",
    description: "Discover and deploy boilerplate example Next.js projects."
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy →",
    description: "Instantly deploy your Next.js site to a shareable URL with Vercel."
  },
]

export const Mainsec = (props) => {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems(prevItems => {
      return prevItems.slice(0, prevItems.length -1);
    });
  }, []);

  return (
    <>
      <main className={classes.main}>
        <div className={`${classes.description} ${classes.title}`}>
          <Headline page={props.page} handleReduce={handleReduce}>
            <code className={classes.code}>{items.length}</code>
          </Headline>
          <HeaderLogo />
        </div>
        <Imgs />
        <Links items={items} />
      </main>
    </>
  )
}
