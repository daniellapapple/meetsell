const initialState = {
  produkDibeli_myProfile: [],
  productItem: [],
  productFeed: [],
  cartBagId: [],
  removeProductCart: null,
  removeSellerCart: null
}

const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_PRODUCT_FEED':
      return {
        ...state,
        productFeed: [action.payload.data.data]
      }
    case 'GET_PRODUCT_MY_PROFILE':
      return {
        ...state,
        produkDibeli_myProfile: state.produkDibeli_myProfile.concat(action.payload.data)
      };
    // case 'GET_PRODUCT_ITEM':
    //   return {
    //     ...state,
    //     productItem: action.payload.data
    //   };
    case 'GET_PRODUCT_DETAIL_ITEM_FEED':
      return {
        ...state,
        productItem: action.payload.data
      };
    case 'ADD_TO_CART':
      let cartSellerIdx = state.cartBagId.findIndex(item => item.seller_id === action.payload.data.productDetail.data.seller_id);
      let productCartLS = JSON.parse(localStorage.getItem('productCart') || '[]');
      let cartSellerFromLS = productCartLS.findIndex(item => item.seller_id === action.payload.data.productDetail.data.seller_id);

      if (productCartLS.length === 0) {
        if (cartSellerFromLS === -1) {
          let objParams = {
            seller_id: action.payload.data.productDetail.data.seller_id,
            seller_name: action.payload.data.productDetail.data.seller_name,
            products: [action.payload.data.productDetail.data],
            total_price: action.payload.data.productDetail.data.price
          };
          let arrayProductCart = JSON.parse(localStorage.getItem('productCart') || '[]');
          arrayProductCart.push(objParams);
          localStorage.setItem('productCart', JSON.stringify(arrayProductCart));
          return {
            ...state,
            productItem: action.payload.data,
            cartBagId: state.cartBagId.concat(objParams)
          };
        }
      } else {
        if (cartSellerFromLS === -1) {
          let objParams = {
            seller_id: action.payload.data.productDetail.data.seller_id,
            seller_name: action.payload.data.productDetail.data.seller_name,
            products: [action.payload.data.productDetail.data],
            total_price: action.payload.data.productDetail.data.price
          };
          let arrayProductCart = JSON.parse(localStorage.getItem('productCart') || '[]');
          arrayProductCart.push(objParams);
          localStorage.setItem('productCart', JSON.stringify(arrayProductCart));
          return {
            ...state,
            productItem: action.payload.data,
            cartBagId: state.cartBagId.concat(objParams)
          };
        } else {
          productCartLS.map((item, idx) => {
            if (item.seller_id === action.payload.data.productDetail.data.seller_id) {
              let cartProId = item.products.findIndex(item => item.product_id === action.payload.data.productDetail.data.product_id);
  
              if (cartProId === -1) {
                let arrTotalPrice = [];
                item.products.push(action.payload.data.productDetail.data)
                item.products.map((item, idx) => {
                  arrTotalPrice.push(item.price)
                })
                item.total_price = arrTotalPrice.reduce((a, b) => {
                  return a + b
                })
  
                let arrayProductCart = JSON.parse(localStorage.getItem('productCart') || '[]');
                arrayProductCart[idx] = item;
                localStorage.setItem('productCart', JSON.stringify(arrayProductCart))
                return {
                  ...state,
                  productItem: action.payload.data
                }
              }
  
              return state;
            }
          })
        };
      };
    case 'SAVE_PRODUCT_ITEM':
      return {
        ...state,
        productItem: action.payload.data
      };
    case 'REMOVE_PRODUCT_FROM_CART':
      let productCartLocalS = JSON.parse(localStorage.getItem('productCart'));

      productCartLocalS.map((item, idx) => {
        let productWillDelete = item.products.filter(product => product.product_id === action.payload.data);

        if(productWillDelete.length > 0) {
          let filterProductItem = item.products.filter(product => product.product_id !== action.payload.data);

          if(filterProductItem.length === 0){
            productCartLocalS.splice(idx, 1);
          } else{
            productCartLocalS[idx].products = filterProductItem;
          }
        }
      });

      localStorage.setItem('productCart', JSON.stringify(productCartLocalS));

      return {
        ...state,
        removeProductCart: true
      }
    case 'REMOVE_SELLER_FROM_CART':
      let sellerCartLS = JSON.parse(localStorage.getItem('productCart'));

      let filterSeller = sellerCartLS.filter(seller => seller.seller_id !== action.payload.data);

      localStorage.setItem('productCart', JSON.stringify(filterSeller));

      return {
        ...state,
        removeSellerCart: true
      }
    default:
      return state;
  }
}

export default productReducer;