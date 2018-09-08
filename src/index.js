  
 import {$, cr, crLi} from './help';

  let chk1=document.getElementById('chkBox1')
  let chk2=$('chkBox2')
  let chk3=$('chkBox3')
  let chk4=$('chkBox4')
  let chk5=$('chkBox5') 
  let ul=$('ul1')
 
console.dir(chk1)
  //CheckBox Event
 

chk1.addEventListener('click', function(event){  
  if(chk1.checked){
    let li=crLi('li',$('lbl1').innerHTML) 
    ul.appendChild(li);
  }


console.dir($('lbl1'))
})
chk2.addEventListener('click', function(event){
  if(chk2.checked){
    let li=crLi('li',$('lbl2').innerHTML) 
    ul.appendChild(li); 
  } 
})

chk3.addEventListener('click', function(event){
  if(chk3.checked){
  let li=crLi('li',$('lbl3').innerHTML) 
  ul.appendChild(li);
  } 
})

chk4.addEventListener('click', function(event){
  if(chk4.checked){
  let li=crLi('li',$('lbl4').innerHTML) 
  ul.appendChild(li);
  } 
})

chk5.addEventListener('click', function(event){
  if(chk5.checked){
    let li=crLi('li',$('lbl5').innerHTML) 
    ul.appendChild(li);
  } 
  })


  
    


 
 
 

 




