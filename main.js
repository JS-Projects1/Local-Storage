let lis = document.querySelectorAll('ul li')
let experiment = document.querySelector('.experiment')

if(localStorage.color){
    console.log('yes')
    experiment.style.backgroundColor = localStorage.color
    lis.forEach((li)=>{
        li.classList.remove('active')
    })

    document.querySelector(`[data-color="${localStorage.color}"]`).classList.add('active')

}

lis.forEach((li)=>{
    li.addEventListener('click',(e)=>{
        lis.forEach((li)=>{
            li.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
        localStorage.setItem('color',e.currentTarget.dataset.color)
        experiment.style.backgroundColor = e.currentTarget.dataset.color;
        item = localStorage.getItem('color')
        console.log(item)
    })
})