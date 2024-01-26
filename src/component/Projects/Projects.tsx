import styles from "./Projects.module.scss";

const item = [
    {
        imgSrc: "snimok1.png",
        name: "Joey",
        websiteLink: "#",
        codeLink: "#"
    },
    {
        imgSrc: "snimok2.png",
        name: "Fly cats",
        websiteLink: "https://slvgbn.github.io/fly-cats/",
        codeLink: "https://github.com/SlvGbn/fly-cats"
    },
    {
        imgSrc: "snimok3.png",
        name: "Dogs gallery",
        websiteLink: "https://slvgbn.github.io/dogs-gallery/",
        codeLink: "https://github.com/SlvGbn/dogs-gallery"
    },
].map((item, i) => {
    return (
        <div className={styles.ContentItem} key={i}>
            <img className={styles.Image} src={item.imgSrc}/>
                <div className={styles.Description}>
                    <h3 className={styles.Name}>{item.name}</h3>
                    <a href={item.websiteLink} className={styles.WebsiteLink}>
                        <img className={styles.Link__Img} src="website.png"/>
                        <p className={styles.Link__Text}>Link</p>
                    </a>
                    <a href={item.codeLink} className={styles.Content__Code_Link}>
                        <img src="git.png" className={styles.Link__Img}/>
                        <p className={styles.Link__Text}>Code</p>
                    </a>
                </div>
        </div>
    )
})




export function Projects() {
    return (
        <section className={styles.Projects} id="Projects">
            <h1 className={styles.Heading}>Projects:</h1>
            <div className={styles.ContentBlock}>
              {item}
            </div>
        </section>
    )
}