window.addEventListener('scroll', function(){
            
    let headerTag = document.getElementsByTagName('header')[0];

    if(document.documentElement.scrollTop == 0){
        headerTag.classList.remove('add-blur');
    }else{
        headerTag.classList.add('add-blur');
    }
});