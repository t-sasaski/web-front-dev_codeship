// 配列
// const fruits = ["apple", "grape", "orange", "peach"];
// console.log(fruits);

// console.log(fruits[0]);
// console.log(fruits[2]);

// fruits[4] = "melon";
// console.log(fruits);

// //constで宣言した配列でも中身は変えられる
// const numbers = [1,2,3,4];
// const five = 5;
// numbers[0] = numbers[0] + five;
// console.log(numbers);

// // 多次元配列（列の中に配列を入れることができる）
// const numbers = [10, [20, 21, 22], 30, 40];
// console.log(numbers[1][2]); //22

// 連想配列
// const fruits = { apple: 150, melon: 200, grape: 350}; //連想配列
// console.log(fruits.apple); //150

// console.log(fruits["apple"]); //150

// fruits.orange = 100;  // 新たなプロパティと値を追加
// console.log(fruits);

// const profile = [
//     {name: "Mike"},
//     {age: 23},
//     {from: "Australia"}
// ];
// // 配列に連想配列を入れることもできます。
// console.log(profile[0].name);

//演習1-3
// const kanto_region = ["Ibaraki", "Tochigi", "Gunma", "Saitama", "Chiba", "Tokyo", "Kanagawa"];
// const kanto_region_weather = {Ibaraki: "sunny", Tochigi: "cloudy", Gunma: "sunny", Saitama: "rainy", Chiba: "snowy", Tokyo: "sunny", Kanagawa: "rainy"};

// console.log(kanto_region[1]);
// console.log(kanto_region_weather.Saitama);

//for...in文
// const local_specialty = {
//     Aomori: "apple",
//     Ehime: "mikan",
//     Hokkaido: "melon"
// };
// for (let key in local_specialty) {
//     console.log(key + "の名産は" + local_specialty[key] + "です！");
// }

// for...of文
// let vegetables = ["tomato", "potato", "cucumber"];
// for (let value of vegetables) {
//     console.log(value);
// }

// // break文
// for (let x = 0; x < 500000; x++) {
//     console.log("xは現在" + x + "である");
//     if (x === 30) {
//         console.log("終わりです");
//         break; // 500000回繰り返される処理がbreakにより30回で止まる
//     } else {
//         console.log("続きます");
//     }
// }

// //continue文
// for (let y = 0; y < 20; y++) {
//     if (y % 3 === 0) {
//         console.log("3の倍数であるyは現在" + y + "である");
//         continue;
//     }
// }

//演習1-5



