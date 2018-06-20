import Env from '../lib/env';

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

  static async save(productId, categoryId, title, desc, isFree, price, condition, lat, lng, addImages, delImages, onSuccess, onFail) {
    try {
      let params = {
        token: localStorage.getItem('token'),
        product_id: productId,
        seller_id: localStorage.getItem('id'),
        category_id: categoryId,
        title: title,
        desc: desc,
        currency: 'IDR',
        price: (isFree) ? 0 : price,
        condition: condition,
        lat: lat,
        lng: lng,
        add_images: addImages,
        del_images: delImages,
        post_date: Env.toUTC()
      };
      let API = process.env.REACT_APP_MEET_API;

      let res = await fetch(API + 'product/save', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
      let resJSON = await res.json()
      onSuccess(resJSON)
    } catch(error) {
      onFail(error)
    }
  }
  
};