  export const addToCartHandler = (data, cartCtx)=>{
    const item = {
      id: data.id,
      title: data.title,
      price: data.price,
      image: data.image,
      quantity: 1
    };
    cartCtx.addToCart(item);
    cartCtx.addedToCartHandler();
    console.log(cartCtx.showAddedToCart)

  };