import React from 'react';
import'./Login.css';
import {Button} from "@material-ui/core";
import {auth, provider} from "./firebase";
import {useStateValue} from "./StateProvider";
import { actionTypes } from './reducer';


function Login() {

const [state, dispatch] = useStateValue();


    const signIn= () => {

        auth
            .signInWithPopup(provider)
            .then((result) =>{
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user:result.user,
                });
            })
            .catch((error) =>{
                alert(error.message);
            });

    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://static.dezeen.com/uploads/2019/01/slack-rebrand-pentagram-michael-bierut_dezeen_426-sq.gif" alt=""/>
                <h2>Sign in to Slack Clone</h2>
                <h6>By AlbertCos</h6>
                <Button onClick={signIn}> Sign In with Google </Button>
                
            </div>
        </div>
    )
}

export default Login
