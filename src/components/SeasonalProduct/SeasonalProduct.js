import React from "react";
import "./SeasonalProduct.css";

function SeasonalProduct() {
  const products = [
    {
      heading: "Seasonal coming ",
      content:
        "A letter is a message written for a variety of purposes, from friendly to formal. They can help maintain bonds between friends, especially if they’re far apart. Letters are also used by professionals to communicate their concerns. In some schools",
      buttonText: "BUY NOW",
      image:
        "https://media-hosting.imagekit.io//a7901b6a6e1f4fea/Untitled_Artwork%2017.jpg?Expires=1832086611&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nPr4i71KF7E6NJ~HSUr53BfDuX-szfRECUfW1VftoyUw~E7qwGcDMc4GEZ~5hfkv7kGpUMXjy-Cjh8LHVSudRz-AVf4BRsXj38LwVKo-iHpEPmOAFtrepyMW2mgccAxsi2oypiayQYWaboiWm0ZEJyVwEQ6OPK6sMM3r0Wd-r4NalJ0g4gyfFSQQGo20H9M3kLObu-Pk5iY1F3CR84Pd5PCoPW9zW1-PNJk6Uis6h-pZctzqw6maSmoiNeQdN7AvQ0tGgSdiah3dTzsw87N52x~9NRaP3ymMxCKMj2r5bSwaoHT-ghxFE8QTEUCtcPAr3ui0YLKIw5Y0hCK-Xr~nng__", // Replace with your actual image URL
    },
    {
      heading: "Seasonal coming",
      content:
        "A letter is a message written for a variety of purposes, from friendly to formal. They can help maintain bonds between friends, especially if they’re far apart. Letters are also used by professionals to communicate their concerns. In some schools",
      buttonText: "BUY NOW",
      image:
        "https://media-hosting.imagekit.io//a7901b6a6e1f4fea/Untitled_Artwork%2017.jpg?Expires=1832086611&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nPr4i71KF7E6NJ~HSUr53BfDuX-szfRECUfW1VftoyUw~E7qwGcDMc4GEZ~5hfkv7kGpUMXjy-Cjh8LHVSudRz-AVf4BRsXj38LwVKo-iHpEPmOAFtrepyMW2mgccAxsi2oypiayQYWaboiWm0ZEJyVwEQ6OPK6sMM3r0Wd-r4NalJ0g4gyfFSQQGo20H9M3kLObu-Pk5iY1F3CR84Pd5PCoPW9zW1-PNJk6Uis6h-pZctzqw6maSmoiNeQdN7AvQ0tGgSdiah3dTzsw87N52x~9NRaP3ymMxCKMj2r5bSwaoHT-ghxFE8QTEUCtcPAr3ui0YLKIw5Y0hCK-Xr~nng__", // Replace with your actual image URL
    },
  ];

  return (
    <section className="seasonal-section">
      {products.map((product, index) => (
        <div
          className={`container seasonal ${
            index % 2 === 0 ? "" : "row-reverse"
          }`}
          key={index}
        >
          <div className="product-text">
            <h2 className="sub-heading">{product.heading}</h2>
            <p>{product.content}</p>
            <button className="shop-button">{product.buttonText}</button>
          </div>
          <div className="product-image">
            <img src={product.image} alt={product.heading} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default SeasonalProduct;
