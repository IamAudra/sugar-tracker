import {Link} from "react-router-dom"

export const NavBar = () => (
    <div className ="flex bg-gray-100 border-2 border-black p-3 text-2xl text-indigo-600">
        <ul className="flex">
            <li className="ml-3">
                <Link to ="/">Home</Link>
            </li>
            <li className="ml-3">
            <Link to="/medication"> Medication List</Link>
            </li>
            <li className="ml-3">
                <Link to ="/recipes">Recipe Page</Link></li>
            <li className="ml-3">
                <Link to ="/note">Decision/Comment Board</Link>
            </li>
            <li className="ml-3">
                <Link to ="/Bit">FitBit</Link></li>
            <li className="ml-3">
                <Link to ="/sugar">Sugar Tracker</Link>
           </li>
            <li className="ml-3">
                <Link to ="/contact">Contact Us</Link>
            </li>
            <li className="ml-3">
                <Link to ="/about">About</Link>
            </li>
        </ul>
</div>
)