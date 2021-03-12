import {NavBar, Footer} from "../../Components";

export const About = () => (

    <>
        <NavBar/>

<p>
    appl
</p>
<p className="text-2xl py-6">
                <a href="https://fruitsandveggies.org/fruits-and-veggies/acorn-squash/"> Acorn Squash</a>
            </p>

            <div className="pl-10">
                    <select>
                        <option value="fasting">Normal Range: 60-90</option>
                        <option value="mid-morning">Mid-Morning</option>
                        <option selected value="lunch">Lunch</option>
                        <option value="mid-afternoon">Mid Afternoon</option>
                        <option selected value="Dinner">Dinner</option>
                        <option value="bedtime">Before Bed</option>
                    </select>
                    </div>

        <Footer/>
    </>

)


export default About