let botaoVermelho = document.querySelector("#botaoVermelho");
let botaoVerde = document.querySelector("#botaoVerde");
let botaoRoxo = document.querySelector("#botaoRoxo");
let botaoAmarelo = document.querySelector("#botaoAmarelo");

console.log(botaoVermelho.innerHTML)        // Clique Aqui



botaoAmarelo.addEventListener("mouseover", ({target}) => {
    target.innerHTML = "Não";
    setTimeout(()=>{
        target.innerHTML ="Sim"; 
    }, 500)
})


botaoRoxo.addEventListener("click", ()=>{
    alert("Olá")
})


botaoVerde.addEventListener("click", ({target})=>{
    target.style.border = "none"
    setTimeout(()=>{
        target.style.border = ""
    }, 500)
})

botaoVermelho.addEventListener("mouseover", ({target})=>{
    target.style.width = "120px"
    target.style.height = "100px"
    setTimeout(()=>{
        target.style.width = ""
        target.style.height = ""
    }, 500)
})

