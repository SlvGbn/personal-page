import styles from "./Hero.module.scss";
import { gsap } from "gsap"; 
import { useEffect } from "react";



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
            <h3 className={styles.Skill} >{data.skill}</h3>
        </div>
    )
})
 


export function Hero() {

    // useEffect(() => {
    //     gsap.to("." + styles.Name, {
    //         x: 150,
    //         scale: 3
    //     })
    // }, []);

    return (
        <section className={styles.Hero}>
            <div className={styles.ContentBlock}>
                <h1 className={styles.Name}>Hello,<br/>I`m Slava</h1>
                <div className={styles.PositionLocation}>
                    <div className={styles.PositionLocation_First}>
                        <p className={styles.Position}>Frontend Developer</p>
                        <div className={styles.Location}>
                            <img className={styles.LocationImg + " " + styles.Imgs} src="Vector.svg"/>
                            <p className={styles.From}>Perm, RU</p>
                        </div>
                    </div>
                   
                    <div className={styles.Connection_Atarnative}>
                        <p className={styles.Link_Atarnative}>Get in touch:</p>
                        <p className={styles.Mail_Atarnative}>permkenny@gmail.com</p>
                    </div>
                </div>
                {/* <a className={styles.Connection} href="mailto:permkenny@gmail.com?subject=Отклик или вопрос&body=Привет Вячеслав!">
                    <p className={styles.Link}>Get in touch</p>
                </a> */}
                {/* <a className={styles.Connection} href="https://t.me/+tdQyk6ec7pNiZmNi">
                    <p className={styles.Link}>Get in touch</p>
                </a> */}
            </div>
            {/* <div className={styles.PhotoBlock}>
                <img className={styles.Photo} src="photo4.png"/>
                <img className={styles.Blob} src="Ellipse.png"/>
                <div className={styles.Blob}/>
            </div> */}
            {/* <div className={styles.Links}>
                <a>Skills</a>
                <a>Project</a>
                <a>Feedback</a>
            </div> */}
            {/* <button className={styles.MoreContent}>
                <p className={styles.MoreText}>More</p>
                <img className={styles.MoreImg} src="More.svg"/>

            </button> */}
            {/* <div className={styles.Skills}>
               <h3 className={styles.Skills__Heading}>Skill`s</h3>
                <div className={styles.Skills_Blocks}>
                    {skills}
                </div>
            </div> */}
        </section>
    )
}