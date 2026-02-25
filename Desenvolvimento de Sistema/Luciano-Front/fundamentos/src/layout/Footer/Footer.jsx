import styles from './Footer.module.css'
export const Footer = ({autor}) => {
    
  return (
    <div className={styles.footer}>desenvolvido por {autor}</div>
  ) 
}
