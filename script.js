// B A N N E R
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 4000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

// S O C I A L
let inst = [...document.querySelectorAll(".imgFooter")]
inst.map((el, chave) => {
    el.addEventListener("mouseover",() => {
        const entrar = () => {
            if (el.src.match("img/instagramBlack.png")) {
            el.src = "img/instagramColor.png";
            } else {
            el.src = "img/instagramBlack.png";
            }
        }


    entrar()
    })
    el.addEventListener("mouseout",() => {
        const sair = () => {
            if (el.src.match("img/instagramColor.png")) {
            el.src = "img/instagramBlack.png";
            } else {
            el.src = "img/instagramBlack.png";
            }
        }


        sair()
    })
    
})


// function entrar() {
//     var imagem = document.getElementById("logoLaranja");
//     if (imagem.src.match("imagens/crunchyroll-logo.png")) {
//       imagem.src = "imagens/crunchyroll-logo-branco.png";
//     } else {
//       imagem.src = "imagens/crunchyroll-logo.png";
//     }
//   }
  
//   function sair() {
//       var imagem = document.getElementById("logoLaranja");
//       if (imagem.src.match("imagens/crunchyroll-logo.png")) {
//         imagem.src = "imagens/crunchyroll-logo-branco.png";
//       } else {
//         imagem.src = "imagens/crunchyroll-logo.png";
//       }
//     }