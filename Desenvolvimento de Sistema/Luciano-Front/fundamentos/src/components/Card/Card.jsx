import styles from './Card.module.css'

function Card({nome,idade , cidade}) {
  return (
    <div className={styles.card}>
        <h3>Nome: {nome}</h3>
        <p>Idade: {idade} </p>
        <p>cidade: {cidade}</p>
    </div>
  )
}

export default Card