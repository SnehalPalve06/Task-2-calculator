let string = "";
let buttons = document.querySelectorAll('.button, .clear');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if (e.target.classList.contains('clear')) {
            string = "";
            document.querySelector('input').value = string;
        }

    
        
        else{
            console.log(e.target)
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})