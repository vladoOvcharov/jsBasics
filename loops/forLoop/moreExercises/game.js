function game(input) {
    let index = 0;
    let turn = Number(input[0]);
    index++;
    let price = 0;
    let countTo9 = 0;
    let countTo19 = 0;
    let countTo29 = 0;
    let countTo39 = 0;
    let countTo50 = 0;
    let invalidCount = 0;

    for (let i = 0; i < turn; i++) {
        let digit = Number(input[index]);
        index++;

        if (digit < 0) {
            price /= 2;
            invalidCount++;
        } else if (digit >= 0 && digit <= 9) {
            price += (digit * 0.20)
            countTo9++;
        } else if (digit <= 19) {
            price += (digit * 0.30);
            countTo19++;
        } else if (digit <= 29) {
            price += (digit * 0.40);
            countTo29++;
        } else if (digit <= 39) {
            price += 50;
            countTo39++;
        } else if (digit <= 50) {
            price += 100;
            countTo50++;
        } else {
            price /= 2;
            invalidCount++;
        }

    }
    console.log(`${price.toFixed(2)}`);
    console.log(`From 0 to 9: ${(countTo9 / turn * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(countTo19 / turn * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(countTo29 / turn * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(countTo39 / turn * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(countTo50 / turn * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidCount / turn * 100).toFixed(2)}%`);
}
game(['10',
    '43',
    '57',
    '-12',
    '23',
    '12',
    '0',
    '50',
    '40',
    '30',
    '20',
])