import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Users from './layouts/Users'
import Login from './layouts/Login'
import Main from './layouts/Main'
import NavBar from './components/ui/NavBar'

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?/:edit?" component={Users} />
                {/* <Route path="/users/:userId?" component={Users} /> */}
                <Route path="/login/:type?" component={Login} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default App
