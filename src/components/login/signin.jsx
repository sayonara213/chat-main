import React, {useState} from "react";
import {
    LoginContainer, LoginImage, OtherButton, OtherButtonsWrap
} from "./signin.styles";

import {IMAGES} from "../../constants/images";
import {Login} from "../form/form-auth/login";
import {Register} from "../form/form-auth/register";

export const Signin = () => {

    const [type, setType] = useState("register");

    const handleClick = (e) => {
        e.preventDefault()

        if(type === "register"){
            setType("login")
        } else {
            setType("register")
        }
    }
    return (
        <LoginContainer>
            <LoginImage src={IMAGES.logo}/>
            {type === "register" ?
                (<Register/>) : (<Login/>)
            }
            <OtherButtonsWrap>
                <OtherButton href={""} onClick={handleClick}>{type === "register" ? "Login" : "Register"}</OtherButton>
                <OtherButton>I forgot</OtherButton>
            </OtherButtonsWrap>
        </LoginContainer>
    )
}