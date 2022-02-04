/*onsole.log("Holaaa changos marangos") // js darle función  a lo que esta en las plantillas 
//constante valor que nunca va a cambiar durante la ejecución del programa
const nombre="Georgina velasco";
//nombre="juan perez"  esto no es posible por lo que es una constante

//variables donde en la ejecución del programa si se puede cambiar su valo, las variables también consumen más espacio de memoria que
// las constantes
let edad =20;

 console.log("mi nombre es:"+nombre +" tengo "+edad+" años");

 //edad=22;

 console.log("mi nombre es:"+nombre +" tengo "+edad+" años");

//tipos de datos 
//let decision = true; // true or false

let condicion =edad >= 18;
let condicion2 = nombre =="Georgina velasco";
console.log("condición =>"+ condicion);
console.log("condicion2 =>" + condicion2);

// condicional if
if(condicion&&condicion2){
    console.log("entra en verdadero");
}else if(condicion2){
    console.log("entra en falso");
}else{
    console.log("ninguna de las condiciones es verdadera");
}*/

//SEGUNDA PARTE
/*let variable =false;
variable=true;

const numero=20;
console.log(numero =="20"); //=== comparar el valor y el tipo de dato, = para asignar un valor, == para comparar el valor
*/
let edad = 20;
//condición ? ejecuta un pedazo de código(función etc.) : seria el else
edad > 18 ? console.log("es mayor de edad") : console.log("es menor de edad");

for(let indice = 0; indice < 10; indice++){

    //codigo
    if(indice==2){
        console.log("2"); 
    }
    console.log("otro código");
 //console.log(`El valor del indice es= ${indice}`);
}





