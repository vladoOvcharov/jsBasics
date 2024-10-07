function clock(input) {

    let min = 0;
    let hour = 0;
    let sec
    for (let i = 0; i < 60; i++) {
        sec = i;
        console.log(`${hour} : ${min} : ${sec} `);
        if (min === 59 && sec === 59) {
            hour++;
            min = -1;
        }
        if (sec === 59) {
            min++;
            i = -1;
        }
     
        if (hour === 24) break;

    }
}