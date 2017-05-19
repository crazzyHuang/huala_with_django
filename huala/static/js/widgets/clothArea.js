/**
 * Created by Administrator on 2017/5/16 0016.
 */
!(function ($) {

    var ClothArea = function () {
        ClothArea.prototype.initEvent = function () {
            var $list = $(".cl-category li");
            var $item = $(".cl-category-item-cont");
            $(".cl-category li").hover(function () {
                var index = $($list).index(this);
                $item.eq(index).show().siblings().hide();
                var $active = $(this).addClass("cl-category-item-on");
                $active.siblings().removeClass("cl-category-item-on");
            });


        };
        ClothArea.prototype.initStyle = function () {
            new Swiper('.cl-cont-swiper', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                slidesPerView: 'auto',
                autoplay: 2500,
                autoplayDisableOnInteraction: false,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            });

            new Swiper('.cl-bottom-swiper', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                slidesPerView: 'auto',
                autoplay: 3000,
                autoplayDisableOnInteraction: false,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            });


        };
    };

    window.ClothArea = ClothArea;
    var clothArea = new ClothArea();
    clothArea.initStyle();
    clothArea.initEvent();

})(jQuery);