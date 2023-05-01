// //Задача №1
// function averageNumericElements(arr) {
//     let sum = 0;
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
//         sum += arr[i];
//         count++;
//       }
//     }
//     if (count === 0) {
//       return 0;
//     } else {
//       return sum / count;
//     }
//   }
  
//   // Приклад використання:
//   const arr = [1, 'a', 2, null, 3, undefined, 4];
//   const result = averageNumericElements(arr);
//   console.log(result); // 2.5

//   //Задача №  2
//   function doMath(x, znak, y) {
//   let result;
//   switch (znak) {
//     case '+':
//       result = x + y;
//       break;
//     case '-':
//       result = x - y;
//       break;
//     case '*':
//       result = x * y;
//       break;
//     case '/':
//       result = x / y;
//       break;
//     case '%':
//       result = x % y;
//       break;
//     case '^':
//       result = Math.pow(x, y);
//       break;
//     default:
//       console.log('Invalid operator');
//   }
//   return result;
// }

// // Приклад використання:
// const x = 5;
// const y = 3;
// const operator = '+';
// const result = doMath(x, operator, y);
// console.log(result); // 8


// //Задача № 3

// function fillArray() {
//     const numRows = parseInt(prompt('Enter number of rows:'));
//     const numCols = parseInt(prompt('Enter number of columns:'));
  
//     const arr = [];
  
//     for (let i = 0; i < numRows; i++) {
//       const row = [];
  
//       for (let j = 0; j < numCols; j++) {
//         const val = prompt(`Enter value for row ${i}, column ${j}:`);
//         row.push(val);
//       }
  
//       arr.push(row);
//     }
  
//     return arr;
//   }
  
//   // Приклад використання
//   const myArray = fillArray();
//   console.log(myArray);


//Задача №4

function removeChars(str, charsToRemove) {
    // Перетворюємо символи для видалення в об'єкт Set для оптимізації пошуку
    const charsSet = new Set(charsToRemove);
    
    // Розбиваємо рядок на масив символів
    const chars = str.split('');
  
    // Фільтруємо масив символів, залишаючи тільки ті, які не належать до символів для видалення
    const filteredChars = chars.filter(char => !charsSet.has(char));
    
    // Збираємо масив символів назад у рядок
    const filteredStr = filteredChars.join('');
    
    // Повертаємо відфільтрований рядок
    return filteredStr;
  }
  
  // Приклад використання:
  const str = "hello world";
  const charsToRemove = ['l', 'd'];
  const filteredStr = removeChars(str, charsToRemove);
  console.log(filteredStr); // виведе "heo wor"