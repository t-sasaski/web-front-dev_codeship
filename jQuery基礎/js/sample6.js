$(function() {
    var duration = 300,
      defaultColor = "#3498DB",
      changeColor = "#ae5e9b",
      defaultBorderWidth = "0px",
      changeBorderWidth = "12px";
    /* First */
    // mouseイベント、mouseoutイベントによって背景色を変更しましょう。
    $(".s10w button:nth-child(-n+3)").on({
        mouseover: function() {
            $(this)
                .stop(true)
                .animate(
                    {
                        backgroundColor: changeColor
                    },
                    duration
                );
        },
        mouseout: function() {
            $(this)
                .stop(true)
                .animate(
                    {
                        backgroundColor: defaultColor
                    },
                    duration
                );
        }
    });

    

    /* Second */
    // button:nth-child(n+4):nth-child(-n+6)とすると、４番目から6番目までの要素を取得できます。
    $(".s10w button:nth-child(n+4):nth-child(-n+6)").on({
      mouseover: function() {
        //.stop(true)とすると、イベントが完了する前に他のイベントが起こったとき、処理中のイベントは中断されます。
        //見本のmouseover時の色が変わりきる前にマウスを話してみると確認できます。
        $(this)
          .stop(true)
          .animate(
            {
              borderWidth: changeBorderWidth,
              color: changeColor,
              backgroundColor: "white"
            },
            duration
          );
      },
      mouseout: function() {
        $(this)
          .stop(true)
          .animate(
            {
              borderWidth: defaultBorderWidth,
              color: "white",
              backgroundColor: defaultColor
            },
            duration
          );
      }
    });
    /* Third */
    // 7番目から9番目までのボタンを取得します。
    $(".s10w button:nth-child(n+7)").on("mouseover", function() {
        // find()は、その要素の子要素のセレクタを指定できます。
        //">span"なので、一段下のspanのみです
        $(this)
            .find(">span")
            .stop(true)
            .animate(
                {
                    width: "100%"
                },
                duration
            );
            // ちなみにイベントは.on().on()と各個に繋げて登録できたりします。
    })
    .on("mouseout", function(){
        $(this)
            .find(">span")
            .stop(true)
            .animate(
                {
                    width: "0%"
                },
                duration
            );
    });

});