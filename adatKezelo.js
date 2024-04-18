export function tablazatRendez(lista,irany){
    lista.sort(function (a,b) {
        // sorgalmi: a.nev első betűjének a jarakterkódja alapján
        /*if (a.nev>b.nev){
            return 1;
        }else{
            return -1;
        }*/


        return a.nev.toUpperCase()>b.nevtoUpperCase() ? 1*irany : -1*irany; // pozitív, vagy nevgatív érték kell
    });
    return lista;
}

// szorgalmi: lehessen rendezni kor szerint is! *** tetszőleges mező szerint

function atalakit(lista){
    // szorgalmi: Á-A, É-E replacall()
}


export function szuresNevSzerint(lista, szurtSzoveg){
    const SZURTLISTA=lista.filter(function(elem){
        return elem.nev.includes(szurtSzoveg);
    });
    console.log(SZURTLISTA);
    return SZURTLISTA;
}

export function sorTorles(lista, index){
    lista.splice(index, 1);
    return lista;
}

