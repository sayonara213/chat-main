import {Auth} from "./components/authorization/auth";
import {Theme} from "./constants/theme";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/AppRouter";
function App() {
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
              <AppRouter/>
          </BrowserRouter>
      </Theme>
  );
}

export default App;
