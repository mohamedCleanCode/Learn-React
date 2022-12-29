import React from "react";
import ProductsList from "../components/ProductsList";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <ProductsList />
    </div>
  );
}
