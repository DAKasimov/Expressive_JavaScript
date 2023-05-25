const isEven = (value) =>{
    if (Math.abs(value) === 2){
        return true
    }
    if (Math.abs(value) === 1){
        return false
    }
    else {
        return isEven(Math.abs(value)-2)
    }
}
