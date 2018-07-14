import dynamics from 'dynamics.js'

export let fadeUp = function(el){
  dynamics.animate(el,{
      translateY: -5,
      translateX: 0,
      opacity: 1,
    },{
      type: dynamics.easeInOut,
      duration: 900,
      frequency: 100,
      friction: 200,
    })

}
