import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/header/Nav";
import Home from "./pages/home/Home";
import AddOrder from "./pages/add-order/AddOrder";
import ViewPackges from "./pages/view-packages/ViewPackges";
import updatedStatus from "./components/updateStatus/update";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages/add" element={<AddOrder />} />
          <Route path="/packages" element={<ViewPackges />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
