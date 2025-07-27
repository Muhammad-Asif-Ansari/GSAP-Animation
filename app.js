gsap.to(".box1", {
    x: 900,
    duration: 2,
    delay: 0.5,
    borderRadius: "50%",
    repeat: -1,
    yoyo: true,
    backgroundColor: "#ff4b4b",
    rotation: 180,
    scale: 1.2,
    ease: "power2.inOut"
});


gsap.to(".box2", {
    x: 500,
    y: 600,
    duration: 2.2,
    delay: 1,
    borderRadius: 30,
    repeat: -1,
    yoyo: true,
    backgroundColor: "#ff00ff",
    scale: 0.8,
    ease: "sine.inOut"
});


gsap.from(".box3", {
    x: 400,
    y: 1000,
    duration: 2,
    delay: 1.5,
    borderRadius: "20%",
    repeat: -1,
    yoyo: true,
    backgroundColor: "#00ff7f",
    scale: 1.1,
    ease: "bounce.out"
});

gsap.from(".box4", {
    x: -500,
    y: 500,
    duration: 2.5,
    delay: 2,
    borderRadius: "40%",
    repeat: -1,
    yoyo: true,
    backgroundColor: "#ffa500",
    rotation: 90,
    ease: "back.inOut(2)"
});


gsap.from(".box5", {
    x: 800,
    y: -700,
    duration: 2.2,
    delay: 2.5,
    borderRadius: "30%",
    repeat: -1,
    yoyo: true,
    backgroundColor: "#00d4ff",
    scale: 1.3,
    ease: "elastic.inOut(1, 0.5)"
});


gsap.from(".box6", {
    x: -400,
    y: -800,
    duration: 3,
    delay: 3,
    borderRadius: "50%",
    repeat: -1,
    yoyo: true,
    backgroundColor: "#9b59b6",
    scale: 0.9,
    ease: "power4.inOut"
});
