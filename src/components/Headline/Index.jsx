import classes from 'src/components/Headline/Headline.module.css';


export const Headline = (props) => {
  return (
    <div className={classes.title}>
      <h1>{props.page} page</h1>
      <p>
        アイテムの数は
        {props.children}
        個です
      </p>

      <button onClick={props.handleReduce}>減らす</button>
    </div>
  )
}
