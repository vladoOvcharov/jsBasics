function lili(input) {
    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toyCount = 0;
    let saveMoney = 0;
    let nextMoney = 10;

    for (let i = 1; i <= age; i++){
    if (i % 2 === 0){
        saveMoney += nextMoney;
        nextMoney += 10;
        saveMoney--;
    }else{
        toyCount++;
    }
    
}
let totalMoney = saveMoney+toyCount*toyPrice;

    let diff = Math.abs(totalMoney-washingMachine);

    if (totalMoney>= washingMachine){
        console.log(`Yes! ${diff.toFixed(2)}`);
    }else {
        console.log(`No! ${diff.toFixed(2)}`);
    }


    
}
lili(["21",

"1570.98",

"3"])