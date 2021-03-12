import {Footer, NavBar} from "../../Components";

export const MedicationResults = () => (

    <>
        <NavBar/>

        <div className=" h-screen bg-gray-200 text-2xl text-purple-700">
            <div>
                <p className="text-6xl flex justify-center p-3">
                    Medication List
                </p>

                <div>
                    <p className="text-2xl pl-10 p-6">
                       Diabetic Medications and Therapies
                    </p>
                    <div className="pl-10">
                    <select>
                        <option value="none">None</option>
                        <option value="novologo">NovoLog</option>
                        <option value="flexpen">FlexPen</option>
                        <option selected value="fiasp">Fiasp</option>
                        <option value="apidra">Apidra</option>
                        <option selected value="humalog">Humalog</option>
                        <option value="humulin">Humalin N</option>
                        <option value="novolin N">Novolin N</option>
                        <option value="tresiba">Tresiba</option>
                        <option value="levemir">Levemir</option>
                        <option value="lantus">Lantus</option>
                        <option value="toujeo">Toujeo</option>
                        <option value="nologomix">NovoLog Mix 70/30</option>
                        <option value="humalogmix">75/25</option>
                        <option value="humulinmix">Humalin 70/30</option>
                        <option value="novolinmix">Novolin 70/30</option>
                        <option value="ryzodeg">Ryzodeg</option>
                        <option value="pramlintide">Pramlintide(SymlinPen 120, SymlinPen 60</option>
                        <option value="metformin">metformin(Glucophage)</option>
                        <option value="januvia">Januvia</option>
                        <option value="bydureon">Bydureon</option>
                        <option value="trulicity">Trulicity</option>
                        <option value="victoza">Victoza</option>
                        <option value="ozempic">Ozempic</option>
                        <option value="farxiga">Farxiga</option>
                        <option value="invokana">Invokana</option>
                        <option value="jardiance">Jardiance</option>
                        <option value="glipizide">Glipizide(Glucotrol)</option>
                        <option value="glyburide">Glyburide(DiaBeta, Glynase, Micronase</option>
                        <option value="avandia">Avandia</option>
                        <option value="actos">Actos</option>
                    </select>
                    </div>
                </div>

                <div>
                <div className="flex">
                    <p className="text-2xl pl-10 p-6">
                        Range of Fasting Blood Sugars:
                        </p>
                        <p className="pl-10 p-4">
                        Normal Range: 60-90
                    </p>
                    <p className="pl-10 p-4">
                        What is your blood sugar range?
                
                    </p>
                    <div className="pl-10 p-6">
                    <input type="text" placeholder="Blood Sugars" required></input>
                    </div>
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
                    </div>

                    <div className="flex">
                    <p className="pl-10 p-3">
                    Are you on insulin?</p>
                    <div className="p-3  pl-10 flex">
                    <p className="text-2xl ">
                    Yes
                    <input type="checkbox" placeholder="" required></input>
                    </p>
                    <p className="text-2xl ml-6 ">
                            No
                    <input type="checkbox" placeholder="" required></input>
                    </p> 
                    </div>
                    <p className="pl-10 p-3">
                     Do you have a sliding scale?</p>
                     <div className="p-3  pl-10 flex">
                    <p className="text-2xl">
                    Yes
                    <input type="checkbox" placeholder="" required></input>
                    </p>
                    <p className="text-2xl ml-6 ">
                            No
                    <input type="checkbox" placeholder="" required></input>
                    </p> 
                    </div>
                     <div className="">
                     <p className=" p-2 pl-10"> 
                     What is your sliding scale?
                    </p>
                    
                
                <p className="text-sm font-bold p-1 pl-10">Blood Glucose (BG); Insulin (I)</p>
                <div className="pl-10">
                    <select className="pr-2">
                        <option value="bg61">BG: 61-150 |   Insulin(0)</option>
                        <option value="bg151">BG: 151-200 |     Insulin(3)</option>
                        <option selected value="bg201">BG:201-250 |     Insulin(5)</option>
                        <option value="bg251">BG:251-300 |      Insulin(8)</option>
                        <option selected value="bg301">BG:301-350 |     Insulin(10)</option>
                        <option value="bg351">BG:351-400 |  Insulin(12)</option>
                        <option value="bg400">BG:>400 |     Insulin(15a)</option>
                        *contact your PCP.
                    </select>
                    </div>
                    </div>
                </div>

                
                </div>

<div className="text-2xl flex p-4 ml-2 mt-4 pl-10">
    <p>
        What is your breakfast blood sugar range?
    </p>
    <input type="text" placeholder="Breakfast range" required></input>
    <p className="pl-4">
        What is your lunch blood sugar range?
    </p>
    <input type="text" placeholder="Lunch range" required></input>
    </div>
    <div className="flex justify-center">
    <p className="justify-items-center">
        What is your dinner blood sugar range?
    </p>
    <input type="text" placeholder="Dinner range" required></input>
    </div>
    

<div className="pl-10">

<p className="text-2xl pt-6 pl-6">
 Who is your Prescriber?
</p>
<input type="text" placeholder="Medication" required></input>
</div>



                <div className =" flex flex-column p-6 text-blue-800  bg-purple-300 text-2xl px-10">
                    <p>

                    </p>
                    <div className="container  pl-4">

                    </div>
                    <ul className="">
                        <li className="ml-3 px-6">

                        </li>
                        <li className="ml-3 px-6">
                            <p className="flex">

                            </p>
                        </li>
                        <li className="ml-3 px-6">

                        </li>

                        <li className="ml-3 px-6">

                        </li>
                        <li className="ml-3 px-6">

                        </li>
                    </ul>
                </div>




            </div>
        </div>

        <Footer/>
        </>
    )

