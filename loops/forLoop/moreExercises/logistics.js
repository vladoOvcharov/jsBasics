function logistic(input) {
    let index = 0;
    let loadCount = Number(input[index]);
    index++;
    let load = 0; // weight of every load
    let totalLoad = 0; // total weight of all loads
    let price = 0;
    let busCount = 0;
    let truckCount = 0;
    let trainCount = 0;


    for (let i = 0; i < loadCount; i++) {
        load = Number(input[index]);
        index++;
        totalLoad += load;

        if (load <= 3) {
            busCount += load;
            price += (load * 200);
        } else if (load <= 11) {
            truckCount += load;
            price += (load * 175);
        } else {
            trainCount += load;
            price += (load * 120)
        }
    }


    let averagePriceforTone = price / totalLoad;
    console.log(averagePriceforTone.toFixed(2));

    let busPercentage = busCount / totalLoad * 100;
    console.log(`${busPercentage.toFixed(2)}%`);

    let truckPercentage = truckCount / totalLoad * 100;
    console.log(`${truckPercentage.toFixed(2)}%`);

    let trainPercentage = trainCount / totalLoad * 100;
    console.log(`${trainPercentage.toFixed(2)}%`);

}
logistic(["5",
    "2",
    "10",
    "20",
    "1",
    "7",
    ]);
