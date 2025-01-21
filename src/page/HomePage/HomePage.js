import React from "react";
import NavBar from "../../components/navbar/navbar.jsx";
import SlideShow from "../../components/slideshow/slideshow.jsx";
import NewProduct from "../../components/NewProduct/NewProduct.jsx";
import PopoularProduct from "../../components/PopoularProduct/PopoularProduct.jsx";

import Footer from "../../components/footer/footer.jsx";

function HomePage() {
  return (
    <div>
      <NavBar />
      <SlideShow />
      <NewProduct />
      <PopoularProduct />
      <Footer />
    </div>
  );
}

export default HomePage;
