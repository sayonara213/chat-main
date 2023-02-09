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
import { useDispatch } from 'react-redux'
import { switchProfile } from '../../../../redux/chatsSlice'

export const Navbar = () => {
    const [user, loading, error] = useAuthState(auth)
    const dispatch = useDispatch()

    const handleSignOut = () => {
        auth.signOut().then((r) => console.log(r))
    }

    const showProfileSettings = () => {
        console.log('lol')
        dispatch(switchProfile())
    }

    if (loading) {
        return <Loading />
    }

    return (
        <NavbarWrap>
            <LogoWrap onClick={showProfileSettings}>
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
