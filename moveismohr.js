const menudiv = document.getElementById('mobile')
const animarbotaomenu = document.getElementById('botaomenumobile')

menudiv.addEventListener('click',animarMenu)

function animarMenu(){
    menudiv.classList.toggle('abrir')
    animarbotaomenu.classList.toggle('ativo')

}