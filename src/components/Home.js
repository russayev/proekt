import React from "react";
import { useEffect } from "react";

import "../App.css";

const Home = () => {
  useEffect(() => {
    let counter = 1;
    const intervalId = setInterval(() => {
      const radioElement = document.getElementById("radio" + counter);
      if (radioElement) {
        radioElement.checked = true;
        counter++;
        if (counter > 4) {
          counter = 1;
        }
      }
    }, 2500);

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <hr />
      <br />
      <br />

      <div className="main">
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />

            <div className="slide first">
              <img
                src="https://i.ibb.co.com/NsMXPbT/trendshunters32868.jpg"
                alt="error"
              />
            </div>
            <div className="slide">
              <img
                src="https://i.ibb.co.com/mDrT5Vf/WEB-HB1-2x-2102.jpg"
                alt="error"
              />
            </div>
            <div className="slide">
              <img
                src="https://i.ibb.co.com/9cxgq4G/WEB-HB2-2x-2102.jpg"
                alt="error"
              />
            </div>
            <div className="slide">
              <img
                src="https://i.ibb.co.com/SR4rsyx/WEB-HB3-2x-2102.jpg"
                alt="error"
              />
            </div>

            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>
          </div>

          <div className="navigation-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
          </div>
        </div>
      </div>

      <div className="shopByRoom">
        <h1>Shop By Category</h1>
        <div className="Rooms">
          <div>
            <a href="./products">
              <img
                src="https://www.omsa.ru/upload/iblock/9b7/5b751p6l50tzqy856zx84wo0z7fk4wcq.jpg"
                alt="error"
              />
              <p>Shop Clothes</p>
            </a>
          </div>
          <div>
            <a href="./shoes">
              <img
                src="https://www.omsa.ru/upload/iblock/65b/6pusadne14419pmcjqjnfjcarp6ryoyy.jpg    "
                alt="error"
              />
              <p>Shop Shoes</p>
            </a>
          </div>
          <div>
            <a href="./products">
              <img
                src="https://www.omsa.ru/upload/iblock/064/29ykfw1gqbgs54p4o3311mmseoq22k4h.jpg"
                alt="error"
              />
              <p>Shop Underwear</p>
            </a>
          </div>
          <div>
            <a href="./shoes">
              <img
                src="https://www.omsa.ru/upload/iblock/b66/bym32n6zqlv7q619sgtbo8ig2b5plas2.jpg"
                alt="error"
              />
              <p>Shop Socks</p>
            </a>
          </div>
        </div>
      </div>

      <div className="customers-speak">
        <h1>Customers Speak</h1>
        <div className="customers-card">
          <div>
            <img src="https://i.ibb.co.com/1TcGKdX/image.jpg" alt="error" />
            <p>Купила сыну футболку пивозавр, он очень рад. Сыну 6 лет</p>
            <p>Ярослава Лэйсовна</p>
            <p id="gray-small">Алматы</p>
          </div>
          <div>
            <img src="https://i.ibb.co.com/J5D9hmX/image.jpg" alt="error" />
            <p>Качествосы мыкты</p>
            <p>Ануар 😎</p>
            <p id="gray-small">Атырау</p>
          </div>
          <div>
            <img
              src="https://i.ibb.co.com/rw1qs5x/Zhenskaya-kurtka-miaojie-lake-1400x950.jpg"
              alt="error"
            />
            <p>Маган унамады</p>
            <p>Аружан 🍓</p>
            <p id="gray-small">Астана</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
