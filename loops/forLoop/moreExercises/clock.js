function clock(input) {

    let min = 0;
    let hour = 0;
    for (let i = 0; i < 60; i++) {
        min = i;
        console.log(`${hour} : ${min}`);
        if (min === 59) {
            hour++;
            i = -1;
        }
        if (hour === 24) break;

    }
}