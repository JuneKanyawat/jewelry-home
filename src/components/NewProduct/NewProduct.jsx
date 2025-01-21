import React from "react";
import "./NewProduct.css";
import Card from "../Card/Card";

function NewProduct() {
  const products = [
    {
      image:
        "https://media-hosting.imagekit.io//f3c702ca7bb14399/Untitled_Artwork%2016.jpg?Expires=1832005593&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JDBHA6tFfr~DICLrjCCReO5t6EAhiyHUq4NQK00Bg6kN9W5LGJZt2U3hsOwBZNXU8qOKWTKUcfN~MdgKgGiNADyS-987EcykFrwKS1mssC0CLZsFXoq2Oky2frHVoGEO-j2myjNi0ES0FsrpevCPzigRfC~xXz4k95G-hlfIi4zIiXvDSjdm10yM6riiPf5Lr-F2A~CJfkDrFYypG2MoTownjNFqay0TQc-5kjz8a86bkbGH95thGloBKyNZQwN1pzsh0HUgbQUi8WWvBJx6SeNwf60e74~lMTm5ysQIU8EX~W6nP-vb8uGJPw-hresbhOeZ1gxaNhb02Id5tBqwAg__",
      name: "Product 1",
      price: "$19.99",
    },
    {
      image:
        "https://media-hosting.imagekit.io//f3c702ca7bb14399/Untitled_Artwork%2016.jpg?Expires=1832005593&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JDBHA6tFfr~DICLrjCCReO5t6EAhiyHUq4NQK00Bg6kN9W5LGJZt2U3hsOwBZNXU8qOKWTKUcfN~MdgKgGiNADyS-987EcykFrwKS1mssC0CLZsFXoq2Oky2frHVoGEO-j2myjNi0ES0FsrpevCPzigRfC~xXz4k95G-hlfIi4zIiXvDSjdm10yM6riiPf5Lr-F2A~CJfkDrFYypG2MoTownjNFqay0TQc-5kjz8a86bkbGH95thGloBKyNZQwN1pzsh0HUgbQUi8WWvBJx6SeNwf60e74~lMTm5ysQIU8EX~W6nP-vb8uGJPw-hresbhOeZ1gxaNhb02Id5tBqwAg__",
      name: "Product 2",
      price: "$29.99",
    },
    {
      image:
        "https://media-hosting.imagekit.io//f3c702ca7bb14399/Untitled_Artwork%2016.jpg?Expires=1832005593&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JDBHA6tFfr~DICLrjCCReO5t6EAhiyHUq4NQK00Bg6kN9W5LGJZt2U3hsOwBZNXU8qOKWTKUcfN~MdgKgGiNADyS-987EcykFrwKS1mssC0CLZsFXoq2Oky2frHVoGEO-j2myjNi0ES0FsrpevCPzigRfC~xXz4k95G-hlfIi4zIiXvDSjdm10yM6riiPf5Lr-F2A~CJfkDrFYypG2MoTownjNFqay0TQc-5kjz8a86bkbGH95thGloBKyNZQwN1pzsh0HUgbQUi8WWvBJx6SeNwf60e74~lMTm5ysQIU8EX~W6nP-vb8uGJPw-hresbhOeZ1gxaNhb02Id5tBqwAg__",
      name: "Product 3",
      price: "$39.99",
    },
    {
      image:
        "https://media-hosting.imagekit.io//f3c702ca7bb14399/Untitled_Artwork%2016.jpg?Expires=1832005593&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JDBHA6tFfr~DICLrjCCReO5t6EAhiyHUq4NQK00Bg6kN9W5LGJZt2U3hsOwBZNXU8qOKWTKUcfN~MdgKgGiNADyS-987EcykFrwKS1mssC0CLZsFXoq2Oky2frHVoGEO-j2myjNi0ES0FsrpevCPzigRfC~xXz4k95G-hlfIi4zIiXvDSjdm10yM6riiPf5Lr-F2A~CJfkDrFYypG2MoTownjNFqay0TQc-5kjz8a86bkbGH95thGloBKyNZQwN1pzsh0HUgbQUi8WWvBJx6SeNwf60e74~lMTm5ysQIU8EX~W6nP-vb8uGJPw-hresbhOeZ1gxaNhb02Id5tBqwAg__",
      name: "Product 4",
      price: "$49.99",
    },
  ];

  return (
    <div className="newproduct-section">
      <div className="container center-text">
        <h2 className="sub-heading">NEW PRODUCTS</h2>
        <ul className="link-list">
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>

      <div className="container card-box">
        {products.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewProduct;
