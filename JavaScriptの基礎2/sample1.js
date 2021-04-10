
// // new演算子
// const fruits = new Array("apple", "grape", "melon"); // 配列
// const time = new Date(2019, 0, 1, 0, 0, 0, 0); //時刻の文字列
// const region = new Object({ chiba: "chiba", kanagawa: "yokohama" }); // 連想配列

// const threeString = new Array("3"); // ["3"] という配列を生成
// const fourNumber = new Array(4); // 要素数4の空の配列を生成
// const empty = []; // 空の配列

// // 基本メソッド
// const clothes = ["coat", "T-shirts", "T-shirts", "T-shirts", "pants"];
// console.log(clothes.length); //5
// console.log(clothes.indexOf("T-shirts")); // 1
// console.log(clothes.lastIndexOf("T-shirts", 2)); // 2
// console.log(clothes.lastIndexOf("T-shirts", 4)); // 3

// 加工メソッド
// const foods = ["fish", "vegetable", "meat"];
// const fruits = ["apple", "lemon"];
// const concatFoods = foods.concat(fruits);
// console.log(concatFoods);
// const joinFoods = foods.join(", ");
// console.log(joinFoods);
// const sliceFoods = foods.slice(0, 2);
// console.log(sliceFoods);
// foods.splice(1, 0, "soy");
// console.log(foods);
// const fillFoods = foods.fill("drink");
// console.log(fillFoods);
// const drinks = ["soda", "tea", "water"];

// // 追加/削除メソッド
// const drinks = ["soda", "tea", "water"];
// const popDrinks = drinks.pop();
// console.log(popDrinks);
// console.log(drinks);
// const pushDrinks = drinks.push("appleJuice", "grapeJuice");
// console.log(drinks);
// const shiftDrinks = drinks.shift();
// console.log(shiftDrinks);
// console.log(drinks);
// const unshiftDrinks = drinks.unshift("cola", "milkTea");
// console.log(drinks);

// 並べ替えメソッド
const tens = [3, 10, 1, 9, 8, 6, 7, 5, 4, 2];
const reverseTens = tens.reverse();
console.log(tens);
console.log(tens.sort());
/* ここから関数を使った記述 */
const sortTens = tens.sort((a,b) => {
    if (a < b) {
        return -1; //戻り値が0未満の場合、aをbより小さい順にソートされる。
    }
    if (a > b) {
        return 1; //戻り値が0より大きい場合、aをbより大きい順にソートされる。
    }
    return 0; //戻り値が0の場合、aとbは変更されずに他の要素がソートされる。
});
console.log(tens);

// 演習2-1
let evenNumber = []; //偶数の配列
let oddNumber = []; //奇数の配列
for (let i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        evenNumber.push(i);
    } else {
        oddNumber.push(i);
    }
}
console.log(evenNumber);
console.log(oddNumber);
