let numb = "";
let val = "";
let numbers = document.querySelectorAll('.button');
Array.from(numbers).forEach((num)=>{
    num.addEventListener('click',(e)=>{

        console.log(e.target.value);
        if (e.target.name == 'op'){
            val = val + e.target.value;
            numb ="";
            console.log(val)
        }
        else if(e.target.name == 'num'){
            numb = numb + e.target.value;
            val = val + e.target.value;
        }
        else if (e.target.name == 'eql'){
            numb =eval(val);
            val = numb;
           
        }
        else if (e.target.name == 'clr'){
            numb = "";
            val = "";
        }
       


       document.querySelector('input').value = numb;
    })
})

//let can = document.querySelector('.num').value
//console.log(can)