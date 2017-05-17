/**
 * Created by Administrator on 2017/5/15 0015.
 */

!(function ($) {
    "use strict";
    var Category = function () {

        Category.prototype.initStyle = function () {

        };

        Category.prototype.initEvent = function () {
            $(".goods-category").hover(function (event) {
                var $li = $(this).find(".goods-category-detail li")
                    .removeClass("goods-category-detail-on");
                $li.find('a').removeClass("goods-category-detail-a-on");
            });

            var $goodsCategory = $(".goods-category-detail li");
            $goodsCategory.hover(function (event) {
                var index = $goodsCategory.index(this);
                $(".sub-category-cont").hide();
                $(".sub-category-cont:eq(" + index + ")").show();
                var onObj = $(this).addClass("goods-category-detail-on");
                var offObj = onObj.siblings().removeClass("goods-category-detail-on");
                onObj.find('a').addClass("goods-category-detail-a-on");
                offObj.find('a').removeClass("goods-category-detail-a-on");
            });

            var $menulist = $(".menu-cont");
            $menulist.mouseenter(function () {
                $(".book-category-menu-item").hide();
                $(this).find(".book-category-menu-item").show();
            });
            $menulist.mouseleave(function () {
                $(".book-category-menu-item").hide();
            });

        }

    };

    window.Category = Category;

})(jQuery);