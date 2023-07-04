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
            if (el.src.match("img/githubBlack.webp") && chave == 2) {
                el.src = "img/githubColor.webp"
                console.log("laranja")
            }
        }

    entrar()
    })

    el.addEventListener("mouseout",() => {
        const sair = () => {
            if (el.src.match("img/githubColor.webp") && chave ==2) {
                el.src = "img/githubBlack.webp";
                console.log("amarelo")
            }
        }

        sair()
    })

    el.addEventListener("mouseover",() => {
        const entrar = () => {
            if (el.src.match("img/twitterBlack.webp") && chave == 3) {
                el.src = "img/twitterColor.webp"
                console.log("pink")
            }
        }

    entrar()
    })

    el.addEventListener("mouseout",() => {
        const sair = () => {
            if (el.src.match("img/twitterColor.webp") && chave ==3) {
                el.src = "img/twitterBlack.webp";
                console.log("purple")
            }
        }

        sair()
    })

    el.addEventListener("mouseover",() => {
        const entrar = () => {
            if (el.src.match("img/facebookBlack.webp") && chave == 4) {
                el.src = "img/facebookColor.webp"
                console.log("pink")
            }
        }

    entrar()
    })

    el.addEventListener("mouseout",() => {
        const sair = () => {
            if (el.src.match("img/facebookColor.webp") && chave ==4) {
                el.src = "img/facebookBlack.webp";
                console.log("purple")
            }
        }

        sair()
    })
})

// B O T A O  H E A D E R  M E N U
const btn = document.getElementById('btnMenu')

function animar() {
    btn.classList.toggle('ativar')
}

btn.addEventListener('click', animar) 

// N A V E G A Ç Ã O
const nav = document.querySelector("#navegação_header")

let show = false
const navegação = () => { 
    show = !show

    if (show) {
        nav.style.marginTop = '75px'
    } else {
        nav.style.marginTop = '-1000px'
    }
}

btn.addEventListener('click', navegação)

const mudouTamanho = () => {
    if (window.innerWidth <= 900) {
        nav.style.marginTop = '-1000px'
    } else {
        nav.style.marginTop = '0vh'
    }
}
window.addEventListener("resize", mudouTamanho)

// verificar se o btn esta ativado no resize