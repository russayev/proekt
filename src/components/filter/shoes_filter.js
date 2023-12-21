import React from "react";

import "../css/product.css";

const Filter = ({ setApi }) => {
  const handleSortChange = (e) => {
    let newApi = "http://localhost:3000/shoes?";

    if (e.target.value === "desc") {
      newApi = `${newApi}_sort=price&_order=desc`;
    } else if (e.target.value === "asc") {
      newApi = `${newApi}_sort=price&_order=asc`;
    } else {
      newApi = `${newApi}`;
    }
    setApi(newApi);
  };

  const handleBrandChange = (e) => {
    let newData = "http://localhost:3000/shoes?";

    switch (e.target.value) {
      case "adidas":
        newData = `${newData}category=adidas`;
        break;

      case "nike":
        newData = `${newData}category=nike`;
        break;

      default:
        break;
    }

    setApi(newData);
  };

  return (
    <div id="mainpage">
      <div id="filter">
        <h3>Sort by</h3>
        <br />

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

        <input
          type="radio"
          id="all"
          name="Sort"
          value="all"
          onChange={handleSortChange}
        />
        <label htmlFor="all">Show all</label>

        <br />
        <br />

        <hr />

        <br />

        <h3>Brand</h3>
        <br />

        <input
          type="radio"
          id="adidas"
          name="brand"
          value="adidas"
          onChange={handleBrandChange}
        />
        <label htmlFor="adidas">Adidas </label>
        <br />

        <input
          type="radio"
          id="nike"
          name="brand"
          value="nike"
          onChange={handleBrandChange}
        />
        <label htmlFor="nike">Nike </label>
        <br />
      </div>
    </div>
  );
};

export default Filter;
