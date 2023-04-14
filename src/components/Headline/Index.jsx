import classes from 'src/components/Headline/Headline.module.css';


export function Headline(props) {
  return (
    <div className={classes.title}>
      <h1>{props.page} page</h1>
      <p>
        Get started by editing&nbsp;
        {props.children}
      </p>
    </div>
  )
}
