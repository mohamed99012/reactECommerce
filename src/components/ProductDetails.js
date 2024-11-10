
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const css = {
    imageDiv: {
      width: "300px",
      textAlign: "center",
      margin: "20px auto",
    },
    img: {
      maxWidth: "100%",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#2E4A62",
      backgroundColor: "#BFD641",
    },
  };
  const params = useParams();
  let productUrl = "https://fakestoreapi.com/products/";
  let [product, setProduct] = useState({});
  let [rating, setRating] = useState({});
  //   let rate;
  useEffect(() => {
    fetch(`${productUrl}${params.productId}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
        setRating(product.rating);
      });
  }, []);

  return (
    <>
      <div className="container" style={css.imageDiv}>
        <p className="title" style={css.title}>
          {product.title}
        </p>
        <img src={product.image} alt="Product Image" style={css.img} />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">{product.category}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">description</th>
            <td>{product.description}</td>
          </tr>
          <tr>
            <th scope="row">Count</th>
            <td>{rating.count}</td>
          </tr>
          <tr>
            <th scope="row">Price</th>
            <td>{product.price + "$"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default ProductDetails;
