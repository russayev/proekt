import React from "react";
import { useState, useEffect, useRef } from "react";
import Filter from "./Filter";

import "./css/product.css";

const Shoes = () => {
  const paginationRef = useRef(null);

  const [api, setApi] = useState("http://localhost:3001/items");
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
      const res = await fetch(`${api}`);
      const data = await res.json();
      setBtns(Math.ceil(data.length / 12));
      paginationButton(btns);
    } catch (error) {
      console.log(error);
    }
  };

  const fetched = async (page, api) => {
    try {
      const req = await fetch(`${api}&page=${page}&limit=12`);
      const res = await req.json();
      setData(res);
    } catch (error) {
      console.log(error);
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
    let carditem = (
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
    setData(data);
    addtoCard();
  };
  const getCard = (id, img, name, category, price, discount) => {
    return (
      <div className="card" key={id}>
        <div className="container" data-id={id}>
          <img src={img} alt="" />
          <div className="overlay"></div>
          <div className="button" data-id={id}>
            <a href="#" data-id={id} className="btn">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="info">
          <h4>{name}</h4>
          <p className="category">{category}</p>
          <p className="price">$ {price}</p>
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
        let res = await fetch(`http://localhost:3001/items/${id}`);
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
          alert("Product added in cart");
        } else {
          alert("Product already in cart");
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
  }, []); // Вызываем addtoCart() только при монтировании компонента

  return (
    <div>
      <hr />
      <br />
      <br />

      <Filter setApi={setApi} />

      <div id="mainpage">
        {/* <div id="filter">
                    <h3>Sort by</h3>
                    <input type="radio" id="desc" name="Sort" value="desc"/>
                    <label htmlFor="desc">High to low</label><br/>

                    <input type="radio" id="asc" name="Sort" value="asc"/>
                    <label htmlFor="asc">Low to High</label><br/>

                    <input type="radio" id="Normal" name="Sort" value="Normal"/>
                    <label htmlFor="Normal">Normal</label><br/>
                    <br/>

                    <hr/>
                    <h3>Brand</h3>
                    <input type="radio" id="CasaCraft" name="brand" value="CasaCraft"/>
                    <label htmlFor="CasaCraft">CasaCraft </label><br/>

                    <input type="radio" id="ARRA" name="brand" value="ARRA"/>
                    <label htmlFor="ARRA">ARRA</label><br/>

                    <input type="radio" id="Chumbak" name="brand" value="Chumbak"/>
                    <label htmlFor="Chumbak">Chumbak</label><br/>

                    <input type="radio" id="Woodsworth" name="brand" value="Woodsworth"/>
                    <label htmlFor="Woodsworth">Woodsworth</label><br/>

                    <input type="radio" id="DreamzzFurniture" name="brand" value="Dreamzz_Furniture"/>
                    <label htmlFor="Dreamzz_Furniture">Dreamz Furniture</label><br/><br/>
                    <hr/>
                </div> */}
        <div id="cardwraper"></div>

        <div id="product">
          {data.map((item) => (
            <div key={item.id} className="card">
              {getCard(
                item.id,
                item.img,
                item.name,
                item.category,
                item.price,
                item.discount
              )}
            </div>
          ))}
        </div>
      </div>

      <div id="pagination">{paginationButton(btns)}</div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Shoes;
