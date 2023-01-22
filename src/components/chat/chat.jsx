import {auth} from "../../services/firebase";

export const Chat = () => {

    const handleClick = () => {
        auth.signOut().then(r => console.log(r));
    }

    return(
        <button onClick={handleClick}>Sign out</button>
    )
}
