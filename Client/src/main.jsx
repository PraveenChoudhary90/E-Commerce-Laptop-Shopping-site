import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store.jsx';
import {Provider} from "react-redux";
import LoginContext from './LoginContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <LoginContext>
       <App />
       </LoginContext>
    </Provider>
  </StrictMode>,
)
