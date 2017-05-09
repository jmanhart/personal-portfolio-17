import dynamics from 'dynamics.js'

export let heroOnload = function(el){
    dynamics.animate(el,{
        translateY: -275,
        translateX: 0,
        opacity: 1
      },{
        type: dynamics.spring,
        duration: 1000,
        frequency: 85,
        friction: 171,
      })
}
