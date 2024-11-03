import React from "react";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";




//Get your components  under return statement and do not forget to import
const App = () => {
  return (
    <>

    <Navigation />
    <Products />
    <Recommended />
    <Sidebar />
    </>

  );
};

export default App;