(function ($) {

    $.fn.mediaWrapper = function (options) {

        var settings = $.extend({
            intrinsic: true,
            baseWidth: 16,
            baseHeight: 9
        }, options);

        return this.each(function () {
            var hRatio = '';

            if (settings.intrinsic == true && typeof $(this).attr("width") !== 'undefined' && typeof $(this).attr("height") !== 'undefined') {
                hRatio = ($(this).attr("height") / $(this).attr("width")) * 100;
            } else {
                hRatio = (settings.baseHeight / settings.baseWidth) * 100;
            }

            $(this).wrap('<div class="mediaWrapper" style="position: relative; width: 100%; height: 0; padding: ' + hRatio + '% 0 0 0; " />').css({
                "position": "absolute",
                "width": "100%",
                "height": "100%",
                "top": "0",
                "left": "0"
            });
        });
    };
})(jQuery);
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */