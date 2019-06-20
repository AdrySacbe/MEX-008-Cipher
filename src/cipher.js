window.cipher = {
  encode: (string, off)=>{//Declaro la funcion encode que recibe como parametros string (el texto) y off (el offset)
    let res="";//Declaro el let res(resultado) que contendra el texto codificado(encriptado)
    for(let i=0;i<string.length;i++){//Creo un ciclo i es igual a 0 hasta el tamaño de la cadena (string.legth)
      let asci=string.charCodeAt(i);//creo una variable asci que va a contener un numero el que tiene string
      if(asci>=65 && asci<=90){//si este asci es una letra mayuscula a mi variable res le sumo esa letra mayuscula
        res=res+String.fromCharCode((asci-65+off)%26+65);
      
      }else{
        res=res+String.fromCharCode(asci);
      }
    }
    return res;//retorno res

  }
  ,decode: (string, off)=>{//Declaro el metodo decode que recibe como parametro string(el texto) y off ( el offset)
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
