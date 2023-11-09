import { useState } from 'react';
import { data } from './data';
import Products from './Products';
import Buttons from './Buttons';

function Shop() {
    
    const [product, setProduct] = useState(data);
    
    const showItem = (searchTerm) => {
      const newItem = data.filter(item => item.searchTerm === searchTerm);
      setProduct(newItem);
    }
    
    return(
        <div>
          <div className='cont'>
            <h2 className='back'>Free Shipping Over £30.00</h2>
          </div>
          <Buttons resultButtons={showItem}/>
          <Products resultProduct={product}/>
      </div>
    )
}
export default Shop;