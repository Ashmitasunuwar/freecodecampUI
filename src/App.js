
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";
import SignIn from "./components/SignIn";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}


export default App;
