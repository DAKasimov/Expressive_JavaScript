const FizzBuzz = (count) =>{
    for (let i = 0; i < count; i++){
        if ( i % 3 === 0){
            console.log('Fizz', i)
        }
        else if (i % 5 === 0 && i % 3 !== 0){
            console.log('Buzz', i)
        }
        else if (i % 5 === 0 && i % 3 === 0){
            console.log('FizzBuzz', i)
        }
        else {
            console.log(i)
        }
    }
}
