import React from "react";
import UncontrolledExample from "./Example";
import Products from "./Products";
//import IndividualIntervalsExample from "./Example.js";

const HomePage = () => {
  return (
    <div className="home">
      <UncontrolledExample />
      <div>
        <h1 className="text-center">PRODUCTS</h1>
      
      </div>
      <Products />
    </div>
  );
};

export default HomePage;
