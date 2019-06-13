const center1=document.getElementById('center1');
const center2=document.getElementById('center2');
const center3=document.getElementById('center3');
const enviar=document.getElementById('enviar');
const encriptar=document.getElementById('encriptar');
const output=document.getElementById('output');
const desencriptar=document.getElementById('desencriptar');
enviar.addEventListener('click',()=>{
  const nombre=document.getElementById('nombre').value;
  center1.innerHTML=`<br>Bienvenido, ${nombre}`;
  center2.classList.add('ocultar');
  center3.classList.remove('ocultar');

});
encriptar.addEventListener('click',()=>{
  output.value="";
  let cadena=document.getElementById('input').value;
  for(let i=0;i<cadena.length;i++){
    let asci=cadena.charCodeAt(i);
    if(asci>=65&&asci<=90){
      output.value=output.value+String.fromCharCode((asci-65+33)%26+65);
    }else{
      output.value=output.value+String.fromCharCode(asci);
    }
  }
});
desencriptar.addEventListener('click',()=>{
  output.value="";
  let cadena=document.getElementById('input').value;
  for(let i=0;i<cadena.length;i++){
    let asci=cadena.charCodeAt(i);
    if(asci>=65&&asci<=90){
      output.value=output.value+String.fromCharCode((asci+65-33)%26+65);
    }else{
      output.value=output.value+String.fromCharCode(asci);
    }
  }
});
