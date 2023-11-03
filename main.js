const  DICAPRIO = "DICAPRIO";
console.log(DICAPRIO.length);
console.log(DICAPRIO[0]);  
const LEONARDO = 'LEONARDO';
let sum = DICAPRIO.length + LEONARDO.length;
console.log(sum);
sum /=  DICAPRIO.length;
console.log(sum);
sum *= LEONARDO.length;
console.log(sum);
let myStr = "jello world";
myStr[0] = "h";
//console.log(myStr[]);
const fourthLetter = myStr[3];
console.log(fourthLetter);
const lastLetter = myStr[myStr.length - 1];
console.log(lastLetter);
const fifthToLastLetter = myStr[myStr.length - 5];
console.log(fifthToLastLetter);
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly"; 
const wordBlanks = "This " + myAdjective + " " + myNoun + " " + myVerb + " very " + myAdverb + ".";
console.log(wordBlanks);

//Assign the following three lines of text into the single variable myStr using escape sequences. 
 
// FirstLine 
//     \SecondLine 
// ThirdLinelet
//let myStry = 'FirstLine\n\t\\SecondLine\nThirdLinelet';
// console.log(myStry) ;
// myStry = 'This is the start. ' + 'This is the end.';
// console.log(myStry) ;
// myStry += ' P.S. this is the string.'
// console.log(myStry) ;
// let myName = 'Tory';
// myStry = 'My name is ' + myName + ' and I am well!'
// console.log(myStry)
// let someAdjective = 'cool and awesome!';
// myStry = "learning to code is ";
// myStry += someAdjective;
// console.log(myStry);
// let lastNameLength = 0;
// const lastName = 'Shafieva';
// lastNameLength = lastName.length;
// console.log(lastNameLength);
// console.log(myName.length + lastName.length);
// console.log(lastName.length % myName.length);
// let firstLetterOfLastName = lastName[0];
// console.log(firstLetterOfLastName); 
// let FourthLetter = lastName[3];
// console.log(FourthLetter);
// a = 3;
// let b = 17;
// let c = 20;
// a += 12;
// b += 9;
// c += 7;
// console.log(a);
// console.log(b);
// console.log(c);

// a -= 6;
// b -= 15;
// c -= 1; 
// console.log(a);
// console.log(b);
// console.log(c);

// a *= 5;
// b *= 3;
// c *= 10;
// console.log(a);
// console.log(b);
// console.log(c);

// a /= 12;
// b /= 4;
// c /= 11;
// console.log(a);
// console.log(b);
// console.log(c);

// const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
// console.log(myStr);



// Task 1. 
// let NOTOK = 20; //вроде конст будет выводить ошибку и лучше будет let, но я сделала как в задании
// NOTOK--;
// console.log(NOTOK); 
// - Declare a const variable and write its name in the upper case (e.g. const MY_VAR) and initialize it to an integer in the range from 10 to 50.
// - Decrement the const variable by 1 using the shorthand way (короткий способ)
// - console.log the const variable.

// Task 2. 
// let OKOK = 30;
// const OK = 25;
// OKOK--;
// let result = OKOK % OK;
// console.log(result);
// result = OK % OKOK;
// console.log(result);

// - Declare two const variables and write their names in the upper case (e.g. const VAR_ONE) and initialize them to integers in the range from 10 to 50.
// - Decrement the first const variable by 1 using the shorthand way (короткий способ)
// - Declare a let variable and write its name in the lower case (e.g. let result1_var) and assign it to the remainder of the first const variable divided by the second const variable.
// - console.log the let variable.
// - Reassign the let variable to the remainder of the second const variable divided by the first const variable.
// - console.log the let variable.

// const KOKO = 30;
// const NOTKOKO = 20;
// const NOTOKOK = 40;
// let result_to = KOKO * NOTKOKO;
// console.log(result_to);
// result_to = result_to /NOTOKOK;
// console.log(result_to); 
// Task 3. 
// - Declare three const variables and write their names in the upper case (e.g. const VAR_FOUR) and initialize them to integers in the range from 10 to 50.
// - Declare a let variable and write its name in the lower case (e.g. let result2_var) and assign it to the product of the first and second const variables.
// - console.log the let variable.
// - Reassign the let variable to the remainder of the let variable (и слева, и справа от = будет одна и та же переменная) divided by the third const variable.
// - console.log the let variable.


