function control_images(selectors,controls,fadeSpeed){   // ○　画像制御関数
 var  active_img,controls_img;
 active_img=$(selectors + " img.active");            // 現在表示の画像(★)
 switch (controls){                                  // 指示された画像のオブジェクト設定
  case "next":                                       // next
    controls_img = active_img.next();
    break;
  case "prev":                                       // prev
    controls_img = active_img.prev();
    break;
  case "first":                                      // first
    controls_img = $(selectors + " img:first");
    break;
  case "last":                                       // last
    controls_img = $(selectors + " img:last");
    break;
  default:                                           // その他指定なし
    controls_img = active_img.next();
    break;
 }
 if(typeof controls_img.attr("src")=="undefined"){   // next prevが見つからない場合は？
  if(controls=="next"){                              // 現在表示が最後のケース
    controls_img=$(selectors + " img:first");
  }
  if(controls=="prev"){                              // 現在の表示が最初のケース
    controls_img=$(selectors + " img:last");
  }
 }
 active_img.addClass("last-active");                 // 現在表示の画像(★)を最後の画像にする。
 controls_img.css({opacity: 0.0}).addClass('active') // 指示された表示の画像(■)を現在の一番上の画像とする。
   .animate({opacity: 1.0}, fadeSpeed,               // 指示された画像(■)を徐々に表示させる。
    function() {
     active_img.removeClass('active last-active');   // 完了したら現在表示の画像(★)を通常画像にする。
    });
}
