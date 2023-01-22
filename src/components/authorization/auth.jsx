import React from "react";
import {PageContainer} from "./auth.styles";
import {Signin} from "./sign-in/signin";

export const Auth = () => {
    return(
        <PageContainer>
            <Signin/>
        </PageContainer>
    )
}