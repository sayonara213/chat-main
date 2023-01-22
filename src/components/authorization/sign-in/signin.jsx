import React from "react";
import {
    LoginContainer, LoginImage,
} from "./signin.styles";

import {IMAGES} from "../../../constants/images";
import {Login} from "../form/login";
import {Register} from "../form/register";
import {useSelector} from "react-redux";

export const Signin = () => {

    const isLogin = useSelector(state => state.auth.isLogin)

    return (
        <LoginContainer>
            <LoginImage src={IMAGES.logo}/>
            {!isLogin ?
                (<Register/>) : (<Login/>)
            }
        </LoginContainer>
    )
}