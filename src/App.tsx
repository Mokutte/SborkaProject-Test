import "./App.css";
import { Header } from "./components/Header/Header";
import { Carts } from "./components/Carts/Carts";
import { SneakerInfo } from "./components/SneakerInfo/SneakerInfo";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { Basket } from "./components/Basket/Basket";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  // const { sneakers } = useAppSelector((state) => state.sneakersReducer);
  // const dispatch = useAppDispatch();

  return (
    <div className="App">
      <Header />
      <div className="mainBlock">
      <Routes>
        <Route path="/" element={<Carts/>}/>
        <Route path="/sneakerInfo" element={<SneakerInfo/>}/>
      </Routes>
      <Basket />
      </div>
    </div>
  );
}

export default App;
