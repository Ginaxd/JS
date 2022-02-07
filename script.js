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

/*let edad = 20;
//condición ? ejecuta un pedazo de código(función etc.) : seria el else
edad > 18 ? console.log("es mayor de edad") : console.log("es menor de edad");

for(let indice = 0; indice < 10; indice++){

    //codigo
    if(indice==2){
        console.log("2"); 
    }
    console.log("otro código");
 //console.log(`El valor del indice es= ${indice}`);
}*/

//const arreglo = ["Jesus", "Juan", "María","Ramón"];
//console.log("arreglo =>", arreglo);

//console.log(arreglo[2]); //para imprimir el dato en una posición especifica

//for(let indice = 0; indice < arreglo.length; indice++){
    //console.log(`El nombre de la persona es ${arreglo[indice]}`);

//}

/*arreglo.forEach((nombre) =>
console.log(`El nombre de la persona es ${nombre}`));*/

/*let contador = 0;
while( contador < 1000){
    console.log(contador);
    contador = contador +1;
}*/

//CREANDO UNA FUNCIÓN (PEDASO DE CÓDIGO ENCAPSULACIÓN)
function Saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}, ¿como estas` );
}
//MANDAMOS A LLAMAR LA FUNCIÓN PARA QUE SE IMPRIMA EN CONSOLA
Saludar("Mariana","Hernandez");

//CREANDO 2 OBJETOS DE TIPO PERSONA
const persona1 ={
    nombre: "Georgina",
    apellido: "Velasco",
    edad: 15,
};

const persona2 ={
    nombre: "Felicitas",
    apellido: "Velasco",
    edad: 50,
};

const arregloPersonas =[persona1,persona2];

//NUEVA FORMA DE HACER UNA FUNCIÓN LA CUAL ES DE LA NUEVA ESCUELA 

const admitirPaso = (persona) =>{
    if(persona.edad >= 18){
        console.log(`Puedes pasar ${persona.nombre} ${persona.apellido}`);
    
    }else{
        console.log(`No puedes pasar ${persona.nombre} ${persona.apellido}`);
    }

};
 arregloPersonas.forEach((persona)=>{
     admitirPaso(persona);

 });
//admitirPaso(persona1);
//admitirPaso(persona2);

function alerta(){
    alert("Bienvenida a la pagina padawan");
}

const esMayor = (edad) =>{
    if(edad >= 18){
        return true;
    }else{
        return false;
    }
}

console.log(esMayor(persona1.edad));

//EJERCICIOS

const ejercicio1 = [ 3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24, 15];

const numeroPrimo = (numero) =>{
    let cont = 0;
    for(let indice = 1; indice <= numero; indice++){
        if(numero%indice == 0){ // % resto de la división entre numero e indice
         cont = cont+1;
        }
    }
   if(cont <= 2){
    console.log(numero);
   }
   
    
};
   

ejercicio1.forEach((numero) =>{
    numeroPrimo(numero);
});



// EJERCICO 2
/*
const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];
  
  const admitirPaso2 = (persona) =>{
      if(persona.edad >= 18 && persona.esFamiliar==true){
          console.log(` ${persona.nombre}`);
      
      }
  };
  
  ejercicio2.forEach((persona)=>{
       admitirPaso2(persona);
  
   });*/

//SERIE FIBONACCI
function serie(){
let limit = 50;
 a = 0;
 b = 1;
 let suma;
 console.log(1);
 
do {
    suma = a + b;
    console.log(suma);
       a=b;
       b=suma;

    
} while (limit);
}

console.log(serie());



  




