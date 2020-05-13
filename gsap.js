TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.from(".video-send", 1.5, {
    duration: 2.5,
    ease: "slow( 0.7, 0.7, false)",
    x: -800,
});

var scene = new ScrollMagic.Scene({
  triggerElement: "#animation-start",
  duration: "100%",
  triggerHook: 1
})
 /* .addIndicators({
    name: "Box Timeline",
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white"
  }) */
  .setTween(tl)
  .addTo(controller);