window.cipher = {
  encode: (string,off)=>{//Declaro la funcion encode que recibe como parametros string (el texto) y off (el offset)
    let res="";//Declaro el let res(resultado) que contendra el texto codificado(encriptado)
    for(let i=0;i<string.length;i++){
      let asci=string.charCodeAt(i);
      if(asci>=65 && asci<=90){
        res=res+String.fromCharCode((asci-65+off)%26+65);
      }else{
        res=res+String.fromCharCode(asci);
      }
    }
    return res;//retorno res

  }
  ,decode: (string,off)=>{//Declaro el metodo decode que recibe como parametro string(el texto) y off ( el offset)
    let res="";//Declaro el let res que contendra el texto decodificado(desencriptado)
    for(let i=0;i<string.length;i++){
      let asci=string.charCodeAt(i);
      if(asci>=65&&asci<=90){
        res=res+String.fromCharCode((asci+65-off)%26+65);//Voy concatenando los caracteres para crear la cadena res (resultado)
      }else{
        res=res+String.fromCharCode(asci);
      }
    }
  return res;//retorno res
  }


  // ... 
};
