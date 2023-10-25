import {gsap} from "gsap";

function scrollToPosition(yPosition) {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: yPosition,
        },
        ease: 'power2.inOut',
    });
}

export {scrollToPosition};
