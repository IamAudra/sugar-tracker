import {Route, Switch} from 'react-router-dom'
import {Homepage} from "./Pages/Homepage"
import {MedicationResults, SugarTracker, RecipePages, CommentPage, FitBit, About, Contact} from "./Pages/DataResults"



function App() {


    return (
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/bit" component={FitBit}/>
            <Route exact path="/sugar" component={SugarTracker}/>
            <Route exact path="/medication" component={MedicationResults}/>
            <Route exact path="/recipes" component={RecipePages}/>
            <Route exact path="/note" component={CommentPage}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about" component={About}/>
        </Switch>

    );
}

export  default  App;