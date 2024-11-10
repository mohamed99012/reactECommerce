import { useState, useEffect } from "react";
import Product from "./Product";
function ProductsContainer() {
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);
  let apiUrl = "https://fakestoreapi.com/products";
  let getAllProducts = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  };
  let getCategories = () => {
    fetch(`${apiUrl}/categories`)
      .then((response) => response.json())
      .then((categories) => {
        setCategories(categories);
      });
  };
  let filterTheProducts = (cat) => {
    fetch(`${apiUrl}/category/${cat}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  };
  useEffect(() => {
    getAllProducts();
    getCategories();
  }, []);
  const contS = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill , minmax(300px , 1fr))",
    gridGap: "15px",
  };
  return (
    <div className="container">
      <h3>Our Products</h3>
      <div
        className="category-filter"
        style={{ padding: "20px 0", display: "flex", gap: "5px" }}
      >
        {categories.map((cat) => {
          return (
            <button
              key={cat}
              className="btn bg-primary"
              style={{ color: "white", display: "block" }}
              onClick={() => {
                filterTheProducts(cat);
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <div className="items" style={contS}>
        {products.map((item) => {
          return (
            <Product
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ProductsContainer;
