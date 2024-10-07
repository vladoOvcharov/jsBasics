function sum(input) {
    let word = input[0];
    let sum = 0;


    for (let i = 0; i < word.length; i++) {
        let num = Number(word[i]);
        sum +=num;


    }

console.log(`The sum of the digits is:${sum}`);
}
sum(["564891"]);