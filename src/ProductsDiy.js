function ProductsDiy({resultProductsDiy}) {
    return(
        <div className="products">
        {resultProductsDiy.map((item, index) => {
            const {name, price, image} = item;
            return(
                <div key={index} className="product-card">
                    <img src={image} alt="Item" width="300px" />
                    <h3>{name}</h3>
                    <h4>Start from: £{price}</h4>
                </div>
            )
        })}
    </div>
    )
}
export default ProductsDiy;