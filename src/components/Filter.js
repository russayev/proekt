import React, { useState, useEffect } from "react";

import "./css/product.css";

const Filter = ({ setApi }) => {
  const handleSortChange = (e) => {
    let newApi = "https://63f5b30259c944921f64b2be.mockapi.io/products?";

    if (e.target.value === "desc") {
      newApi = `${newApi}sortBy=price&order=desc`;
    } else if (e.target.value === "asc") {
      newApi = `${newApi}sortBy=price&order=asc`;
    }

    setApi(newApi);
  };

  const handleBrandChange = (e) => {
    let newData = "https://63f5b30259c944921f64b2be.mockapi.io/products?";

    switch (e.target.value) {
      case "CasaCraft":
        newData = `${newData}category=CasaCraft`;
        break;
      case "ARRA":
        newData = `${newData}category=ARRA`;
        break;
      case "Chumbak":
        newData = `${newData}category=Chumbak`;
        break;
      case "Woodsworth":
        newData = `${newData}category=Woodsworth`;
        break;
      case "Dreamzz_Furniture":
        newData = `${newData}category=Dreamzz%20Furniture`;
        break;
      default:
        break;
    }

    setApi(newData);
  };

  return (
    <div id="mainpage">
      {/* Ваш JSX для компонента фильтрации и сортировки */}
      <div id="filter">
        <h3>Sort by</h3>
        <input
          type="radio"
          id="desc"
          name="Sort"
          value="desc"
          onChange={handleSortChange}
        />
        <label htmlFor="desc">High to low</label>
        <br />

        <input
          type="radio"
          id="asc"
          name="Sort"
          value="asc"
          onChange={handleSortChange}
        />
        <label htmlFor="asc">Low to High</label>

        <br />
        <br />

        <hr />

        <br />

        <h3>Brand</h3>

        <input
          type="radio"
          id="CasaCraft"
          name="brand"
          value="CasaCraft"
          onChange={handleBrandChange}
        />
        <label htmlFor="ARRA">CasaCraft </label>
        <br />

        <input
          type="radio"
          id="ARRA"
          name="brand"
          value="ARRA"
          onChange={handleBrandChange}
        />
        <label htmlFor="ARRA">ARRA </label>
        <br />

        <input
          type="radio"
          id="Woodsworth"
          name="brand"
          value="Woodsworth"
          onChange={handleBrandChange}
        />
        <label htmlFor="Woodsworth">Woodsworth </label>
        <br />
      </div>
    </div>
  );
};

export default Filter;
