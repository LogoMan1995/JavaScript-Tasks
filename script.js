// 1.Напишите функцию filterAdults, которая принимает массив объектов, представляющих людей, и возвращает новый массив, содержащий только тех людей, которым 18 лет и больше.


function filterAdults(people) {
    return people.filter((item) => item.age >= 18)
}


const users = [
    { name: "Иван", age: 20 },
    { name: "Мария", age: 17 },
    { name: "Петр", age: 18 },
    { name: "Анна", age: 25 }
];


let adults = filterAdults(users)
console.log(adults)


//2.Напишите функцию getTotalPrice, которая принимает массив объектов, представляющих товары, и возвращает общую стоимость всех товаров.

function getTotalPrice(products) {
    return products.reduce((acc, current) => acc + (current.price * current.quantity), 0)
}

const products = [
    { name: "Яблоки", price: 50, quantity: 2 },
    { name: "Бананы", price: 30, quantity: 3 },
    { name: "Вишня", price: 100, quantity: 1 }
];

let totalPrice = getTotalPrice(products);
console.log(totalPrice);




//3. Напиши функцию processArray, которая принимает массив чисел, фильтрует только положительные числа, удваивает их, а затем находит сумму получившихся чисел.


function processArray(n) {
    return n.filter((item) => item > 0).map(item => item * 2).reduce((acc, current) => acc + current, 0)
}

console.log(processArray([-1, 2, 3, -4, 5]));


//4.Найти максимальное значение.


function findMax(n) {
    return Math.max(...n)
}



console.log(findMax([1, 5, 3, 9, 2]));


//5.Фильтрация четных чисел


function filterEvenNumbers(n) {
    return n.filter(item => item % 2 === 0)
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));


//6. Напиши функцию addToArray, которая принимает массив и элемент, и добавляет элемент в конец массива.

function addToArray(arr, elem) {
    const newArray = [...arr]
    newArray.push(elem)
    return newArray
}



console.log(addToArray([1, 2, 3], 4));


//7.Напиши функцию removeLastElement, которая принимает массив и удаляет последний элемент, возвращая его.


function removeLastElement(arr) {
    if (arr.length === 0) return undefined;
    return arr.pop();
}


console.log(removeLastElement([1, 2, 3]));
console.log(removeLastElement([]));


//8.Напиши функцию removeFirstElement, которая принимает массив и удаляет первый элемент, возвращая его.

function removeFirstElement(arr) {
    return arr.shift()
}


console.log(removeFirstElement([1, 2, 3]));


//9.Напиши функцию addToFront, которая принимает массив и элемент, и добавляет элемент в начало массива.

function addToFront(arr, elem) {
    let newArray = [...arr];
    newArray.unshift(elem)
    return newArray
}




console.log(addToFront([2, 3], 1))


//10. Напиши функцию getSubArray, которая принимает массив и два индекса, и возвращает новый массив, содержащий элементы между этими индексами.


function getSubArray(arr, startIndex, endIndex) {
    return arr.slice(startIndex, endIndex); 
}

console.log(getSubArray([1, 2, 3, 4, 5], 1, 3)); 




//11.Напиши функцию getFirstNElements, которая принимает массив и число N, и возвращает новый массив, содержащий первые N элементов исходного массива.

function getFirstNElements(arr, N) {
    return arr.slice(0, N); 
}


console.log(getFirstNElements([1, 2, 3, 4, 5], 3)); 



//12.Напиши функцию removeElements, которая принимает массив и два индекса, и удаляет элементы между этими индексами.


function removeElements(arr, startIndex, endIndex) {
    const newArray = [...arr]; 
    newArray.splice(startIndex, endIndex - startIndex); 
    return newArray; 
}


console.log(removeElements([1, 2, 3, 4, 5], 1, 3)); 



//13.Напиши функцию logArrayElements, которая принимает массив и выводит каждый его элемент в консоль

function logArrayElements(arr){
return arr.forEach((item) => {
    console.log(item)
})
}


logArrayElements([1, 2, 3]);


//14.Напиши функцию doubleArray, которая принимает массив чисел и возвращает новый массив, содержащий удвоенные значения этих чисел.

function doubleArray(arr){
    return arr.map(item => item * 2)
}



console.log(doubleArray([1, 2, 3])); 



//15.Напиши функцию filterOddNumbers, которая принимает массив чисел и возвращает новый массив, содержащий только нечетные числа.


function filterOddNumbers(arr){
    return arr.filter(item => item % 2 !== 0)
}



console.log(filterOddNumbers([1, 2, 3, 4, 5]));


//16.Напиши функцию sumArray, которая принимает массив чисел и возвращает их сумму.

function sumArray(arr){
   return arr.reduce((acc,current) => acc + current, 0)
}



console.log(sumArray([1, 2, 3]));


//17.Напиши функцию findFirstEven, которая принимает массив чисел и возвращает первый четный элемент.

function findFirstEven(arr){
   return arr.find(elem => elem % 2 === 0)
}


console.log(findFirstEven([1, 3, 4, 5]));



//18.Напиши функцию hasEvenNumbers, которая принимает массив чисел и возвращает true, если в массиве есть хотя бы одно четное число.

function hasEvenNumbers(arr){
    return arr.some(item => item % 2 === 0)
}

console.log(hasEvenNumbers([1, 3, 5, 7]));


//19.Напиши функцию areAllPositive, которая принимает массив чисел и возвращает true, если все числа положительные.


function areAllPositive(arr){
    return arr.every(item => item > 0)
}

console.log(areAllPositive([1, 2, 3])); 


//20.Напиши функцию containsValue, которая принимает массив и значение, и возвращает true, если массив содержит это значение.

function containsValue(arr,value){
   return arr.includes(value)
}

console.log(containsValue([1, 2, 3], 2)); 


//21.Напиши функцию arrayToString, которая принимает массив строк и возвращает каждое слово с главной буквой, содержащую все элементы, разделенные запятой.

function arrayToString(arr) {
    const capitalizedArray = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)); 
    return capitalizedArray.join(", "); 
}

console.log(arrayToString(['apple', 'banana', 'cherry'])); 



