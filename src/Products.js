function Products ({resultProduct}) {
    return(
        <div className="products">
          {resultProduct.map((item, index) => {
            const {name, price, image} = item;
            return(
              <div className="product-card" key={index}>
                <img src={image} alt="Item" width="300px" />
                <h3>{name}</h3>
                <h4>price from: £{price}</h4>
              </div>
            )
          })}
        </div>
      )
}
export default Products;