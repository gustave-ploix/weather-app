import React, { useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import CitySelect from './pages/CitySelect';
import Weather from './pages/Weather';

export default function App (){

    const [zip, setZip ] = useState("")

    useEffect(() => {
        console.log(zip);
    }, [zip])

    return(

        <Router>
             <main>
                 <Switch>
                     <Route exact path="/">
                        <CitySelect zip={zip} setZip={setZip}/>
                     </Route>
                     <Route path="/weather/:zipCode">
                        <Weather />
                     </Route>
                 </Switch>
             </main>
        </Router>

    )

}