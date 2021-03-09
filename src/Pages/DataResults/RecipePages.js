import {Footer, NavBar} from "../../Components";

export const RecipePages = () => (

    <>
        <NavBar/>
        <div className="p-10 bg-blue-200  text-purple-700">
            <p className="text-6xl  flex justify-center">
                Recipe Links
            </p>
        <div className=" ">
            <p className="text-2xl">

            </p>
                <p className="text-2xl py-6">
                <a href="https://diabetes.org/healthy-living/recipes-nutrition"> American Diabetic Association Recipes</a>
            </p>

            <p className="text-2xl py-3">
                Diabetic Desserts
                </p>
                <p className="text-2xl py-3">

                  <a href="https://www.tasteofhome.com/collection/diabetic-desserts/">95 Diabetic Desserts: Taste of Home</a>
            </p>

            <p className="text-2xl py-3">
               <a href="https://www.soulfoodandsoutherncooking.com/diabetic-soul-food-recipes.html">Soul Food and Southern Cooking</a>
            </p>
            <p className="text-2xl py-3">
                "These diabetic soul food recipes are for you If you're living with diabetes, have a family history of diabetes or have just been diagnosed with diabetes."
            </p>

            <p className="text-2xl py-3">
                <a href="https://blackdoctor.org/category/healthy-living/healthy-recipes-for-diabetics/">Black Doctor.org</a>
            </p>
            <p className="text-2xl py-3">
             "Where Wellness & Culture Connect: Healthy Recipes for Diabetics"
            </p>
            <p className="text-2xl py-3">
                <a href="https://www.tasteofhome.com/collection/diabetic-vegetarian-recipes/">A Taste of Home: 70 Diabetic-Friendly Vegetarian Recipes</a>
            </p>
        </div>
        </div>
       <Footer/>
        </>
    )