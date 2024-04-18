import { init } from "./main.js";

export function adatokLista(lista){
    //összegyűjti az űrlap adatokat
    let adat = {
        nev:"",
        kor:0,
        nem:true
    }
    
    const submitELEM=$("#submit")
    // beleteszi a listába, ha rákattintunk a hozzáad gombra
    submitELEM.on("click", function(event){
        // submit gombról levesszük az alapértelmezett eseménykezekőt
        event.preventDefault();
        // megfogjuk az űrlap mezőket
        const nevELEM=$("#nev")
        const korELEM=$("#kor")
        const nemELEM=$("input[name='nem']:checked")

        console.log(nemELEM.eq(0))
        adat={
            nev:nevELEM.val(),
            kor:korELEM.val(),
            nem:nemELEM.val()==="false" ? false : true // ternálisoperátor
        }
        const validELEMEK=$(".valid-feedback")
        console.log(validELEMEK.eq(0).css("display"))
        if (validELEMEK.eq(0).css("display")==="block" && validELEMEK.eq(0))
            console.log(adat)
            lista.push(adat)
            console.log(lista)
            init(lista)
    });
}




