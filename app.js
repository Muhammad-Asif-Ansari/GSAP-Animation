gsap.to(".box1",{
    x:900,
    duration:2,
    delay:1,
    borderRadius:"50%",
    repeat:-1,
    yoyo:true,
    backgroundColor:"red",
    rotation: 90,
    transformOrigin: "center 40%",
    padding:20,
})

gsap.to(".box2",{
    x:500,
    y:600,
    duration:2,
    delay:3,
    // repeat:-1,
    xPercent: 50,
    borderRadius:20,
    // yoyo:true,
})

gsap.from(".box3",{
    x:500,
    y:1100,
    duration:2,
    delay:5,
    borderRadius:"20%",
    repeat:-1,
    yoyo:true,
    backgroundColor:"green",
    
})