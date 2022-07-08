jQuery(document).ready(function($) {
    $(".fancybox").fancybox();
    $('.nice_Select').niceSelect();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });

    $(function() {
        $(".muve-top").click(function() {
            $("html,body").animate({
                scrollTop: $(".thetop").offset().top
            }, "1000");
            return false
        })
    })


    let helper = document.querySelectorAll('.who-supported-person__name');
    let helperArray = Array.from(helper)

    helperArray.forEach(item => {
        const itemString = item.textContent;
        const itemAnonymous = itemString.includes('Анонімна допомога') || itemString.includes('Анонимная помощь');

        let firstLetter = itemString[0];

        if (itemAnonymous) {
            const anonymous = item.closest('.who-supported-person');
            anonymous.classList.add('anonymous');
            anonymous.querySelector('.who-supported-person__photo').innerHTML = "?";

        } else if (!itemAnonymous) {
            const noAnonymous = item.closest('.who-supported-person');
            if (noAnonymous.querySelector('img[src=""]')) {
                noAnonymous.classList.add('no-photo');
                noAnonymous.querySelector('.who-supported-person__photo').innerHTML = firstLetter;
            }
        }
    })
})