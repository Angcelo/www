import React from 'react'
import { Switch, Route,Redirect } from 'react-router-dom'
import Navigation from './components/Navigation'
import Reporte from './components/InConsole'

const Routes = () => {
    return (
        <Switch>
            <Route exact path = "/www" component={Navigation}/>
            <Route exact path = "/www/reporte" component={Navigation}/>
            <Route exact path = "/Grupo17" component={Navigation}/>
            <Route exact path = "/www/Grupo17" component={Navigation}/>
            <Route exact path = "/Grupo17/reporte" component={Reporte}/>
            <Route exact path = "/www/Grupo17/reporte" component={Reporte}/>
        </Switch>
    );
}

export default Routes;
