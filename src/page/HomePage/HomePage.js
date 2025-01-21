import React from "react";
import NavBar from "../../components/navbar/navbar.js";
import SlideShow from "../../components/slideshow/slideshow.js";
import NewProduct from "../../components/NewProduct/NewProduct.js";
import PopoularProduct from "../../components/PopoularProduct/PopoularProduct.js";
import SeasonalProduct from "../../components/SeasonalProduct/SeasonalProduct.js";

import Footer from "../../components/footer/footer.js";

function HomePage() {
  return (
    <div>
      <NavBar />
      <SlideShow />
      <NewProduct />
      <PopoularProduct />
      <SeasonalProduct />
      <Footer />
    </div>
  );
}

export default HomePage;
