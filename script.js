const bar = document.getElementById('bar'); // No '#' in getElementById
const nav = document.getElementById('navbar1'); // No '#' in getElementById
const close=document.getElementById('close');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active'); // Toggle the 'active' class
    });
}


if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}



