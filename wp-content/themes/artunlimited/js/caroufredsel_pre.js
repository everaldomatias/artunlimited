// JavaScript Document

if (jQuery('#foo2').length) {
    jQuery(function () {
        jQuery('#foo2').carouFredSel({
            prev: '#prev2',
            next: '#next2',
            auto: {
                delay: 1000,
            },
            circular: true,
            infinite: true,
            responsive: true,
            direction: "left",
            width: null, // automatically calculated
            //height: null, // automatically calculated
            align: "center",
            items: {
                visible: 1,
                start: "random"
            }
        });
    });
};