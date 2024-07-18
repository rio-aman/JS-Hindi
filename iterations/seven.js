const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 ) //this result is pass to below operation and then belows operation to that below and so on 
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);