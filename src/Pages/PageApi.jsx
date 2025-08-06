// import React, { useState, useEffect } from 'react'
// import ApiCart from '../Component/ApiCart'

// const PageApi = ({item}) => {
//   const [allProduct, setAllProduct] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const apiCall = await fetch("https://dummyjson.com/products");
//       const apiData = await apiCall.json()
//       setAllProduct(apiData.allProduct)
//     }
//     getData()
//   }, [])

//   return (
//     <>
//       {allProduct.map((item) => (
//         <ApiCart  item={item} />
//       ))}
      
//       {/* <ApiCart /> */}
//     </>
//   )
// }

// export default PageApi

import React, { useState, useEffect } from 'react'
import ApiCart from '../Component/ApiCart'

const PageApi = ({item}) => {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    async function getData() {
      const apiCall = await fetch("https://dummyjson.com/products");
      const apiData = await apiCall.json();
      setAllProduct(apiData.products); // ✅ Correct key
    }
    getData();
  }, []);

  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      {allProduct.map((item) => (
        <ApiCart key={item.id} item={item} /> // ✅ Add key
      ))}
    </div>
  );
}

export default PageApi;
