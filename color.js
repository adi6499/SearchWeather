let contain =document.querySelector(".contain")
let card = document.querySelector(".card")
let colors = ["tomato","royalblue","lime","crimson"]
let i = 0;
let data = ["https://images.pexels.com/photos/1785493/pexels-photo-1785493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/2440061/pexels-photo-2440061.jpeg?auto=compress&cs=tinysrgb&w=1600","https://images.pexels.com/photos/4507967/pexels-photo-4507967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/3284167/pexels-photo-3284167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
setInterval(()=>{
contain.style.background=`radial-gradient(circle at 90% 1%,black,${colors[i]})`;
card.style.backgroundImage=`url(${data[i]})`
card.style.backgroundSize="100% 100%"
card.style.backgroundRepeat=`no-repeat`;
if(i >= data.length || i >= colors.length){
    i =0;
}
i++
},3000)




