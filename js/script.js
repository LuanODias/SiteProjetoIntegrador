document.addEventListener('DOMContentLoaded', () =>{

    let tl1 = new TimelineMax();

    tl1
    .fromTo('.logo', 0.7, {y: -50, opacity:0},
    {y: 0 , opacity: 1, ease: Expo.easeInOut})

    tl1
    .fromTo('.nav-list', 0.7, {y: -50, opacity:0},
    {y: 0 , opacity: 1, ease: Expo.easeInOut},'-=0.5')

    tl1
    .fromTo('.nav-register', 0.7, {y: -50, opacity:0},
    {y: 0 , opacity: 1, ease: Expo.easeInOut},'-=0.5')


    .fromTo('.container-item-1', 0.9, {y: -50, opacity:0},
    {y: 0 , opacity: 1, ease: Expo.easeInOut},'-=0.5')

    .fromTo('.container-item-2', 0.9, {y: -50, opacity:0},
    {y: 80 , opacity: 1, ease: Expo.easeInOut},'-=0.5')
})
