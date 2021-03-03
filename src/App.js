import {Route, Switch} from 'react-router-dom'
import {Homepage} from "./Pages/Homepage"
import {MedicationResults, SugarTracker, RecipePages, FitBit} from "./Pages/DataResults"

function App() {


    return (
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="bit" component={FitBit}/>
            <Route exact path="sugar" component={SugarTracker}/>
            <Route exact path="medication" component={MedicationResults}/>
            <Route exact path="recipes" component={RecipePages}/>
        </Switch>

    );
}

export  default  App;