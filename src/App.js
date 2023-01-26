import { Auth } from './components/authorization/auth'
import { Theme } from './constants/theme'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/AppRouter'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './services/firebase'
import { Loading } from './components/loading/loading'

function App() {
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return (
            <Theme>
                <Loading />
            </Theme>
        )
    }

    return (
        <Theme>
            <BrowserRouter>
                <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <AppRouter />
            </BrowserRouter>
        </Theme>
    )
}

export default App
