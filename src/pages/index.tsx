import { Card } from "@src/component/Card";
import { Hero } from "@src/component/Hero";
import { Projects } from "@src/component/Projects";
import { Skills } from "@src/component/Skills";
import { Main } from "@src/component/Main";




export default function IndexPage() {
    return (
        <>  
            {/* <Card/> */}
            <Skills/>
            <Main>
       
                <Hero/>
                <Projects/>
            </Main>
        </>
    );
}
