import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/header/Nav";
import Home from "./pages/home/Home";
import AddOrder from "./pages/add-order/AddOrder";
import ViewPackges from "./pages/view-packages/ViewPackges";
import { UserDataContext } from "./context/userContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserDataContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages/add" element={<AddOrder />} />
          <Route path="/packages" element={<ViewPackges />} />
        </Routes>
        </UserDataContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
