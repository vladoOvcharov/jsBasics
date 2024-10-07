function ending(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let sum1=0;
    let sum = 0;
    
    let repeat = 0;



    for (let i = 0; i < n; i++) {
        let currentValue = Number(input[index]);
        index++;
        sum += currentValue;

        
        if(i===(1+repeat)){
            let currentValue1 = Number(input[index]);
            index++;
            sum1 =sum+currentValue1;
            sum=0;

            repeat +=2;
            console.log(sum1);
        }
        

        
    }
    

}
ending(["7","2","3","4","5","6","7","2","6","7"])                