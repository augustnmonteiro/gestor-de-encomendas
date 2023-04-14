import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Form from "./pages/form/Form";
import Home from "./pages/home/Home";
import Nav from "./components/header/Nav";
import List from "./pages/List/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/cadastro" element={<Form/>}/>
        </Routes>
        <Routes>
          <Route path="/list" element={<List/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
