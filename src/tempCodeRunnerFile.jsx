setTimeout(function(){
        setWork(false);
        const ele=document.getElementById(i);
        ele.style.backgroundColor="red";
        }, 1000 * i);