let seconds = document.querySelector(".second")
let hours = document.querySelector(".hour")
let minutes = document.querySelector(".minute")

let clock = document.querySelector(".clock")
let main = document.querySelector("main")
let btn = document.querySelector("#btn")
let flag = 0;

setInterval(function(){

    let date = new Date()
    let second = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();

    console.log(hour);
    
    seconds.style.transform = `rotate(${second * 6}deg) translateY(-50%)`
   hours.style.transform = `rotate(${(hour * 30)+(minute /60)*30}deg) translateY(-50%)`
   minutes.style.transform = `rotate(${(minute * 6)+(second / 60)*30}deg) translateY(-50%)`

},1000)


btn.addEventListener("click",()=>{
    console.log("click");
    
    if(flag === 0){
        main.style.backgroundColor = "grey"
        flag = 1;
    }else{
        main.style.backgroundColor = "white"
        flag = 0;
    }
})