function salary(input) {
    let index = 0;
    let numTam = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;

    let fine = 0;
    let noSalary = false;

    for (let i = 0; i < numTam; i++) {
        let website = input[index];
        index++;
        if (website === undefined) {  // when range of loop is bigger than elements of input array; Numtam = 10 and input(index<(10-1))
            break;
        }
        switch (website) {
            case "Facebook": fine = 150; break;
            case "Instagram": fine = 100; break;
            case "Reddit": fine = 50; break;
            default: fine = 0; break;

        }
        salary -= fine;

        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            noSalary = true;
            break;
        }
    }

    if (!noSalary) {
        console.log(salary);
    }

}
salary(["10",

    "750",

    "Facebook",

    "Dev.bg"])