
function showLogin(){
 document.getElementById('landing').classList.add('hidden');
 document.getElementById('login').classList.remove('hidden');
}
function checkPass(){
 const pass=document.getElementById('pass').value;
 if(pass==='090426'){
   document.getElementById('login').classList.add('hidden');
   document.getElementById('vault').classList.remove('hidden');
 }else{
   alert('Wrong passcode');
 }
}
