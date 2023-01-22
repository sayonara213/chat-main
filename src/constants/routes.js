import {AUTH_ROUTE, CHAT_ROUTE} from "./path";
import {Auth} from "../components/authorization/auth";
import {Chat} from "../components/chat/chat";

export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: <Auth/>,
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: <Chat/>,
    }
]
