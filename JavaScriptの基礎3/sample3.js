// console.log(document.getElementById("text"));
// // id属性「text」の要素を取得
// console.log(document.getElementsByTagName("h1"));
// // 要素名「h1」の要素を取得
// console.log(document.getElementsByClassName("text"));
// // class属性「text」の要素を取得

/* イベント・ドリブンモデル */

// HTMLの要素に直接記述する方法
// const handleClick = () => {
//     console.log("クリックされました。");
// }

// addEventListner()を使う方法
// const button = document.getElementById('button');

// button.addEventListener('click', function() {
//     console.log("クリックされました。");
// })

// // 取得したHTML要素に対して、直接イベントを追加する方法
// const button = document.getElementById('button');
// button.onclick = function() {
//     console.log("クリック");
// }


/* 属性値やテキストの取得/設定 */
// // 属性値を取得/設定
// let a = document.getElementById("url"); // idで要素を取得
// const url = a.href; // a要素のhref属性を取得
// a.href = "#top"; // a要素のhref属性に「#top」を設定

// 別の方法
// const a = document.getElementById("url"); // idで要素を取得
// const url = a.getAttribute("href"); // a要素のhref属性を取得
// a.setAttribute("href", "#top"); // a要素のhref属性に「#top」を設定

// class属性を取得したい場合
// const p = document.getElementById("text");
// const getClass = p.getAttribute("className"); // classではなくclassNameと記述

// テキストを取得/設定
// const text = document.getElementById("change-text");

// const changeText = function() {
//     text.textContent = "変わりました。"; // p要素のテキストを設定
// }
// text.addEventListener('mouseover', changeText);

// 演習3-2
// 1
const number = document.getElementById("number");

const changeNumber = function() {
    number.textContent ++;
}
number.addEventListener('click', changeNumber);

// 2


// 3
// 色を取得して比較する

