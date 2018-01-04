var palavra = 'falvia';
var a = 0;
var b = 0;
var i = 0;
var x = 0;
var tamanho = 0;
var saida = '';
var vogais = 'a,e,i,o,u';
var indice = 0;
var situacoes = new Array();
var consoantes = 'b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,x,w,y,z';

//Esta regra é para elegibilidade de consoantes que possam ficar juntas no texto
var regras = 'bl,br,ch,cl,cr,dl,dr,fl,fr,gl,gr,kr,kl,lh,ng,pl,pr,ry,tr,vl,vr,nt,rv;rg,rr,ss';

tamanho = palavra.length;
//alert('Tamanho: ' + tamanho);

palavra = palavra.toUpperCase();
consoantes = consoantes.toUpperCase();
regras = regras.toUpperCase();

for (i = 0; i < tamanho; i++) {
  //alert("volta: "+ i + ' LETRA: ' + palavra.substr(i, 1) + ' CONT CONSOANTE: ' + a);
  if (consoantes.indexOf(palavra.substr(i, 1)) >= 0) {
    a++;
    if (a >= 3) {
      b = i - (a - 1);
      //alert("b= " + b);
      saida += palavra.substr(b, 1) + ' ' + palavra.substr(b + 1, 1) + ' ' + palavra.substr(i, 1);
      a = 0;
    } //alert("calculo do restante: " + (tamanho - i));

    if ((tamanho - i) == 1) {
      //alert('Final da palavra atingido');
      if (a > 1) {
        //saida += palavra.substr(i - 1, 1) + palavra.substr(i, 1);
        saida += palavra.substr(i - 1);
        a = 0;
      } else {
        saida += palavra.substr(i, 1);
      }
      i = tamanho + 1;
      //alert("saindo do for");
    }
  } 
  else {
    //alert("restam: " + (tamanho - i));
    if ((tamanho - i) != 1) {
      if (a == 2) {
        //alert("incluindo juncao");
        if (regras.indexOf(palavra.substr(i - a, a)) >= 0) {
          //alert("DENTRO DA REGRA");
          saida += palavra.substr(i - a, a) + palavra.substr(i, 1);
        } else {
          saida += palavra.substr(i - a, 1) + ' ' + palavra.substr(i - 1, 1) + palavra.substr(i, 1);
        } //alert(saida);

        a = 0;
      } else if (a == 1) {
        //alert('incluindo juncao - ' + palavra.substr(i - a, a) + palavra.substr(i, 1));
        saida += palavra.substr(i - a, a) + palavra.substr(i, 1);
        //alert(saida);
        a = 0;
      } else {
        //alert(palavra.substr(i,1));
        saida += palavra.substr(i, 1);
        //alert(saida);
      }
    } else {
      //alert('Fim de palavra atingido');
      if (a == 2) {
        //alert('incluindo juncao - ' + palavra.substr(i - a, a) + palavra.substr(i, 1));
        saida += palavra.substr(i - a, a) + palavra.substr(i, 1);
        //alert(saida);
        a = 0;
      } else if (a == 1) {
        //alert('incluindo juncao - ' + palavra.substr(i - a, a) + palavra.substr(i, 1));
        saida += palavra.substr(i - a, a) + palavra.substr(i, 1);
        //alert(saida);
        a = 0;
      } else {
        saida += palavra.substr(i, 1);
      }
    }
  }
}
alert('final de execucao: ' + saida);