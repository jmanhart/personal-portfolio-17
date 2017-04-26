import dynamics from 'dynamics.js'

export let open = function(el){
    dynamics.animate(el, {
      opacity: 1,
      scale: 1
    }, {
      type: dynamics.spring,
      frequency: 200,
      friction: 270,
      duration: 800
    })

}

export let studyOnMount = function(el){
    dynamics.animate(el,{
        translateY: -90,
        translateX: 0,
        opacity: 1
      },{
        type: dynamics.spring,
        duration: 883,
        frequency: 83,
        friction: 171,
      })
}

export let messengerOnMount = function(el){
    dynamics.animate(el,{
        translateY: -90,
        translateX: 0,
        opacity: 1
      },{
        type: dynamics.spring,
        duration: 883,
        frequency: 83,
        friction: 171,
      })
}

export let close = function(el){
    dynamics.animate(el, {
      opacity: 0,
      scale: 0
    }, {
      type: dynamics.spring,
      frequency: 200,
      friction: 270,
      duration: 800
    })

}

export let btnOnAnimation = function(el){
    dynamics.animate(el, {
      backgroundColor: '#0f668e',
      scale: 1.05

    }, {
      type: dynamics.spring,
      frequency: 200,
      friction: 270,
      duration: 800
    })

}

export let btnOffAnimation = function(el){
    dynamics.animate(el, {
      backgroundColor: '#1583B5',
      scale: 1

    }, {
      type: dynamics.spring,
      frequency: 200,
      friction: 270,
      duration: 800
    })

}

export let btnIconOnAnimation = function(el){
    dynamics.animate(el, {
      rotateZ: 90,

    }, {
      type: dynamics.spring,
      frequency: 200,
      friction: 270,
      duration: 800
    })

}

export let btnIconOffAnimation = function(el){
    dynamics.animate(el, {
      rotateZ: 60,

    }, {
      type: dynamics.spring,
      frequency: 200,
      friction: 270,
      duration: 800
    })

}
