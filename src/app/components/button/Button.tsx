import styles from "./style.module.css"

const Button = (props: any) => {
  return (
    <button className={styles.btn}>{props.title}</button>
  )
}

export default Button