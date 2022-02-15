// Write your code below this line.


function luckyNums(n){
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let luckyOne = [];
    for (let i =0; i < n; i++){
        let luckyNum = Math.floor(Math.random() * arr.length)
        luckyOne.push(arr[luckyNum])
    } return luckyOne;
}

console.log(luckyNums(4))