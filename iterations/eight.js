const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay); 


const gameamount = [
    {
        game1 : "NFS",
        price : 1499
    },
    {
        game2 : "COD",
        price : 599
    },
    {
        game3 : "GOD2",
        price : 299
    },
    {
        game4 : "NFS CARBON",
        price : 1699
    }
]

const gametotal = gameamount.reduce((acc,total)=> acc+total.price,0)

console.log(gametotal)