import {Footer, NavBar} from "../../Components";

export const MedicationResults = () => (

    <>
        <NavBar/>

        <div className=" bg-blue-200 h-screen  text-2xl text-purple-700">
            <div>
                <p className="text-6xl flex justify-center p-3">
                    Medication List
                </p>

            </div>
            <div className="">
            <p className="text-3xl p-3 pl-10">
                Name of Medication
            </p>
                <div className="container pl-10">
                    <input type="text" placeholder= "Medication" required></input>
                </div>
                <div className="pl-8">
                    <p className="text-2xl p-3">
                        Dosage Regimen
                    </p>
                    <div className="container  pl-4">
                        <input type="text" placeholder="Dosage" required></input>
                    </div>
                </div>

                <div className="pl-10">
                    <p className="text-2xl pl-6">
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

