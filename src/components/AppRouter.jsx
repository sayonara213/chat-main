import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../constants/routes";
import {AUTH_ROUTE, CHAT_ROUTE} from "../constants/path";
import React from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../services/firebase";

export const AppRouter = () => {
    const [user] = useAuthState(auth);

    return user ?
        (
            <Routes>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                )}
                <Route path='*' element={<Navigate to={CHAT_ROUTE} replace/> }></Route>
            </Routes>
        ) : (
            <Routes>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                )}
                <Route path='*' element={<Navigate to={AUTH_ROUTE} replace/> }></Route>
            </Routes>
        )
}