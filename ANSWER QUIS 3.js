// quiz 3

// number 1

function simpleArraySum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i]
    }
    return sum;
}
let arr = [1, 2, 3, 4, 10, 11]
console.log(simpleArraySum(arr))

// number 2

// (a, b) sebagai parameter
function compareTriplets(a, b) {
    let scoreAlice = 0
    let scoreBob = 0
// let scoreAlice & scoreBob utk nampung 
    for (let i = 0; i < a.length; i++)
        if (a[i] > b[i]) {
            scoreAlice += 1 
        } else if (a[i] < b[i]) {
            scoreBob += 1
        } else if (a[i] == b[i]) {
            scoreAlice += 0;
            scoreBob += 0;
        }
    return [scoreAlice, scoreBob]
}

// let value1 & let value2 sebagai argumen dari parameter
let value1 = [17, 28, 30]
let value2 = [99, 16, 8]
console.log(compareTriplets(value1, value2))

// number 3
function extraLongFactorials(n) {
    let sum = 1n;
    for (let i = 2n; i <= n; i++) {
      sum *= i;
    }
    // proces.stdout.write(`${sum}`)
    
    return `${sum}`;
  }
  
  let z = "119622220865480194561963161495657715064383733760000000000";
  console.log(extraLongFactorials(25));

// number 4
  function timeInWords(h, m) {
    let words = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eightteen",
      "nineteen",
      "twenty",
      "twenty one",
      "twenty two",
      "twenty three",
      "twenty four",
      "twenty five",
      "twenty six",
      "twenty seven",
      "twenty eight",
      "twenty nine",
    ];
    return !m
      ? `${words[h]} o' clock`
      : `${
          !(m % 30)
            ? "half"
            : !(m % 15)
            ? "quarter"
            : `${m <= 30 ? words[m] : words[60 - m]} ${`minute${
                m > 1 ? "s" : ""
              }`}`
        } ${m <= 30 ? "past" : "to"} ${words[m <= 30 ? h : h + 1]}`;
  }