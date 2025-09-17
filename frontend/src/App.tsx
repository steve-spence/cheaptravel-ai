import './App.css'
import Layout from './components/Layout';
import Header from './components/Header';
import GetAllUser from "./components/GetAllUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="get" element={<GetAllUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
