function equal(input) {
    let index = 0;
    let num = Number(input[index]);
    index++;
    let couple = 0;
    let coupleSum = 0;
    let numCount = 0;
    let arrayCouple = [];
    let j = 0;
    let minArray = 0;
    let maxArray = 0;
    let diffcouple = 0;
    let diffarray = [];

    for (let i = 0; i < num * 2; i++) {
        couple = Number(input[index]);
        index++;
        numCount++;
        coupleSum += couple;
        if (numCount % 2 === 0) {
            arrayCouple[j] = coupleSum;
            j++;
            coupleSum = 0;
        }
    }
    minArray = Math.min.apply(null, arrayCouple);
    maxArray = Math.max.apply(null, arrayCouple);

        if (minArray === maxArray) {
            console.log(`Yes, value=${minArray}`);
        } else {
            for (let i = 0; i < arrayCouple.length -1 ; i++) {
                diffcouple = arrayCouple[i] - arrayCouple[(i + 1)];
                diffarray[i] = Math.abs(diffcouple);
            }
            console.log(`No, maxdiff=${Math.max.apply(null, diffarray)}`);
        }
}
equal([7,
    34,
    -33,
    52,
    12,
    -32,
    32,
    23,
    41,
    7,
    25,
    34,
    23,
    124,
    21
]);