function light(sw){
    var pic;
    if(sw == 0){pic ='lampumati.png'}
    else{pic ='lampuhidup.png'}
    document.getElementById('myimage').src = pic;
}

function play(p){

if(p == 1){document.getElementById('game').style.display = "block";

}
if(p == 1){document.getElementById('display').style.display = "none";}

}













//hasil

function getinput(c){event.preventDefault();
    var player = document.getElementById('pilihan').value;

//pilihan bot
var komp = Math.random();
if(komp < 0.34){komp = 'gunting';}
else if (komp>0.34 && komp<0.62){komp = 'batu';}
else {komp = 'kertas';}





   
var hasil=''
//rules

if(player == komp){hasil ='seri';}
else if(player == 'gunting')
    {if(komp == 'batu'){hasil ='Kalah';}
     else{hasil ='Menang'}
}

else if(player == 'batu')
    {if(komp == 'kertas'){hasil ='Kalah';}
     else{hasil ='Menang'}
}

else if(player == 'kertas')
    {if(komp == 'gunting'){hasil ='Kalah';}
     else{hasil ='Menang'}
}

else{hasil ='Anda Memasukkan Pilihan Yang Salah'

}
document.getElementById('pilih').style.display ='none';
document.getElementById('retry').style.display ="block";
document.getElementById('batal').style.display ="none";
document.getElementById('result').innerText= 'Anda Memilih : ' + player +'\n Bot Memilih : ' +komp + ' \nAnda  '+ hasil;
 
}

