/*
//function for avg
  
function calcAvgSquare(n1,n2,n3) {
  let avgSquare = (((n1 + n2 + n3)/3) * (n1*n1))
  return avgSquare
  }

number1 = Number(prompt("Enter the first number: "))
number2 = Number(prompt("Enter the second number: "))
number3 = Number(prompt("Enter the third number: "))
answer = calcAvgSquare(number1, number2, number3)

//function for random multiply
  
function randomMultiply(n4,n5) {
  let multiplyNums = n4 * n5
  return multiplyNums
}

//variables for random function
let number4 = Number(prompt("Enter the fourth number: "))
let number5 = Math.random() * 10
let answerRandom = randomMultiply(number4, number5)
let askUser = prompt("Do you want to do an average calculation or a random multiplication? average or random")
let decision = askUser.toLowerCase()

  if (decision == "random") {
    alert(`The result of multiplying the random number of ${number5} with ${number4} is ${answerRandom}`)
  } else if (decision == "average") {
    alert(`The answer is ${answer}`)
  } else {
    alert("You didn't pick either of the options. Have a nice day!")
  }
*/
  
