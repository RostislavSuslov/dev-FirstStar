$(document).ready(function() {
    $('[type="tel"]').mask('+38(000)00-00-000');

    $(".home-top__slider").slick({
        dots: true,
        arrows: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: false,
            },
        }, ],
    });
    $(".slider-def-three-el").slick({
        slidesToShow: 3,
        arrows: true,
        responsive: [{
                breakpoint: 1299,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    });
    $(".slider-partner").slick({
        centerMode: true,
        slidesToShow: 3,
        dots: true,
        responsive: [{
            breakpoint: 1124,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                arrows: false,
            },
        }, ],
    });

    $(".select").niceSelect();

    $("#btn-need").click(function() {
       
        $(".btn-tab").removeClass("btn-tab--active");
        $(this).addClass("btn-tab--active");
       
        $("#need-to-help").removeClass('d-none');
        $("#want-to-help").addClass('d-none');
    });

    $("#btn-want").click(function() {
         
        $(".btn-tab").removeClass("btn-tab--active");
        $(this).addClass("btn-tab--active");
       
        $("#need-to-help").addClass('d-none');
        $("#want-to-help").removeClass('d-none');
    });


    const meters = document.querySelectorAll("svg[data-value] .meter");

    meters.forEach((path) => {
        let length = path.getTotalLength();
        let value = parseInt(path.parentNode.getAttribute("data-value"));
        let setValue = length * ((100 - value) / 100);
        path.getBoundingClientRect();
        path.style.strokeDashoffset = Math.max(0, setValue);
    });
	let percent = document.querySelectorAll('svg[data-value]');

    percent.forEach((value) => value.closest('.progress').append(value.getAttribute('data-value') + "%"))


    $(
        ".menu-item-has-children"
    ).append(`<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M11.5897 0.841667C11.5123 0.76356 11.4201 0.701565 11.3185 0.659258C11.217 0.616951 11.1081 0.595169 10.9981 0.595169C10.888 0.595169 10.7791 0.616951 10.6776 0.659258C10.576 0.701565 10.4839 0.76356 10.4064 0.841667L6.58972 4.65833C6.51225 4.73643 6.42009 4.79843 6.31854 4.84074C6.21699 4.88304 6.10807 4.90482 5.99806 4.90482C5.88805 4.90482 5.77912 4.88304 5.67758 4.84074C5.57603 4.79843 5.48386 4.73643 5.40639 4.65833L1.58972 0.841667C1.51225 0.76356 1.42009 0.701565 1.31854 0.659258C1.21699 0.616951 1.10807 0.595169 0.998056 0.595169C0.888046 0.595169 0.779125 0.616951 0.677576 0.659258C0.576026 0.701565 0.483859 0.76356 0.40639 0.841667C0.25118 0.997802 0.164063 1.20901 0.164062 1.42917C0.164063 1.64932 0.25118 1.86053 0.40639 2.01666L4.23139 5.84166C4.70014 6.30982 5.33555 6.57279 5.99806 6.57279C6.66056 6.57279 7.29597 6.30982 7.76472 5.84166L11.5897 2.01666C11.7449 1.86053 11.8321 1.64932 11.8321 1.42917C11.8321 1.20901 11.7449 0.997802 11.5897 0.841667Z" fill="#005BBB"/>
	</svg>
	`);

    $(".menu-item-has-children svg").click(function() {
        $(this).parent().toggleClass("open-menu");
        if ($(document).width() < 991) {
            $(this).siblings(".sub-menu").slideToggle();
        }
    });

    $(".phone-dropdown__top svg, .btn-mob-phone").click(function() {
        $(this).parents(".phone-dropdown").toggleClass("open-dropdown");
    });

    $(".lang-dropdown__top").click(function() {
        $(this).parent().toggleClass("open-dropdown");
    });

    $(document).mouseup(function(e) {
        div = $(".lang-dropdown, .phone-dropdown, .menu-item-has-children");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            console.log(div);
            div.removeClass("open-dropdown open-menu");
        }
    });

    $(".btn-menu").click(function() {
        $("body").toggleClass("open-menu-body");
    });

    

  
});