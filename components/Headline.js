import styles from '@/styles/Home.module.css';


export function Headline(props) {
  return (
    <div className={styles.title}>
      <h1>{props.title}</h1>
      <p>
        Get started by editing&nbsp;
        {props.page}.js
      </p>

    </div>
  )
}
