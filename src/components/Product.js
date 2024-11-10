import { Link } from "react-router-dom";
function Product({ image, title, id }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "18rem",
        padding: "10px",
        position: "relative",
     
      }}
    >
      <div className="product-image" style={{ borderBottom: "1px solid gray" }}>
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ maxWidth: "100%", maxHeight: "400px" }}
        />
      </div>

      <div
        className="card-body"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
        <h5
          className="card-title"
          style={{ fontSize: "18px", fontWeight: "normal" }}
        >
          {title}
        </h5>

        <Link to={"/product/" + id} style={{}} className="btn bg-success text-white">
          Details
        </Link>
      </div>
    </div>
  );
}
export default Product;
