import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const Conditions = () => {
  const conditionsStyle = {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    maxWidth: "800px",
    margin: "0 auto", // Центрирование по горизонтали
    padding: "20px",
    backgroundColor: "#f8f8f8",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={conditionsStyle}>
      <br />

      <h1>Условия соглашения</h1>
      <br />
      <p>
        Добро пожаловать на наш веб-сайт. Продолжая использование сайта, вы
        соглашаетесь с нашими условиями.
      </p>
      <br />

      <h2>1. Пользование сайтом</h2>
      <br />

      <p>
        Вы обязуетесь использовать наш сайт только в законных целях и соблюдать
        все применимые законы и нормы.
      </p>
      <br />

      <h2>2. Конфиденциальность</h2>
      <br />

      <p>
        Мы бережно относимся к вашей конфиденциальности. Прочитайте нашу
        политику конфиденциальности, чтобы узнать больше.
      </p>
      <br />

      <h2>3. Изменения в условиях</h2>
      <br />

      <p>
        Мы оставляем за собой право вносить изменения в наши условия соглашения.
        Пожалуйста, регулярно проверяйте их.
      </p>

      <br />

      <table className="table table-bordered" border="1">
        <thead className="thead-dark">
          <tr>
            <th>Заголовок</th>
            <th>Заголовок</th>
            <th>Заголовок</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
          </tr>
          <tr>
            <td> 0 </td>
            <td> 0 </td>
            <td> 0 </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Conditions;
