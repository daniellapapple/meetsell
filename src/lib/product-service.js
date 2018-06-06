export default class ProductService {

  static async feed(page, onSuccess, onFail) {
    try {
      let params = {
        token: localStorage.getItem('token'),
        page: 0
      };
      let API = process.env.REACT_APP_MEET_API;

      let res = await fetch(API + 'product/feed', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      });
      let resJSON = await res.json()
      onSuccess(resJSON);
    } catch (error) {
      onFail(error);
    };
  };

  static async getProductDetail(productId, onSuccess, onFail) {
    try {
      let params = {
        product_id: productId
      };
      let API = process.env.REACT_APP_MEET_API;

      let res = await fetch(API + 'product/detail', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      });
      let resJSON = await res.json();
      onSuccess(resJSON);
    } catch (error) {
      onFail(error);
    };
  };
  
};