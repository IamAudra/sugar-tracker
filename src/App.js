import logo from './logo.svg';
import {NavBar} from "./Components/NavBar";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
      <>
          <NavBar/>
          <div className="p-10" >
              <h1 className="text-2xl">NavBar Boilerplate</h1>
          </div>
          <Footer/>
      </>

  );
}

export default App;