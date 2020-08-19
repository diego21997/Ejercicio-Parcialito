/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar() {
    let vSeguir;
    let vNombreArt;
    let VCateg;
    let vPrecio;
    let vBandera = 0;
    let vMaxPrecio;
    let vArtPrecioMax;
    let vBanderaLateos = 0;
    let vMaxLacteos;
    let vNombreMaxLacteos;
    let vContadorBebidas = 0;

    do{
      

        vNombreArt= prompt("Ingresar nombre");

        do{
        VCateg= prompt("Ingresar categoria");
        }while(VCateg != "lácteos" && VCateg != "limpieza" && VCateg != "bebidas" && VCateg != "almacen");

        do{
        vPrecio= parseFloat(prompt("Ingresar precio"));
        }while(vPrecio<0 || vPrecio>1000)

        if(vBandera == 0){
            vMaxPrecio= vPrecio;
            vProdPrecioMax = vNombreArt;
            vBandera = 1;
        }else{
            if(vPrecio>vMaxPrecio){
                vMaxPrecio =  vPrecio;
                vArtPrecioMax = vNombreArt;
            }
        }

        if(vBanderaLateos == 0 && VCateg == "lácteos"){
            vMaxLacteos = vPrecio;
            vNombreMaxLacteos = vNombreArt;
            vBanderaLateos = 1;
        }else if(vBanderaLateos == 1 && VCateg == "lácteos"){
            if(vPrecio>vMaxLacteos){
                vMaxLacteos = vPrecio;
                vNombreMaxLacteos = vNombreArt;
            }
        }

        if(VCateg == "bebidas"){

            vContadorBebidas = vContadorBebidas + 1;

        }

        vSeguir= prompt("¿Desea continuar ingresando?(si/no)");
    }while(vSeguir=="si")


alert("El articulo con mayor precio es: " + vProdPrecioMax );
alert("El artículo con mayor precio de la categoria lacteos es:" +vNombreMaxLacteos );
alert("La cantidad de artiuclos de categoria bebidas es:" + vContadorBebidas );


}