import {Footer, NavBar} from "../Components"

export const Homepage = () => (
        <>
            <NavBar/>
            <div className=" bg-blue-200 h-screen">

                <div clasName="bg-red-200 p-10 text-black text-2xl">

                    <p className="px-6 text-9xl text-green-900 flex-end">
                        Sugar
                    </p>
                    <p className="px-44 p-16 text-6xl ">
                        Get your Diabetes in hand.
                    </p>

                    <div className="rounded-full flex flex-end h-24 w-24 border-2 pl-96  border-green-900 flex-end items-center justify-center"></div>

                </div>
            </div>
            <Footer/>
        </>

    )

