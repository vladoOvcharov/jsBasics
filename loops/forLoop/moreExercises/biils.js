function bills(input) {
    let index = 0;
    let months = Number(input[index]);
    index++;
    let electicityBill = 0;
    let water = 0;
    let internet = 0;
    let others = 0;

    for (let i = 0; i < months; i++) {
        let electricity = Number(input[index]);
        index++
        electicityBill += electricity;
        water += 20;
        internet += 15;
        others += ((electricity + 20 + 15) * 1.20);

    }

    let averageBill = (others + others / 1.20) / months;

    console.log(`Electricity: ${electicityBill.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${averageBill.toFixed(2)} lv`);

}
bills(['8',
    '123.54',
    '231.54',
    '140.23',
    '100',
    '122.4',
    '430',
    '178.52',
    '64.2'
    
    ]);