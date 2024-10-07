function tenis(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let currentPoints = 0;
    let winnerCount = 0;

    for (let i = 0; i < n; i++) {
        let res = input[index];
        index++
        switch (res) {
            case "W":
                currentPoints += 2000;
                winnerCount++;
                ; break;

            case "F": currentPoints += 1200; break;
            case "SF": currentPoints += 720; break;
        }

    }
    let finalPoints = startPoints + currentPoints;
    let avrgPoints = Math.floor(currentPoints / n);
    let winerPercent = winnerCount / n * 100

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${avrgPoints}`);
    console.log(`${winerPercent.toFixed(2)}%`);



}
tenis (["4",

"750",

"SF",

"W",

"SF",

"W"])