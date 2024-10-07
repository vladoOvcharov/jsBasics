function multi(input) {
    let n = Number(input[0]);



    for (let i = 1; i <= 10; i++) {
        let product = i * n;
        console.log(`${i} * ${n} = ${product}`);
    }

}
multi(["5"])