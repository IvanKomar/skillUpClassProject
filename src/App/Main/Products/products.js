const products = [
    {
        id:1,
        name: 'iphone SE',
        // description: 'This is cheapes prone from apple',
        type: 'phone',
        price: 300,
        capacity:256,
        image: "/images/products/iphone.png",
    },
    {
        id:2,
        name: 'iphone X',
        description: 'this is iphone x a smartphone from apple',
        type: 'phone',
        price: 1000,
        capacity:256,
        image: "/images/products/iphone.png",
    },
    {
        id:3,
        name: 'iphone XL',
        description: 'this is newest iphone xl',
        type: 'phone',
        price: 1100,
        capacity:256,
        image: "/images/products/iphone.png",
    },
    {
        id:4,
        name: 'ipad Pro',
        description: 'this is ipad pro a tablet from apple',
        type: 'tablet',
        price: 1230,
        capacity:256,
        image: "/images/products/ipod.png",
    },
]


export const getProductsMap = (anyArrayProducts) =>  
    {
    return (anyArrayProducts.reduce((accObj, product)=>({
        ...accObj,
        [product.id]: product
        }), {})
    )}

export default products