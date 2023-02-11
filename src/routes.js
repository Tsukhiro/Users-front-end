import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./containers/Home"
import Users from "./containers/Users"

function Routes(){


    return(

        <Router>
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/users" component={Users} />
            </Switch>
        </Router>
    )
}


export default Routes

// Router-Dom:
// Quando eu coloco / no meu path ele entende que é a página principal do site.