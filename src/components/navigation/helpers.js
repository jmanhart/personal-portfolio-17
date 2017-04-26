import dynamics from 'dynamics.js'



 export let navOnMount = function(el){
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
