const MAX_POWER = 30
const MIN_POWER = 10

let vidaLuffy = 100
let vidaNaruto = 100

let round = 0

function golpe(){
    let mathRandom = Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER;
    return Math.ceil(mathRandom);
}
while(vidaLuffy > 0 && vidaNaruto > 0){
    round +=1
    let golpeLuffy = golpe()
    let golpeNaruto = golpe()
        console.log("-------------- Round " + round +"-----------------")
       
    if(golpeLuffy > golpeNaruto){
        vidaNaruto -= golpeLuffy;
        if(vidaNaruto<0){
            vidaNaruto=0
        }
        console.log("Luffy produce un daño de " + golpeLuffy)
        console.log("La vida de Naruto es " + vidaNaruto)
        console.log("La vida de Luffy es " + vidaLuffy)
    }else{
        vidaLuffy -= golpeNaruto;
        if(vidaLuffy<0){
            vidaLuffy=0
        }
        console.log("Naruto produce un daño de " + golpeNaruto)
        console.log("La vida de Naruto es " + vidaNaruto)
        console.log("La vida de Luffy es " + vidaLuffy)
    }
}
console.log("---------------------------------------")
if(vidaLuffy >0){
    console.log("El ganador es Luffy")
}else{
    console.log("El ganador es Naruto")
}
