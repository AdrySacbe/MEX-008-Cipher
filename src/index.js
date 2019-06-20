const center1=document.getElementById('center1');
const center2=document.getElementById('center2');
const center3=document.getElementById('center3');
const enviar=document.getElementById('enviar');
const encriptar=document.getElementById('encriptar');
const output=document.getElementById('output');
const desencriptar=document.getElementById('desencriptar');
const butoff=document.getElementById("butoff");
const centeroff=document.getElementById("centeroff");
let offset;
// Se almacena el numero que ingrese el usuario cuando apriete el boton butoff

enviar.addEventListener('click',()=>{
  const nombre=document.getElementById('nombre').value;
  center1.innerHTML=`<br>Bienvenid@, ${nombre}`;
  center2.classList.add('ocultar');
  centeroff.classList.remove('ocultar');

});

//A offset se le asigna el valor entero de lo que se ingreso en input off 
//luego hace que desaparezca el centeroff y que aparezca center3
butoff.addEventListener('click',()=>{
  offset=parseInt(document.getElementById('inputoff').value);
  centeroff.classList.add("ocultar");
  center3.classList.remove("ocultar");
});

encriptar.addEventListener('click',()=>{
  output.value="";
  let cadena=document.getElementById('input').value;
  /*for(let i=0;i<cadena.length;i++){
    let asci=cadena.charCodeAt(i);
    if(asci>=65 && asci<=90){
      output.value=output.value+String.fromCharCode((asci-65+offset)%26+65);
    }else{
      output.value=output.value+String.fromCharCode(asci);
    }
  }*/
  let salida=window.cipher.encode(offset,cadena);//llamo a la funcion encode y le doy como  parametro cadena y  offset y lo que retorna lo guardo en salida
  output.value=salida;//Y al valor del output le asigno lo que tiene salida
});
desencriptar.addEventListener('click',()=>{
  output.value="";
  let cadena=document.getElementById('input').value;
  /*for(let i=0;i<cadena.length;i++){
    let asci=cadena.charCodeAt(i);
    if(asci>=65&&asci<=90){
      output.value=output.value+String.fromCharCode((asci+65-offset)%26+65);
    }else{
      output.value=output.value+String.fromCharCode(asci);
    }
  }
  */
 let salida=window.cipher.decode(cadena,offset);
 output.value=salida;
});
