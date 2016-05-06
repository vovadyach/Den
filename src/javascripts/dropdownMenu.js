/**
 * Created by vinside on 5/6/16.
 */
;(function($) {

    var $menuLink = $(".menu__link");

    $(".hamburger__elem, .overlay").on("click", function () {
        $("body").toggleClass("menu-open");
    });

    $menuLink.on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();

        var $this = $(this);
        var $parentLink = $this.closest(".navigation-menu__item");
        var $menu = $parentLink.find(".dropdown__menu-box");

        $menu.toggle();
        $parentLink.siblings().find(".dropdown__menu-box").hide();
    });

    $(document).click(function(event) {
        if(!$(event.target).closest('.dropdown__menu-box').length &&
            !$(event.target).is('.dropdown__menu-box')) {
            if($('.dropdown__menu-box').is(":visible")) {
                $('.dropdown__menu-box').hide();
            }
        }
    });


})(jQuery);
