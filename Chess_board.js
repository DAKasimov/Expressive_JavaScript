function printCnessBoard(n,m){
    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    process.stdout.write('#')
                } else {
                    process.stdout.write(' ')
                }
            }
            else {
                if (j % 2 === 0) {
                    process.stdout.write(' ')
                } else {
                    process.stdout.write('#')
                }
            }
        }
        console.log()
    }
}

printCnessBoard(8,8)