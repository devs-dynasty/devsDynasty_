let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');

btn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    btn.classList.toggle('active');
    if(sidebar.classList.contains('active')){
        btn.classList.remove('bx-chevron-right')
        btn.classList.add('bx-chevron-left')
    }else{
        btn.classList.remove('bx-chevron-left')
        btn.classList.add('bx-chevron-right')
    }
}) 


 