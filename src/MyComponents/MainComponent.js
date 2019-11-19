import React from 'react';
import Login from '../MyComponents/LoginComponent';
import Home from '../MyComponents/HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import '../App.css';


class Main extends React.Component{

    constructor(props){
        super(props);

    };


    render(){
 

        return(
            <React.Fragment>
                <Switch>
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Home/:Valid"  render={({match})=>{
                        if( match.params.Valid==1)
                        {
                            return(
                                <Home />
                            );
                        }
                        else
                        {
                            return(
                                <Redirect to="/Login" />
                            );
                        }
                    }} />
                    <Redirect to="/Login" />
                </Switch>
            </React.Fragment>
        );
    };
}

export default Main;