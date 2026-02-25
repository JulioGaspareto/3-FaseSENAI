import styles from './Header.module.css'

const Header = ({titulo}) => {
    return(
        <header className={styles.header}>
                <h1 className={styles.titulo}>{titulo}</h1>
                <div>
                    <h5>TODO MUNDO ACHA QUE AÇAI É RUIM PURO, EU ISAQUE DIGO QUE NO MEU PARTIDO TODO MUNDO COMERA AÇAI PURO PRA LARGAR DE FRESCURA</h5>
                </div>
        </header>
    )
}
export default Header