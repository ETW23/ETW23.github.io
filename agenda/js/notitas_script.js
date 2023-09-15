var girame= document.querySelectorAll('.dias_uno')
var textt= document.querySelectorAll('.textcont')

/*
document.getElementsByClassName('dias_uno').onclick= girando()*/
var dias_uno= document.querySelectorAll('div.dias_uno')

for (let i = 0; i < dias_uno.length; i++) {
        dias_uno[i].onclick= function () {
            for (let element of girame) {
                element.classList.toggle('girado')
            }
            for (let elemennt of textt) {
            elemennt.classList.toggle('textout')
        }
    }
}
