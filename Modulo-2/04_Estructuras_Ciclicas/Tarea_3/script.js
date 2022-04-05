let contenedor=document.getElementById("reloj")
for(let i=0; i<=15; i++){


    for(let j=0; j<=10; j++ ){

        for(let k=0; k<=10; k++) {

            contenedor.innerHTML+=`<h2>${i} : ${j} : ${k}</h2>`
        }
    }
}