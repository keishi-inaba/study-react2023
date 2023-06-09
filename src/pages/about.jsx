import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Mainsec } from "src/components/Mainsec/Index";
import { Header } from "src/components/Header/Index";


const About = (props) => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <button onClick={props.handleClick}>btn</button>
      <button onClick={props.handleDisplay}>{ props.isShow ? "非表示" : "表示" }</button>
      { props.isShow ? <h2>{ props.doubleCount }</h2> : null}
      <hr />

      <input
        type="text"
        value={props.text}
        onChange={props.handleChange}
      />
      <button onClick={props.handleAdd}>追加</button>
      <ol>
        {props.array?.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>

      <Mainsec page="about"/>
    </div>
  );
}

export default About;
