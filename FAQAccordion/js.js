const qas = document.querySelectorAll('.qa');

qas.forEach(qa =>{
    qa.addEventListener('click', function(){
        qa.classList.toggle('active');
        const icons = qa.querySelector('.icons');
        if(qa.classList.contains('active')){
            icons.src = 'images/icon-minus.svg';
        }
        else{
            icons.src = 'images/icon-plus.svg';
        }
            
        
    });
});






































/*
const qas = document.querySelectorAll('.qa');


qas.forEach(qa => {
    qa.addEventListener('click', () =>{
        qa.classList.toggle('active');
        const icons = qa.querySelector('.icons');

        if(qa.classList.contains('active')){
            icons.src = 'images/icon-minus.svg';
        }
        else{
            icons.src = 'images/icon-plus.svg';
        }
       
    });
});
*/