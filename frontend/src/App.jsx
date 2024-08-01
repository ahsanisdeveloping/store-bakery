import "./App.css";
import Competition from "./components/Competition";
import Header from "./components/Header";
import AddItem from "./screens/AddItem";
import Auth from "./screens/Auth";
import ManageItems from "./screens/ManageItems";
import { BrowserRouter as MainRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      {/* <Competition/> */}
      <MainRouter>
        <Header/>
        <Routes>
          <Route path={'/'} element={<Auth/>}/>
          <Route path={'/add-product'} element={<AddItem/>}/>
          <Route path={'/manage-products'} element={<ManageItems/>}/>
        </Routes>
      </MainRouter>
    </div>
  );
}

export default App;
