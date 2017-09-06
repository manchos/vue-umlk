var Vue = require('vue')
// var hello = require('vue!./components/hello.vue')
var Countdown = require('vue!./components/Countdown.vue')

Vue.filter('twodigits', function(value){
        if(value.toString().length <= 1)
        {
          return "0"+value.toString();
        }
        return value.toString();
      })

Vue.filter('colon', function(value){
        return value.toString().trim() + ' :';
      })

new Vue({
    el: 'body',
    components: {
        Countdown: Countdown,
        
    },

})

// hello: hello

// new Vue({
//     el: '#app1',
//     components: {
//         hello: hello
//     }
// })

// import Vue from 'vue'
// // var Vue = require('vue')

// // import App from './App.vue'
// // var App = require('vue!./App.vue')

// import Countdown from './components/Countdown.vue';


// new Vue({
//   el: 'body',
//   components: { 
//   	hello: hello,
//   	Countdown: Countdown 
//   }
// });




