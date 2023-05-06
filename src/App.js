import { Context, CarsProvider } from "./context/Context";
import React, { useContext, useState, useEffect } from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lyst from "./components/Lyst";
import EditCar from "./components/EditCar";
import AddCar from "./components/AddCar";


function App() {


  let [selectedCar, setSelectedCar] = useState("ceva");



  useEffect(() => {
  }, [{ selectedCar }])


  return (


    <CarsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-cars" element={<Lyst setSelectedCar={setSelectedCar} />} />
          <Route path="/edit-car/:id" element={<EditCar />} />
          <Route path="/add-car" element={<AddCar />} />
        </Routes>
      </BrowserRouter>
    </CarsProvider>


  )
}

export default App;
