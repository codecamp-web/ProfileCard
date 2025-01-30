


setInterval(function(){
   const date = new Date()
   let hour = date.getUTCHours()
   let minute = date.getUTCMinutes()
   let second = date.getUTCSeconds()
   let clocktime =  hour + ":" + minute + ":" + second
   document.getElementById("clock").innerHTML = clocktime
   
}, 500)

