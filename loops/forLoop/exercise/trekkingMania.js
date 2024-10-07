function trekkingMania(input) {
    let index = 0;
    let groupCounter = Number(input[index]);
    index++;
    let musalaCounter = 0;
    let moncblancCounter = 0;
    let kilimangaroCounter = 0;
    let k2Counter = 0;
    let everestCounter = 0;
    let totalPeople = 0;

    for (let i = 0; i < groupCounter; i++) {
        let peopleCounter = Number(input[index]);
        index++;
        totalPeople += peopleCounter;

        if (peopleCounter <= 5) musalaCounter += peopleCounter;
        else if (peopleCounter <= 12) moncblancCounter += peopleCounter;
        else if (peopleCounter <= 25) kilimangaroCounter += peopleCounter;
        else if (peopleCounter <= 40) k2Counter += peopleCounter;
        else everestCounter += peopleCounter;
    }
    console.log(`${(musalaCounter / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(moncblancCounter / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimangaroCounter / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2Counter / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everestCounter / totalPeople * 100).toFixed(2)}%`);
}
trekkingMania(["10",

    "10",

    "5",

    "1",

    "100",

    "12", "26", "17", "37", "40", "78"])