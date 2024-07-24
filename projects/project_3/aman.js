// document.getElementById('clock')
// document.querySelector('#clock')
// above are two methods 

const clock = document.getElementById('clock')



setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000) // imp concept 