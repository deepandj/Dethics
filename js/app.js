let navslide = () =>
{
    let burger=document.querySelector('.burger');
    let nav=document.querySelector('nav')
    burger.addEventListener('click',()=>
    {
        nav.classList.toggle('show-slide');
        burger.classList.toggle('rotate')
    });

}

navslide();