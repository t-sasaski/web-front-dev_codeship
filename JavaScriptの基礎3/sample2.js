// オブジェクトリテラル

// メソッドの定義
// const member = {
//     name: "Mike",
//     birth: new Date(1998, 10, 15),
//     toBirthDay() {
//         return this.name + "の誕生日は" + this.birth.toLocaleDateString(); //メソッド内ではメンバ変数を用いる
//     }
// }
// console.log(member.toBirthDay()); // Mikeの誕生日は1998/11/15

// // 同名プロパティを割り当てる
// const name = "Mike";
// const birth = new Date(1998, 10, 15).toLocaleDateString();
// const member = {name, birth}; // 変数をそのままプロパティにすることで値を省略できる
// console.log(member);

// // プロパティを動的に生成(Computed property names)
// let i = 0;
// const memos = {
//     ["memo" + ++i]: "ABC",
//     ["memo" + ++i]: "DEF",
//     ["memo" + ++i]: "GIH"
// }
// console.log(memos);

/* 列挙可能なオブジェクト */
// イテレーター
const dateArray = ["Mon", "Tue", "Wed"]; // Arrayオブジェクトなので列挙可能である
for (let i of dateArray) {
    console.log(i);
}





