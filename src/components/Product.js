import React, { useState, useEffect, useRef } from "react";
import Filter from "./filter/product_filter";
import "./css/product.css";

const Product = () => {
  const paginationRef = useRef(null);

  const [api, setApi] = useState("http://localhost:3000/products/");
  const [btns, setBtns] = useState(0);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    countData(api);
    fetched(1, api);
  }, [api]);

  useEffect(() => {
    fetched(page, api);
  }, [page, api]);

  const countData = async (api) => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      setBtns(Math.ceil(data.length / 12));
    } catch (error) {
      console.error("Error counting data:", error);
    }
  };

  const fetched = async (page, api) => {
    try {
      const req = await fetch(`${api}&_page=${page}&_limit=12`);
      const res = await req.json();
      setData(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const paginationButton = (page) => {
    const buttons = [];
    for (let i = 1; i <= page; i++) {
      buttons.push(
        <button
          key={i}
          className="paginationBtn"
          data-page-number={i}
          onClick={(e) => handlePageClick(e)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  useEffect(() => {
    if (paginationRef.current) {
      paginationRef.current.innerHTML = paginationButton(btns)
        .map((button) => button.outerHTML)
        .join("");
    }
  }, [btns]);

  const handlePageClick = (e) => {
    e.preventDefault();
    setPage(Number(e.target.dataset.pageNumber));
  };

  const display = (data) => {
    if (!data || !Array.isArray(data)) {
      return null;
    }

    return (
      <div id="product">
        {data.map((ele) =>
          getCard(
            ele.id,
            ele.img,
            ele.name,
            ele.category,
            ele.price,
            ele.discount
          )
        )}
      </div>
    );
  };

  const getCard = (id, img, name, category, price, discount) => {
    const handleButtonClick = async (e) => {
      e.preventDefault();
      let id = e.target.dataset.id;
      try {
        let res = await fetch(`http://localhost:3000/products/${id}`);
        let ele = await res.json();
        let obj = {
          quantity: 1,
          name: ele.name,
          category: ele.category,
          img: ele.img,
          price: ele.price,
          discount: ele.discount,
          id: ele.id,
        };
        if (checkDuplicate(obj)) {
          alert("Product added to cart");
        } else {
          alert("Product is already in the cart");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    return (
      <div className="card" key={id}>
        <div className="container" data-id={id}>
          <img src={img} alt="" />
          <div className="overlay"></div>
          <div className="button" data-id={id}>
            <a
              href="#"
              data-id={id}
              className="btn"
              onClick={handleButtonClick}
            >
              Add to Cart
            </a>
          </div>
        </div>
        <div className="info">
          <h4>{name}</h4>
          <p className="category">{category}</p>
          <p className="price">₸ {price}</p>
          <p className="discount">{discount}% Off</p>
        </div>
      </div>
    );
  };

  const checkDuplicate = (ele) => {
    // Реализуйте вашу проверку наличия элемента в состоянии React или в локальном хранилище
    return true; // Замените этот код на вашу проверку
  };

  const addtoCard = () => {
    const handleButtonClick = async (e) => {
      e.preventDefault();
      let id = e.target.dataset.id;
      try {
        let res = await fetch(`http://localhost:3000/products/${id}`);
        let ele = await res.json();
        let obj = {
          quantity: 1,
          name: ele.name,
          category: ele.category,
          img: ele.img,
          price: ele.price,
          discount: ele.discount,
          id: ele.id,
        };
        if (checkDuplicate(obj)) {
          alert("Product added to cart");
        } else {
          alert("Product is already in the cart");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    let btn = document.querySelectorAll(".button");
    btn.forEach((link) => {
      link.addEventListener("click", handleButtonClick);
    });
  };

  useEffect(() => {
    addtoCard();
  }, []);

  return (
    <div>
      <hr />
      <br />
      <br />

      <Filter setApi={setApi} />

      <div id="mainpage">
        <div id="cardwraper"></div>

        <div id="product">{display(data)}</div>
      </div>

      <div id="pagination">{paginationButton(btns)}</div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default Product;
