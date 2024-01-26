import styles from "./Card.module.scss";





export function Card() {
    return (
        <section className={styles.CardPage}>
            <img className={styles.Photo} src="photo.png" />
            <div className={styles.Spacer}></div>
            <div className={styles.Card}>
                <div className={styles.CenterBlock}>
                    <h3 className={styles.Name}>VG</h3>
                    <p className={styles.Position}>Frontend Developer</p>
                    <div className={styles.Location}>
                        <img className={styles.LocationImg + " " + styles.Imgs} src="Vector.svg"/>
                        <p className={styles.From}>Perm, RU</p>
                    </div>
                </div>
                <a className={styles.Connection}>
                    <img className={styles.ConnectionImg + " " + styles.Imgs} src="EnvelopeSimple.svg"/>
                    <p className={styles.Link}>Get in touch</p>
                </a>
            </div>
        </section>
    )
}