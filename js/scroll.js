$(document).ready(function(){

    gsap.to(".scroll1Text", {
        scrollTrigger:{
            scroller: ".scrollSect",
            trigger:".scroll1",
            // markers: true,
            start: "120px 100",
            end: "150px 50",
            scrub: 1
        },
        y:-20,
        opacity:0,
        duration: 1
    });

    // SCROLLER2
    // let tl2 = gsap.timeline({
    //     scrollTrigger:{
    //         scroller: ".scrollSect",
    //         // markers: true,
    //         start: "200 100",
    //         end: "300 50",
    //         scrub: 3
    //     }
    // });

    gsap.to(".scroll2Text",{
        scrollTrigger:{
            scroller: ".scrollSect",
            // markers: true,
            start: "200 100",
            end: "380 50",
            scrub: 2
        },
        x:1500,
        duration:3
    });

    // SCROLLER 3
    let tl3 = gsap.timeline({
        scrollTrigger:{
            scroller: ".scrollSect",
            // markers: true,
            start: "400px 100",
            end: "600px 50",
            toggleActions: "play reverse play reverse"
        }
    });
    tl3.to(".scroll3-rect", {
        transform: "scaleX(1)",
        duration: .5,
    })
    .from(".scroll3Text", {
        transform: "translateY(170%)",
        duration: 1,
    });

    // SCROLLER 4
    let tl4 = gsap.timeline({
        scrollTrigger:{
            scroller: ".scrollSect",
            // markers: true,
            start: "600 100",
            end: "1000px 50",
            scrub: 1
        }
    });
    tl4.to(".sectionsCont", {
        background: "linear-gradient(106deg, rgba(70,130,180,1) 23%, rgba(135,206,250,1) 54%, rgba(135,141,250,1) 83%)",

    })

    gsap.from(".neatCircle", {
        scrollTrigger:{
            scroller: ".scrollSect",
            // markers: true,
            start: "800 100",
            end: "1100px 50",
            toggleActions: "play reverse play reverse"
        },
        r: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)"
    })
    gsap.from(".neatText", {
        scrollTrigger:{
            scroller: ".scrollSect",
            // markers: true,
            start: "800 100",
            end: "1100px 50",
            toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
        delay: 1
    });


    // SCROLLER 5

    gsap.timeline({
        scrollTrigger:{
            scroller: ".scrollSect",
            // markers: true,
            start: "1250px 100",
            end: "1950px 50",
            scrub: true,
            pin: ".pepeConst",
        }
     })
    .from(".pepeConst", {
        scrollTrigger:{
            scroller: ".scrollSect",
            // markers: true,
            start: "1250px 100",
            end: "2250px 50",
            scrub: true,
            pin: ".pepeConst",
        },
        opacity: 0,
        y: -50
    });


    let tl5 = gsap.timeline({
        scrollTrigger:{
            scroller: ".scrollSect",
            // markers: true,
            start: "1300 100",
            end: "1500px 50",
            scrub: 1
        }
    });
    tl5.to(".sectionsCont", {
        background: "linear-gradient(106deg, rgba(70,130,180,0) 23%, rgba(135,206,250,0) 54%, rgba(135,141,250,0) 83%)",

    })
    



    // gsap.from(".sadge", {
    //     scrollTrigger:{
    //         scroller: ".sectionsCont",
    //         // trigger:".scrollSect",
    //         markers: true,
    //         start: "1250px 25%",
    //         end: "2550px top",
    //         pin: ".sadge",
    //         scrub: true,
    //         // toggleActions: "play reverse play reverse"
    //     },
    //     y: 300,
    //     duration:1
    //  });
});