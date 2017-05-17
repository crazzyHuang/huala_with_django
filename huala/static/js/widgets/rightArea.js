/**
 * Created by Administrator on 2017/5/16 0016.
 */
!(function ($) {
    "use strict";
     var RightArea = function () {

         RightArea.prototype.initStyle = function () {
            
         };


         RightArea.prototype.initEvent = function () {
             var  $tab = $(".hotsell-cont-tab .hotsell-cont-head span");
             $tab.hover(function () {
                 // 给自己本身添加head-active 其他去掉 还原
                 $tab.removeClass("head-active");
                 $(this).addClass("head-active");
                 var index = $tab.index(this);
                 $(".hotsell-cont-item").hide();
                 $(".hotsell-cont-item").eq(index).show();
             });

             //列表选择时 放大
             // hotsell-list-on
             var $hs_li =  $(".hotsell-cont li")
             $hs_li.hover(function () {
                $hs_li.removeClass("hotsell-list-on");
                $(this).addClass("hotsell-list-on");
             });
         };
         
     };
     

     window.RightArea = RightArea;

})(jQuery);