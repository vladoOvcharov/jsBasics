function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let n = Number(input[index]);
    index++;

    let hasNominee = false;

    for (let i = 0; i < n; i++) {
        let name = input[index];
        index++;
        let tempPoints = Number(input[index]);
        index++;

        let totalPoints = name.length * tempPoints / 2;
        points += totalPoints;
        if (points > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
            hasNominee = true;
            break;
        }
    }
    if (!hasNominee) {
        let diff = 1250.5 - points;
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])