import {Route, Switch} from 'react-router-dom'
import {Homepage} from "./Pages/Homepage"
import {MedicationResults} from "./Pages/DataResults"
import {FitBit} from "./Pages/DataResults"
import {SugarTracker} from "./Pages/DataResults";


function App() {
    return (
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exaxt path="Pages" component={MedicationResults}/>
            <Route exact path="Pages/DataResults" component={FitBit}/>


        </Switch>

    );
}

export  default  App;