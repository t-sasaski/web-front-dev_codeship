// // プリミティブ型とオブジェクト型（複合型）
// let pri = "abcde";
// pri.toUpperCase();
// console.log(pri);
// console.log(pri.toUpperCase());
// let obj = ["aaa"];
// obj.push("bbb");
// console.log(obj);

// // 関数
// function getSector(r, a) {
//     return r * r* Math.PI * a / 360;
// }
// const radius1 = 2;
// const angle1 = 90;
// const radius2 = 4;
// const angle2 = 150;
// const s1 = getSector(radius1, angle1);
// const s2 = getSector(radius2, angle2);
// console.log(s1);
// console.log(s2);

//関数式
// const getTriangle = function(base, height) {
//     return base * height / 2;
// }
// console.log(getTriangle(2,4));

// スコープ
// const scope = "グローバル";
// function getValue() {
//     // console.log(scope); // ???
//     const scope = "ローカル";
//     return scope;
// };
// console.log(scope); // グローバル
// console.log(getValue()); // ローカル

// // 引数のデフォルト値
// function stayArgument(x = 4, y = 3) {
//     return x * y;
// }
// console.log(stayArgument());

// 可変長引数の関数（引数の個数があらかじめ決まっていない関数）
// function getArray(...value) {
//     return value;
// };
// console.log(getArray(2,3,4));
// const a = "あ";
// const i = "い";
// const u = "う";
// const e = "え";
// const o = "お";
// console.log(getArray(a,i,u,e,o));

// 名前付き引数
// function getTriangle({x = 3, y = 4}) {
//     return (x * y) / 2;
// };
// console.log(getTriangle({x:8, y:10}));
// const triangleValue = {x:8, y:10};
// console.log(getTriangle(triangleValue));

// コールバック関数
// function repeat(times, func) { //引数に関数をとる関数
//     for(let i = 0; i < times; i++) { //timesだけfuncを繰り返し実行する
//         func();
//     }
// }
// repeat(3, function() { // コールバック関数
//     console.log("Hello CodeShip!!");
// });

// setTimeout関数
// setTimeout(function(){
//     console.log("3秒経過しました。");
//     clearTimeout(); // タイマーの停止
// }, 3000); //3秒後

// setInterval
// let count = 0;
// setInterval(function(){
//     console.log("1病経過しました。");
//     count++;
//     if (count >= 10) {
//         console.log("合計で10秒経過しました。");
//         clearInterval(); // タイマーの停止
//     }
// }, 1000); //1秒間隔




