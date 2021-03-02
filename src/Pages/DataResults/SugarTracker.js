export const SugarTracker = () => (
    <>
        <NavBar/>

        <div className=" bg-blue-200 h-screen text-purple-700">

            <div clasName=" text-2xl">

                <p className="px-6 flex justify-center text-6xl p-16 text-purple-700">
                    What would you like to eat today?
                </p>

                <div className="flex">
                    <p className="text-5xl p-3 flex">
                       Name of food
                    </p>
                    <div className="container pl-4 pt-20">
                        <input type="text" placeholder= "Food" name="bp" required></input>
                    </div>
                </div>


                <div className="flex">
                    <p className="text-5xl p-3 pt-10">
                        Food Results
                    </p>
                    <div className="pt-16">
                        <input type="text" placeholder="Food Results" name="fr" required></input>
                    </div>
                    <div className="pt-40">
                        <p className="text-2xl">
                            Calories
                            <input type="text" placeholder="Calories" name="cal" required></input>
                        </p>
                    </div>
                    <div className="flex pt-40">
                        <p className="text-2xl">
                            Sodium
                            <input type="text" placeholder="Sodium" name="sodium" required></input>
                        </p>
                    </div>
                    <div className="flex pt-40">
                        <p className="text-2xl">
                            Sugars
                            <input type="text" placeholder="Sugars" name="sugar" required></input>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </>

)





