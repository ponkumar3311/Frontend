var a;
    var b;
    
    function showsidebar(){
        a=document.getElementById('hhdiv');
        if(a.classList.contains('hdiv1')){
            a.classList.remove('hdiv1');
            a.classList.add('hdiv2');        
}
    else{
            a.classList.remove('hdiv2');
            a.classList.add('hdiv1'); 
    }


    }