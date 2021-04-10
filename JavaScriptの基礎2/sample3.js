// Objectオブジェクト(連想配列)
// const profile = {name: "Mike", age: "28", countries: "U.S.A" };
// const addProfile = {food: "bread"};
// console.log(profile.toString());
// console.log(profile.valueOf());
// console.log(Object.assign(profile, addProfile));

// プロパティメソッド
// const propertyObject = {name: "Mike", age: "28", countries: "U.S.A"};
// console.log(Object.keys(propertyObject));
// console.log(propertyObject.hasOwnProperty("age"));
// console.log(propertyObject.hasOwnProperty("food"));
// console.log(Object.getOwnPropertyNames(propertyObject));

// 変更可否メソッド
// const sealObject = [
//     {name: "apple", price: 200},
//     {name: "grape", price: 150}
// ];
// console.log(sealObject);
// sealObject.push({name: "orange", price: 100}); // orangeの連想配列を追加
// console.log(sealObject[2]); 
// Object.seal(sealObject); // オブジェクトを封印
// console.log(Object.isSealed(sealObject)); // 封印されているのでtrue
// sealObject.reverse(); // 逆順に並び替え
// console.log(sealObject); // 並び替えは許される
// sealObject.push({name: "melon", price: 300}); // 封印されているので追加はされない
// console.log(sealObject); // エラー

// オブジェクトの凍結
// const freezeObject = [
//     {name: "apple", price: 200},
//     {name: "grape", price: 150}
// ];
// console.log(freezeObject);
// freezeObject.push({name: "orange", price: 100});
// console.log(freezeObject[2]);
// Object.freeze(freezeObject); // オブジェクトの凍結
// console.log(Object.isFrozen(freezeObject)); // true
// // freezeObject.reverse(); //エラー、並び替えできない
// freezeObject.push({name: "melon", price: 300}); // エラー

