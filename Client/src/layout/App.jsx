import { Route,Routes } from "react-router-dom";
import NavBar from "../sections/NavBar";
import RegisterInputs from '../components/RegisterInputs';
import Logearse from '../sections/Logearse'
import Home from '../pages/Home/Home'
import  MysTurnsBoard  from "../pages/TurnsBoard/MyTurnsBoard";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import NewTurns from '../pages/NewTurn/NewTurn'


const App = () => {
    const {where} = useContext(UserContext)
    return (
      <>
        {where === '/' ||where === '/register' ? null: <NavBar />}
        <Routes>
          <Route path="/" element={<Logearse/>}/>
          <Route path="/register" element={<RegisterInputs/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/turns" element={<MysTurnsBoard/>}/>
          <Route path="/newTurn" element={<NewTurns/>}/>
        </Routes>
        </>
    );
}
export default App
