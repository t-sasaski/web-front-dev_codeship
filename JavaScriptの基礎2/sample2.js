// Dateオブジェクト
// const date1 = new Date();
// console.log(date1); //現在の時刻

// const date2 = new Date("2019/1/1 00:00:00");
// console.log(date2);

// const date3 = new Date(2019, 0, 1, 00, 00, 00, 000);
// console.log(date3); //月は1~12でなく、0~11

// const date4 = new Date(1546268400000);
// console.log(date4);

//ローカル（取得）メソッド
// const dateLocal1 = new Date("2019/1/1 00:00:00");
// console.log(dateLocal1.getFullYear()); //2019 年
// console.log(dateLocal1.getDay()); //2 曜日
// console.log(dateLocal1.getTime()); // 1546268400000 タイムスタンプ値
// console.log(dateLocal1.getTimezoneOffset()); // -540 協定世界時との時差

//ローカル（設定）メソッド
// const dateLocal2 = new Date("2019/1/1 00:00:00");
// const MonthLocal = dateLocal2.setMonth(2);
// console.log(MonthLocal);
// const MinutesLocal = dateLocal2.setMinutes(45);
// console.log(MinutesLocal);

// 解析メソッド
// const dateAnalysis = new Date("2019/1/1 00:00:00");
// console.log(Date.parse(dateAnalysis));
// console.log(Date.UTC(2010));
// console.log(Date.now());

// 文字列変換メソッド
// const dateString = new Date(1546268400000);
// console.log(dateString.toLocaleString());
// console.log(dateString.toDateString());

//演習2-2
// const date1 = new Date("2000/5/23 14:40:00");
// console.log(date1.getTime());
// const date2 = new Date(1143945473540);
// console.log(date2.toLocaleString());
// const nowdate = new Date();
// console.log(nowdate.toUTCString());



