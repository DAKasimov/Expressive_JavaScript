const range = (start, finish, step=1) =>{
    let list = []
    if (step > 0) {
        for (let i = start; i <= finish; i += step) {
            list.push(i)
        }
    }
    else {
        for (let i = start; i >= finish; i -= Math.abs(step)){
            list.push(i)
        }
    }
    return list
}


const sum = (list) =>{
    let s = 0
    for (let i = 0; i < list.length; i++){
        s += list[i]
    }
    return s
}



