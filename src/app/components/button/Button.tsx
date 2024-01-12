import styles from "./style.module.css"


const Button = (props: any) => {
  return (
    <button className={styles.btn} onClick={props.action}>{props.title}</button>
  )
}

export default Button