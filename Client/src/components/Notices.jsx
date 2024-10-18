import styles from './styles/Notices.module.css'
import PropTypes from 'prop-types'

export const Notices = ({noticia})=>{
    
        return (
            <div className={styles.contenedorTotal}>
            <div className={styles.contenedorTituloImg}>
                <img src={noticia.img} alt={noticia.titulo} className={styles.img} />
                <h4 className={styles.title}>{noticia.titulo}</h4>
            </div>

            <div className={styles.contenedorDescriptionAutor}>
                <div className={styles.description}><p>{noticia.descripcion}</p></div>
                <div className={styles.autor}>{noticia.autor}</div>
            </div>
        </div>
    )   

}
Notices.propTypes = {
    noticia: PropTypes.shape({
        titulo: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        autor: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }).isRequired,
};