import styles from '@/styles/Home.module.css';


export function Headline(props) {
  // console.log(props.title);
  return (
    <div className={styles.title}>
      <h1>{props.title}</h1>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>pages/{props.page}.js</code>
      </p>
    </div>
  )
}
