function add(num1, num2) {
    return num1 + num2;
}
let result = add(5, 10);
console.log(result /2);
let result2 = add(20, 30);
console.log(result2 * 2);
let result3 = add(result, result2);
console.log(result - result3);

const add2 = (name) => {
    console.log("Hello, " + name );
};
add2("Asli!");
add2("Mohamud!");
add2("Abdi!");