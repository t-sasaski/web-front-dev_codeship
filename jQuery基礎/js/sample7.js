$(function() {
    var $container = $(".sample-kw");
    var $contents = $container.find("div");
    // １
    var length = $container.find("div").length;
    // ２
    $container.css({height: (length * 10) + "px"});
    // ３
    for (var i = 0; i < length; i++) {
        // ４
        console.log(i)
        $contents.eq(i).css({
            // 5
            top: (i * 10) + "px",
            left: (i * 10) + "px"
        });
    }
});