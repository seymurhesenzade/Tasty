import React, { useEffect, useState } from "react";
import Card from "../CardLittle/Card";
import axios from "axios";
const CardList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/products").then((res) => {
      setData(res.data.data);
    });
  }, []);

  const handleChange = (value) => {
    axios.get("http://localhost:8080/products").then((res) => {
      setData([
        ...res.data.data.filter((q) =>
          q.title.toLowerCase().includes(value.toLowerCase().trim())
        ),
      ]);
    });
  };

  return (
    <div className="container">
      <input
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search Here"
        type="text"
        style={{ marginTop: "50px", width: "500px", padding: "0.5rem" }}
      />
      <div className="row">
        {data.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
