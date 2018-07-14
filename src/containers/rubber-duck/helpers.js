import dynamics from 'dynamics.js'

export let up = function(el){
  dynamics.animate(el,{
      translateY: -90,
      translateX: 60,
      scale: 1.25
    },{
      type: dynamics.easeInOut,
      duration: 900,
      frequency: 100,
      friction: 200,
    })

}

export let down = function(el){
  dynamics.animate(el,{
      translateY: 0,
      translateX: 0,
      opacity: 1,
    },{
      type: dynamics.easeInOut,
      duration: 900,
      frequency: 100,
      friction: 200,
    })

}
