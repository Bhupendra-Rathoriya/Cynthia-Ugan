var timeout;



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

 

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity:0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
    .to(".boundinelem",{
        y: '0',
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
    })

    .from("#herofooter",{
        y: '-10',
        opacity:0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
    })



}

var timeout;

function circleChaptaKaro(){
    // define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    
    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);
        // var xdiff = dets.clientX - xprev;
        // var ydiff = dets.clientX - yprev;

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientX - yprev);

        
        xprev = dets.clientX;
        yprev = dets.clientY;

        cirleMouseFollwer(xscale, yscale);


        timeout = setTimeout(function () {
            document.querySelector(
              "#minicircle"
            ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
          }, 100);
        });
      }

function cirleMouseFollwer(xscale, yscale) {
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.tranfrom = `tranfrom(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    }, 100); 
}

circleChaptaKaro();
cirleMouseFollwer();
firstPageAnim();
// gsap();

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var deffrot = 0;

    elem.addEventListener("mousemove", function(dets){
        gsap.to(elem.querySelector("img"), {
            opacity: 0, 
            ease: Power3,
            duration: 0.5,     
        })
    });


    elem.addEventListener("mousemove", function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        deffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20, deffrot * 0.5),
        });
    });
});








