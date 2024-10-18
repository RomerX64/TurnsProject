import ReactDOM from "react-dom/client";
import './main.css'
import { BrowserRouter } from 'react-router-dom';
import App from './layout/App'
import { UserProvider } from "./contexts/UserContext";
ReactDOM.createRoot(document.getElementById("root")).render(
   
    <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
    </BrowserRouter>
  );
  

