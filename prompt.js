/*task 1 */
const one = prompt("pick a number please")
const two = prompt("pick a another number please")

/*task 2 */
const one1 = parseInt(one);
const two2 = parseInt(two);

/*task 3*/
console.log(one1 - one2);
console.log(one1 + one2);
console.log(one1 / one2);
console.log(one1 * one2);
console.log(one1 ** one2);
console.log(one1 % one2);

/* task 4 */

const random = Math.floor(Math.random() * 35) + 1;
alert("The random number is ${random}");