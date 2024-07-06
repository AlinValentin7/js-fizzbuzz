/*Scrivi un programma che stampi in console i numeri da 1 a 100
    per i multipli di 3 stampi “Fizz” al posto del numero
    per i multipli di 5 stampi “Buzz”.
    Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.*/

    // facciamo un ciclo for per contare i numeri da 1 a 100
 for (let i = 1; i <= 100; i++) 
{
    // Scriviamo 'FizzBuzz' per i numeri multipli di 5 e di 3 
        //-usiamo il modulo (%) e il comparatore (=== 0) con il contatore
        //per dire che il numero e divisibile
        //-usiamo l operatore AND per dire che sia quando ce un multiplo di 3 e sia che quando ce ne uno di 5
        //-stampiamo in console la scritta "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) 
    {
        console.log("FizzBuzz");  //String|Null
       
    }//Scriviamo 'Fizz' per i numeri multipli di 3  
    else if (i % 3 === 0) 
    {
        console.log("Fizz");// String|Null
    
    }//Scriviamo 'Buzz' per i multipli di 5   
    else if (i % 5 === 0) 
    {
        console.log("Buzz"); //String | Null 
    } else 
    {
        console.log(i); //Stampiamo in console il risultato 
    }
}


 