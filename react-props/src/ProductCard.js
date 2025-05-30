function ProductCard(props) {
  return (
     <div className="card" style={{ width: '18rem' }}>
      <img src={props.imageUrl} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Price: Rs {props.price.toFixed(2)}</p>
        <button className="btn btn-primary" onClick={props.onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default ProductCard;