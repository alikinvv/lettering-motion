MorphSVGPlugin.convertToPath('#circle, #circle2, #circle3');

var time = 0.6;
var tl = new TimelineMax({
    onComplete: function () {
        tl.reverse()
    },
    onReverseComplete: function () {
        tl.play()
    }
})

tl.to('#circle', time, {
        morphSVG: '#D',
        ease: Circ.easeInOut
    })
    .to('#circle2', time, {
        morphSVG: '#D2',
        ease: Circ.easeInOut
    }, '-=0.55')
    .to('#circle3', time, {
        morphSVG: '#D3',
        ease: Circ.easeInOut
    }, '-=0.50')
    .to('#circle', time, {
        morphSVG: '#E',
        ease: Circ.easeInOut
    }, )
    .to('#circle2', time, {
        morphSVG: '#E2',
        ease: Circ.easeInOut
    }, '-=0.55')
    .to('#circle3', time, {
        morphSVG: '#E3',
        ease: Circ.easeInOut
    }, '-=0.50')
    .to('#circle', time, {
        morphSVG: '#V',
        ease: Circ.easeInOut
    }, )
    .to('#circle2', time, {
        morphSVG: '#V2',
        ease: Circ.easeInOut
    }, '-=0.55')
    .to('#circle3', time, {
        morphSVG: '#V3',
        ease: Circ.easeInOut
    }, '-=0.50')