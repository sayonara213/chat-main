import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../../services/firebase'
import {
    LogoWrap,
    NavbarButton,
    NavbarButtonsWrap,
    NavbarWrap,
} from './navbar.styles'

import { IMAGES } from '../../../../constants/images'
import { CircleAvatar } from '../../circle-avatar/circle-avatar'
import { Loading } from '../../../loading/loading'

export const Navbar = () => {
    const [user, loading, error] = useAuthState(auth)
    const handleSignOut = () => {
        auth.signOut().then((r) => console.log(r))
    }

    if (loading) {
        return <Loading />
    }

    return (
        <NavbarWrap>
            <LogoWrap>
                <CircleAvatar src={user.photoURL} size={60} />
            </LogoWrap>
            <NavbarButtonsWrap>
                <NavbarButton src={IMAGES.settings} className={'settings'} />
                <NavbarButton
                    onClick={handleSignOut}
                    src={IMAGES.logOut}
                    className={'sign-out'}
                />
            </NavbarButtonsWrap>
        </NavbarWrap>
    )
}
