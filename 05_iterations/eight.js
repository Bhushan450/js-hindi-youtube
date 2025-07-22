const nums=[1,2,3]

// const myTotal=nums.reduce( function (acc,currval){
//     console.log(`acc:${acc} and current value:${currval}`);
    
//     return acc+currval
// },0)

const mytotal=nums.reduce( (acc,currval)=>(acc+currval))


console.log(mytotal);

const shoppingCart=[
    {
        itemName:'js course',
        price:299
    },
    {
        itemName:'py course',
        price:99
    },
    {
        itemName:' mobile dev course',
        price:599
    },
    {
        itemName:' data science course',
        price:599
    }
]

const pricetoPay=shoppingCart.reduce( (acc,item)=>(acc+item.price),0)

console.log(pricetoPay);