// let lala = 15;
// lala--;
// console.log(lala);

// let lolo = 3.0; 
// let koko = 4.5;
// console.log(lolo*koko);
// console.log(lolo/koko);

// let jojo = 10;
// console.log(lala%jojo);

// let hoho ;
// hoho = lolo * koko % jojo;
// console.log(hoho);

// hoho = (lala - lolo + koko)/koko;
// console.log(hoho);


// Task 1
// const numberOne =15;
// const numberTwo =16;
// let resultVarOne = numberTwo + numberOne;
// resultVarOne = numberOne + numberTwo; // как я поняла, я должна была переопределить resultVarOne, а не resultVar, указанный в задании
// // Declare two const variables numberOne and numberTwo and initialize them to any integers smaller than 20.
// Declare another variable resultVarOne with let and initialize it to the sum of the previous two variables).
// In the next line, redefine (переопредели) the resultVar variable by making it the product of numberOne and numberTwo.

// Task 2

// const numberThree = 25;
// const numberFour = 26;
// const numberFive =30;
// let resultVarTwo = numberFive + numberFour + numberThree;
// resultVarTwo = numberThree * numberFour;
// resultVarTwo -= numberFive;

// Declare three const variables numberThree, numberFour and numberFive and initialize them to any integers greater than (больше чем) 20.
// Declare another variable resultVarTwo with let and initialize it to the sum of the previous three variables).
// In the next line, redefine (переопредели) the resultVarTwo variable by making it the product of numberThree and numberFour.
// In the next line, redefine (переопредели) the resultVarTwo variable again by making it the difference (разность) between resultVarTwo (здесь нет опечатки; 
//то есть берем результат прошлого действия resultVarTwo и используем его в переопределении его же) and numberFive.

// const numberOne = 10;
// const numberTwo = 15;
// let resultVarOne = numberTwo + numberOne;
// console.log(resultVarOne)    
// resultVarOne = numberOne * numberTwo;
// console.log(resultVarOne)    


// const numberThree = 40;
// const numberFour = 50;
// const numberFive = 30;
// let resultVarTwo = numberFive + numberFour + numberThree;
// console.log(resultVarTwo);
// resultVarTwo = numberThree * numberFour;
// console.log(resultVarTwo);
// resultVarTwo = resultVarTwo - numberFive;
// console.log(resultVarTwo);

// let myVar = 11;
// myVar--;
// console.log(myVar);

// let myDecimal = 5.74698;
// let randomNumber = 2;
// let outCome = myDecimal / randomNumber;
// console.log(outCome);









// const ELEMENT_1 = 5;
// const ELEMENT_2 = 7;

// ADDITION (+)
// const SUM = ELEMENT_1 + ELEMENT_2;
// console.log(SUM); 
// SUBTRACTION (-)
// const DIFFERENCE = ELEMENT_2 - ELEMENT_1;
// console.log(DIFFERENCE); 

// MULTIPLICATION (*)
// const PRODUCT = ELEMENT_1 * ELEMENT_2;
// console.log(PRODUCT);
// DIVISION (/)
// const QUOTIENT = PRODUCT / ELEMENT_1;
// console.log(QUOTIENT);

// INCREMENTATION
// let inc = 10;
// inc++
// console.log(inc);


// var a;
// a = 7;
// var b;
// b = a; 

// var myFirstName = "Victoria"; 
// var myLastName = "Shafieva";  
// var a = 5;
// var b = 10;
// var c = "I am a";

// a = a +1;
// b = b +5;
// c = c + " String!";

// console.log(a);
// console.log(b);
// console.log(c);

// Modify the existing declarations and assignments so their names use camelCase.
// Do not create any new variables.

// Variable declarations
// let studlyCapVar;
// let properCamelCase;
// let titleCaseOver;

// Variable assignments
// studlyCapVar = 10;
// properCamelCase = "A String";
// titleCaseOver = 9000;

// Update the code so it only uses the let keyword.

// let catName = "Oliver";
// let catName = "Meow!";
// console.log(catName);

//const A = 15;
//const B = 10;
//let C = A + B; 
//console.log(C);

//C = A*B;
//console.log(C) 
