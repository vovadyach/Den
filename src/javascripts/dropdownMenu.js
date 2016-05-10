/**
 * Created by vinside on 5/6/16.
 */
;(function($) {

    var $menuLink = $(".menu__link");
    var $toggleMenu = $(".toggle__menu");


    //Shows and hides the main menu with the left transition
    $(".hamburger__elem, .overlay").on("click", function () {
        $("body").toggleClass("menu-open");
    });

    //Animates the menu when clicking on the link
    $menuLink.on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();

        var $this = $(this);
        var $parentLink = $this.closest(".navigation-menu__item");
        var $menu = $parentLink.find(".dropdown__menu-box");

        $menu.toggle();
        $parentLink.siblings().find(".dropdown__menu-box").hide();
    });


    $toggleMenu.on("click", function(event){
        event.preventDefault();

        var $this = $(this);
        var $parentLink = $this.closest(".menu__item");
        var $caretItem = $parentLink.find(".caret__link");
        var $navMenu = $parentLink.find(".navigation-menu");

        $navMenu.toggleClass("show");
        $caretItem.toggleClass("fa-caret-up");
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
