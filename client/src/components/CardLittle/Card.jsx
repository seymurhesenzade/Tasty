import "../CardLittle/index.scss";
const Card = ({ item }) => {
  return (
    <div className="col-4 mt-2">
      <div className="custom__card">
        <div className="image">
          <img
            src={item.imageUrl}
          />
        </div>
        <div className="title">
          <div className="title-title">{item.title}</div>
          <div className="title-desc">Meat, Potatoes, Rice, Tomatoe</div>
        </div>
        <div className="price">{item.price}$</div>
      </div>
    </div>
  );
};

export default Card;
