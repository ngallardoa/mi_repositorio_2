let temperatura1 = prompt("Ingrese el número. Ingrese el caracter 'A' para finalizar");
do{

    if (temperatura1 % 2 == 0)
    {
        alert ("el número es par");
    }

    else{
        alert ("el número es impar");
    }
    temperatura1 = prompt("Ingrese otro número Ingrese el caracter 'A' para finalizar");

}while (temperatura1 != "A" );