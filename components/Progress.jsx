import styles from '../styles/Carousel.module.css';


export default function Progress({done}) {

    return (
        <div className={styles.progress} >
            <div className={styles.progressDone} style={done}>
                
            </div>
        </div>
    )
}