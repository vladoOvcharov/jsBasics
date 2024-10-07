function degree(input) {
    let index = 0;
    let studentsNum = Number(input[index]);
    index++;
    let students2Count = 0;
    let students3Count = 0;
    let students4Count = 0;
    let students5Count = 0;
    let totalDegree = 0;


    for (let i = 0; i < studentsNum; i++) {
        let studentDegree = Number(input[index]);
        index++;
        totalDegree += studentDegree;



        if (studentDegree >= 2.00 && studentDegree <= 2.99) {
            students2Count++;
        } else if (studentDegree >= 3.00 && studentDegree <= 3.99) {
            students3Count++;
        } else if (studentDegree >= 4.00 && studentDegree <= 4.99) {
            students4Count++;
        } else {
            students5Count++;
        }

    }

    console.log(`Top students: ${(students5Count / studentsNum * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(students4Count / studentsNum * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(students3Count / studentsNum * 100).toFixed(2)}%`);
    console.log(`Fail: ${(students2Count / studentsNum * 100).toFixed(2)}%`);
    console.log(`Average: ${(totalDegree / studentsNum).toFixed(2)}`);

}
degree(['6',
    '2',
    '3',
    '4',
    '5',
    '6',
    '2.2'

]);