// オブジェクト指向構文

// class命令
// class Countries {
//     //コンストラクタ
//     constructor(country, city) {
//         this.country = country; // メンバ変数
//         this.city = city;
//     }

//     // メソッド
//     getCity() {
//         return this.city;
//     }
//     getCountry() {
//         return this.country + this.getCity();
//     }
// }
// const countries = new Countries("Japan", "Tokyo");
// console.log(countries.getCountry());

// // get/set命令
// class Countries {
//     constructor(country, city) {
//         this.country = country;
//         this.city = city;
//     }

//     //countryプロパティ
//     get country() {
//         console.log("countryのgetが呼び出された");
//         return "国は" + this._country + "、"; // 値を取得するためにメンバ変数「this._country」を記述
//     }
//     set country(value) {
//         console.log("countryのsetが呼び出された");
//         this._country = value;
//     }

//     //cityプロパティ
//     get city() {
//         console.log("cityのgetが呼び出された");
//         return "都市は" + this._city; // 値を取得するためにメンバ変数「this._city」を記述
//     }
//     set city(value) {
//         console.log("cityのsetが呼び出された");
//         this._city = value; // 値を設定するためにメンバ変数「this._ciyt」
//     }

//     getCity() {
//         return this.city;
//     }
//     getCountry() {
//         return this.country + this.getCity();
//     }
// }
// const countries = new Countries("Japan", "Tokyo");
// console.log(countries.getCountry());

// 静的メソッドを定義
// class Area {
//     static getTriangle(x, y) {
//         return x * y / 2;
//     }
// }
// console.log(Area.getTriangle(10, 5));

class Countries {
    constructor(country, city) {
        this.country = country;
        this.city = city;
    }

    //countryプロパティ
    // get country() {
    //     console.log("countryのgetが呼び出された");
    //     return "国は" + this._country + "、"; // 値を取得するためにメンバ変数「this._country」を記述
    // }
    // set country(value) {
    //     console.log("countryのsetが呼び出された");
    //     this._country = value;
    // }

    //cityプロパティ
    // get city() {
    //     console.log("cityのgetが呼び出された");
    //     return "都市は" + this._city; // 値を取得するためにメンバ変数「this._city」を記述
    // }
    // set city(value) {
    //     console.log("cityのsetが呼び出された");
    //     this._city = value; // 値を設定するためにメンバ変数「this._ciyt」
    // }

    getCity() {
        return this.city;
    }
    getCountry() {
        return this.country + this.getCity();
    }
}
// // 継承
// class Regions extends Countries { // 基底クラスCountriesを継承
//     getCountries() {
//         return "地域はAsia、" + this.getCountry();
//     }
// }
// console.log(new Regions("Japan", "Tokyo").getCountries());

// superキーワード
// class Regions extends Countries {
//     constructor(region, country, city) {
//         super(country, city); //superキーワードで基底クラスのプロパティ
//         this.region = region;
//     }

//     getRegion() {
//         return  "地域は" + this.region + "、";
//     }
//     getCountry() {
//         return this.getRegion() + super.getCountry();
//     }
// }
// console.log(new Regions("Asia", "Japan", "Tokyo").getCountry());

// 演習3-1
this.country + "の都市、" + this.city + "の今日の天気は" + this.weather + "です。";

class Weather extends Countries {
    constructor(weather, country, city) {
        super(country, city);
        this.weather = weather;
    }

    getWeather() {
        return this.country + "の都市、" + this.city + "の今日の天気は" + this.weather + "です。";
    }
}
console.log(new Weather("Sunny", "Japan", "Tokyo").getWeather());


