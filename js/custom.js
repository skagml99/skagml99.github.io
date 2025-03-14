$(function () {

    const txt = gsap.utils.toArray('.main_visual  .bl span');
    const tl = gsap.timeline();

    let num = Math.random()

    tl
        .from('.main_visual h2', { x: 640, opacity: 0, delay: 1 })
        .from('.main_visual strong', { x: -640, opacity: 0, delay: 1 })
        .from('.main_visual p', { x: 640, opacity: 0, delay: 1 })
    // .from('.main_visual .me', { x: 640, opacity: 0, rotation: 360 })



    // txt.forEach(it, idx, arry) {
    //     gsap.from(it, {
    //         x: 100
    //     })
    // }

    txt.forEach((it, idx, arry) => {
        console.log(txt)
        let num = Math.random()
        tl.from(it, {
            y: 200 * num,
            opacity: 0,
        })
    });


    txt.forEach((it, idx, arry) => {
        console.log(txt)
        let num = Math.random()
        gsap.from(it, {
            rotate: -20 * num * 2,
            yoyo: true,
            stagger: {
                amount: 0.5,
                from: "random"
            },
            repeat: -1

        })
    })



    const BT = [' ', '01', '02', '03', '04', '05', ' ', ' ']

    $('.wrapper').fullpage({
        anchors: ['intro', 'portfolio01', 'portfolio02', 'portfolio03', 'portfolio04', 'portfolio05', 'tranining', 'profile'],
        fixedElements: '.header, .footer',
        responsiveWidth: 1200,
        css3: false,
        onLeave: function (o, d, dr) {
            let idx = d.index;
            if (idx == 0) {
                tl.restart();
            }


            $('.header .side_nav li').removeClass('on')
            $('.header .side_nav li').eq(idx).addClass('on')


        },

        afterLoad: function (o, d, dr) {
            let idx = d.index;

            console.log(BT[idx])

            $('.section').removeClass('on')
            $('.section').eq(idx).addClass('on')


            $('.header .number').text(BT[idx])
        }
    });

})
$(function () {

    $('.header .btn').on('click', function () {
        $(this).toggleClass('on');
        $('.header .cover_lnk').toggleClass('on');
    });

    $('.header .cover_lnk a').on('click', function (e) {
        let idx = $(this).parent().index();
        $('.header .btn').removeClass('on');
        $('.header .cover_lnk').removeClass('on');
        e.preventDefault();
        fullpage_api.moveTo(idx + 1);
    });
    $('.header .side_nav li a').on('click', function (e) {
        let idx = $(this).parent().index();
        e.preventDefault();
        fullpage_api.moveTo(idx + 1);
    });

    $('.header .cover_lnk').on('wheel', function (e) {
        e.preventDefault();
        return false;
    })
})