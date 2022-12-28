import "./category-item.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div
      className="category-container"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
      }}
    >
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
