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
            if (el.src.match("img/instagramBlack.webp") && chave == 0) {
                el.src = "img/instagramColor.webp"
                console.log("verde")
            }
        }


    entrar()
    })
    el.addEventListener("mouseout",() => {
        const sair = () => {
            if (el.src.match("img/instagramColor.webp") && chave ==0) {
                el.src = "img/instagramBlack.webp";
                console.log("vermelho")
            }
        }


        sair()
    })


    el.addEventListener("mouseover",() => {
        const entrar = () => {
            if (el.src.match("img/linkedinBlack.webp") && chave == 1) {
                el.src = "img/linkedinColor.webp"
                console.log("roxo")
            }
        }


    entrar()
    })
    el.addEventListener("mouseout",() => {
        const sair = () => {
            if (el.src.match("img/linkedinColor.webp") && chave ==1) {
                el.src = "img/linkedinBlack.webp";
                console.log("rosa")
            }
        }


        sair()
    })
    

    el.addEventListener("mouseover",() => {
        const entrar = () => {
            if (el.src.match("img/githubWhite.webp") && chave == 2) {
                el.src = "img/githubBlack.webp"
                console.log("laranja")
            }
        }


    entrar()
    })
    el.addEventListener("mouseout",() => {
        const sair = () => {
            if (el.src.match("img/githubBlack.webp") && chave ==2) {
                el.src = "img/githubWhite.webp";
                console.log("amarelo")
            }
        }


        sair()
    })
})
