function div9(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let num = 0 ;
    let sum = 0;
    let row = "";


    for ( let i = start; i<=end; i++){
        let num = i ;
        if(num % 9 === 0){
            sum +=num;
        }
    }
    console.log(`The sum: ${sum}`);
    for ( let i = start; i<=end; i++){
        let num = i ;
        if(num % 9 === 0){
            row += num+" ";
            console.log(num);
        }
    }
    console.log(row);
}
div9(["100", "150"])