import dynamics from 'dynamics.js'



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
