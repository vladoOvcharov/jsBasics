function football(input) {
    let index = 0;
    let capacity = Number(input[index]);
    index++;
    let totalFans = Number(input[index]);
    index++;
    let fan = 0;
    let fansA = 0;
    let fansB = 0;
    let fansV = 0;
    let fansG = 0;


    for (let i = 0; i < totalFans; i++) {
        fan = input[index];
        index++;

        switch (fan) {
            case "A": fansA++; break;
            case "B": fansB++; break;
            case "V": fansV++; break;
            case "G": fansG++; break;
        }
    }

    console.log(`${(fansA/totalFans*100).toFixed(2)}%`);
    console.log(`${(fansB/totalFans*100).toFixed(2)}%`);
    console.log(`${(fansV/totalFans*100).toFixed(2)}%`);
    console.log(`${(fansG/totalFans*100).toFixed(2)}%`);
    console.log(`${(totalFans/capacity*100).toFixed(2)}%`);
}
football(['93',
    '16',
    'A',
    'V',
    'G',
    'G',
    'B',
    'B',
    'G',
    'B',
    'A',
    'B',
    'B',
    'B',
    'A',
    'B',
    'B',
    'A'
    
    ])