import { useState } from "react";
import { dataDiy } from "./dataDiy";
import ButtonsDiy from "./ButtonsDiy";
import ProductsDiy from "./ProductsDiy";

function Diy () {
    const [productDiy, setProductDiy] = useState(dataDiy);
    const showItemDiy = (searchTerm) => {
        const newItemDiy = dataDiy.filter(item => item.searchTerm === searchTerm);
        setProductDiy(newItemDiy);
    }

    return(
        <div>
            <div className="cont">
            <h1 className='back'>Create your own keychain pendant.</h1>
            </div>
            <ButtonsDiy resultButtonsDiy={showItemDiy}/>
            <ProductsDiy resultProductsDiy={productDiy} />
        </div>
    )
}
export default Diy;