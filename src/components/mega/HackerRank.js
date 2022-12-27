function miniMaxSum(arr) {
    let min = arr[0]
    let max = arr[0]
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }        
        if (arr[i] < min) {
            min = arr[i]
        }
        sum += arr[i]
    }

    let maior = sum - min
    let menor = sum - max

    return console.log(menor, maior)
}

miniMaxSum([1,2,3,4,5])
miniMaxSum([5,5,5,5,5])
