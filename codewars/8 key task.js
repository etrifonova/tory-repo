//Task 1   
// Given a number n, return the number of positive odd numbers below n, EASY!
// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!
// function oddCount(n) {
//     let n
//     if (n%2==0) {
//       n=n/2;
//       return n;
//     }
//     else { 
//       n=(n-1)/2;
//       return n;
//     }
//   }

  // pass a test
  // odd numbers четные числа
  // even numbers нечетные числа


// TASK 2
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
// Simples!
// function fixTheMeerkat(arr) {
//    return arr.reverse();
// }

// console.log(fixTheMeerkat([1, 2, 3, 4, 5, 6]))



//  TASK 3
const Krya= {
  race: "fairy",
  gender: "Female",
  specialization: "Sorceress",
  skills: ["chaos bolt", "magic hand"]
}
 let cast = Krya.skills[1];
 console.log(cast);
Krya.skills.push("fireball");
console.log(Krya.skills);
