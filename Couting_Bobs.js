const countBs = (str) =>{
    let count = 0
    for ( let i = 0; i< str.length-1; i++){
        if (str[i] === 'B'){
            count++
        }
    }
    return count
}

const countChar = (str, symbol) =>{
    let count = 0
    for ( let i = 0; i< str.length-1; i++){
        if (str[i] === symbol){
            count++
        }
    }
    return count
}
