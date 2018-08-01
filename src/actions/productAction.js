export const get_product_feed = (payload) => ({
  type: 'GET_PRODUCT_FEED',
  payload: {
    data: payload
  }
})

export const get_product_my_profile = (payload) => ({
  type: 'GET_PRODUCT_MY_PROFILE',
  payload: {
    data: payload
  }
})

export const get_product_item = (payload) => ({
  type: 'GET_PRODUCT_ITEM',
  payload: {
    data: payload
  }
})

export const get_product_detail_item_feed = (payload) => ({
  type: 'GET_PRODUCT_DETAIL_ITEM_FEED',
  payload: {
    data: payload
  }
})

export const add_to_cart = (payload) => ({
  type: 'ADD_TO_CART',
  payload: {
    data: payload
  }
})

export const save_product_item = (payload) => ({
  type: 'SAVE_PRODUCT_ITEM',
  payload: {
    data: payload
  }
})

export const remove_product_from_cart = (payload) => ({
  type: 'REMOVE_PRODUCT_FROM_CART',
  payload: {
    data: payload
  }
})

export const remove_seller_from_cart = (payload) => ({
  type: 'REMOVE_SELLER_FROM_CART',
  payload: {
    data: payload
  }
})

// REQUEST DATA TO SERVER

export const save_product_item_api = (payload) => {
  return async dispatch => {
    const params = {
      token: payload.token,
      productId: payload.productId,
      seller_id: payload.seller_id,
      category_id: payload.category_id,
      title: payload.title,
      desc: payload.desc,
      currency: payload.currency,
      price: (payload.isFree) ? 0 : payload.price,
      condition: payload.condition,
      lat: payload.lat,
      lng: payload.lng,
      add_images: payload.add_images,
      del_images: payload.del_images,
      post_date: payload.post_date
    };

    let API = process.env.REACT_APP_MEET_API;
    let res = await fetch(API + 'product/save', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    let resJSON = await res.json();
    let split = payload.title.split(' ').join('-').toLowerCase();
    let objParams = {
      data: resJSON,
      route: `product/${localStorage.getItem('id')}/${resJSON.data.product_id}/${split}`
    };
    dispatch(save_product_item(objParams));
  };
};

export const get_product_feed_api = (payload) => {
  return async dispatch => {
    const params = {
      token: localStorage.getItem('token'),
      page: payload
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
    let resJSON = await res.json();
    dispatch(get_product_feed(resJSON));
  }
}

export const get_product_my_profile_api = (payload) => {
  return async dispatch => {
    const params = {
      token: localStorage.getItem('token'),
      user_id: localStorage.getItem('id')
    };
    let API = process.env.REACT_APP_MEET_API;
    let res = await fetch(API + 'product/profile', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    let resJSON = await res.json();
    dispatch(get_product_my_profile(resJSON));
  }
}

export const get_product_item_api = (payload) => {
  return async dispatch => {
    const params = {
      product_id: payload
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
    dispatch(get_product_item(resJSON));
  }
}

export const get_product_detail_item_feed_api = (payload) => {
  return async dispatch => {
    const paramsDetail = {
      product_id: payload.product_id
    };
    let API = process.env.REACT_APP_MEET_API;
    let resDetail = await fetch(API + 'product/detail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paramsDetail)
    });
    let resDetailJSON = await resDetail.json();

    const paramsFeed = {
      token: localStorage.getItem('id'),
      page: payload.page
    };
    let resFeed = await fetch(API + 'product/feed', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paramsFeed)
    });
    let resFeedJSON = await resFeed.json();
    let objJSON = {
      productDetail: resDetailJSON,
      productFeed: resFeedJSON
    };
    dispatch(get_product_detail_item_feed(objJSON));
  }
}

export const add_to_cart_api = (payload) => {
  return async dispatch => {
    const paramsDetail = {
      product_id: payload
    };
    
    let API = process.env.REACT_APP_MEET_API;
    let res = await fetch(API + 'product/detail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paramsDetail)
    });
    let resDetailJSON = await res.json();

    const paramsFeed = {
      token: localStorage.getItem('id'),
      page: 0
    };
    let resFeed = await fetch(API + 'product/feed', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paramsFeed)
    });
    let resFeedJSON = await resFeed.json();
    let objJSON = {
      productDetail: resDetailJSON,
      productFeed: resFeedJSON
    };
    dispatch(add_to_cart(objJSON));
  }
}