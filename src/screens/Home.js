import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

export default function Home() {
  return (
    <div className="container">
      <div>
        <Navbar />
      </div>
      <div><Carousal /></div>
     <div className="container m-3">
      <Card />
      <Card />
      <Card />
      <Card />
     </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
