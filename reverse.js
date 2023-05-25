const reverseArray = (list) =>{
    let result = []
    for (let i = list.length-1; i >= 0; i--){
        result.push(list[i])
    }
    return result
}

const reverseArrayInPlace = (list) =>{
    for (let i = 0; i < Math.floor(list.length/2); i++){
        let temp = list[i]
        list[i] = list[list.length-i-1]
        list[list.length-i-1] = temp
    }
    return list
}
