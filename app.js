
window.addEventListener('scroll', () => {
    var nav = document.getElementById('sticky-nav');
    nav.classList.add('sticky-nav')
    console.log(container.scrollHeight)
    console.log(container.clientHeight)

})

window.addEventListener('screenY', () => {
    var nav = document.getElementById('sticky-nav');
    nav.classList.remove('sticky-nav')

})


let container = document.querySelector('.container');

console.log(container.scrollHeight)