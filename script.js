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
            if (el.src.match("img/instagramBlack.png") && chave == 0) {
                el.src = "img/instagramColor.png"
                console.log("verde")
            }
        }


    entrar()
    })
    el.addEventListener("mouseout",() => {
        const sair = () => {
            if (el.src.match("img/instagramColor.png") && chave ==0) {
                el.src = "img/instagramBlack.png";
                console.log("vermelho")
            }
        }


        sair()
    })


    el.addEventListener("mouseover",() => {
        const entrar = () => {
            if (el.src.match("img/linkedinBlack.png") && chave == 1) {
                el.src = "img/linkedinColor.png"
                console.log("roxo")
            }
        }


    entrar()
    })
    el.addEventListener("mouseout",() => {
        const sair = () => {
            if (el.src.match("img/linkedinColor.png") && chave ==1) {
                el.src = "img/linkedinBlack.png";
                console.log("rosa")
            }
        }


        sair()
    })
    

    el.addEventListener("mouseover",() => {
        const entrar = () => {
            if (el.src.match("img/githubWhite.png") && chave == 2) {
                el.src = "img/githubBlack.png"
                console.log("laranja")
            }
        }


    entrar()
    })
    el.addEventListener("mouseout",() => {
        const sair = () => {
            if (el.src.match("img/githubBlack.png") && chave ==2) {
                el.src = "img/githubWhite.png";
                console.log("amarelo")
            }
        }


        sair()
    })
})
