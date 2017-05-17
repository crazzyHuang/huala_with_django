/**
 * Created by Administrator on 2017/5/16 0016.
 */

!(function ($) {
    "use strict";
    var CenterArea = function () {

        CenterArea.prototype.initStyle = function () {
            var swiper = new Swiper('.center-area-swiper', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                slidesPerView: 'auto',
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            });
            var swiper2 = new Swiper('.right-news-swiper', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                slidesPerView: 'auto',
//                autoplay: 3000,
                autoplayDisableOnInteraction: false,
                // Navigation arrows
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            });

            var swiper2 = new Swiper('.center-second-swiper', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                slidesPerView: 'auto',
//                autoplay: 3000,
                autoplayDisableOnInteraction: false,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            });

        };

        CenterArea.prototype.initEvent = function () {

        };

        function createSwiper(opt) {
            var setting = {
                pagination: opt.pagination || ".swiper-container",
                isLoop: opt.isLoop || true,
                hasArrow: opt.hasArrow || false,
                autoplay: opt.autoplay || 0
            };
            return new Swiper(setting.pagination, {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: setting.isLoop,
                slidesPerView: 'auto',
                autoplayDisableOnInteraction: false,
                nextButton: setting.hasArrow ? '.swiper-button-next' : null,
                prevButton: setting.hasArrow ? '.swiper-button-prev' : null
            });
        }

    };

    window.CenterArea = CenterArea;

})(jQuery);