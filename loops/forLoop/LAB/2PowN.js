function numbers(input) {
    let n = Number(input[0]);
    let pow = 1;
    for (let index = 0; index <= n; index++) {
        
        if (index % 2 === 0){
            console.log(Math.pow(2, index));
        }
        
    }
    
    for (let index = 0; index <= n; index++) {
        
        if (index % 2 === 0){
            if (index === 0)console.log(1);
            else {
                pow *= 2;
                console.log(2*pow);
                pow*=2;

            }
        }
        
    }
}
numbers(["10"]);