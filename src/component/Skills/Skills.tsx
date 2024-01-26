import styles from "./Skills.module.scss"

let skills = [
    {
        skill: "HTML",
        image: "html.svg"
    },
    {
        skill: "CSS",
        image: "css.svg"
    },
    {
        skill: "Java Script",
        image: "js.svg"
    },
    {
        skill: "Type Script",
        image: "tp.svg"
    },
    {
        skill: "React",
        image: "react.svg"
    },
    {
        skill: "SQL",
        image: "sql.svg"
    },
    {
        skill: "Git",
        image: "git.png"
    }
].map((data, index) => {
    return (
        <div className={styles.SkillBlock} key={index}>
            <img className={styles.SkillImg} src={data.image}/>
            <p className={styles.Skill} key={index}>{data.skill}</p>
        </div>
       
    )
})


export function Skills() {
    return (
        <section className={styles.Skills} id="Skills">
            {/* <h1 className={styles.Heading}> My skills</h1> */}
            <div className={styles.ContenBlock}>
                {skills}    
            </div>
        </section>
    )
}