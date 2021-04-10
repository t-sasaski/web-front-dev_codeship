$(function() {
    var width = 100; // Actionボタンの初期幅を設定します。

    var growWidth = () => {
        width = width * 1.5; // 1
    };

    $(".action").on("click", function() {
        growWidth();
        $(this).animate({ width: width + "px" });
    });

    $(".reset").on("click", function() {
        width = 100;
        $(".action").click();
    });
});



