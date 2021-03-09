import {NavBar, Footer} from "../../Components";

export const  CommentPage = () => (
    <>
        <NavBar/>

        <div className="p-10 border-4 border-green-900">
            <label htmlFor="w3review">A Place for your thoughts.</label>

            <textarea id="w3review" name="w3review" rows="25" cols="80">
Notes:
            </textarea>
        </div>

        <Footer/>
    </>

)


export default CommentPage