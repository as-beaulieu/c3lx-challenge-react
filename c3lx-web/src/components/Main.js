import React from 'react'
import Route from "react-router-dom/es/Route";
import Notfound from "../common/NotFound";
import HeartbeatContainer from "../heartbeat/HeartbeatContainer";
import ChallengesContainer from "../challenges/ChallengesContainer";
import {Switch} from "react-router-dom";

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={HeartbeatContainer}/>
            <Route exact path="/challenges" component={ChallengesContainer}/>
            <Route component={Notfound}/> {/* a <Route /> with no path will always be rendered */}
        </Switch>
    </main>
)

export default Main