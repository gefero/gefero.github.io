---

layout: post
title: "(Otra) introducción a `tidyverse`... pero con datos copados. Parte 1."
date: 2019-03-08
mathjax: true
comments: true
---


Introducción
------------

La idea de esta serie es poder introducir algunos conceptos básicos
del llamado `tidyverse` en R. Vamos a tratar de hacernos amigos de
algunos algunos de los verbos que vimos hace un rato y que nos van a
hacer la vida más fácil en la manipulación de datos. Particularmente,
en este post, vamos a trabajar un poquito sobre una instrucción importante 
`filter()` y a dar algunas intuiciones sobre la visualización de datos 
en `ggplot2`


PASO 1. Cargar las librerías a utilizar
---------------------------------------

Lo primero que tenemos que hacer, siempre, en una sesión de R es cargar
o importar las librerías que vamos a utilizar.

    library(tidyverse)
    library(sf)
    library(gdalUtils)

PASO 2. Importando los datos
----------------------------

El (obvio) siguiente paso es importar los datos que vamos a utilizar. En
este caso, vamos a tratar de hacer un análisis exploratorio de un
dataset sobre la distribución de delitos en la Ciudad Autónoma de Buenos
Aires. Se trata de un dataset no oficial generado por el dueño de este
[repositorio](https://github.com/ramadis/delitos-caba). Si bien son
datos "no oficiales" están extraidos de una fuente oficial: el [Mapa del
Delito](https://mapa.seguridadciudad.gob.ar/) generado por el GCBA.

Primero, importamos el gran archivo en formato .csv que contiene en cada
fila un delito reportado y una serie de atributos asociados.

    delitos <- read.csv("../data/delitos.csv")
    head(delitos)

    ##       id    comuna           barrio  latitud longitud      fecha     hora
    ## 1  68400  Comuna 3        BALVANERA -34.6141 -58.4117 2016-10-31 01:00:00
    ## 2  68401  Comuna 7           FLORES -34.6509 -58.4547 2016-10-31 02:30:00
    ## 3  68402  Comuna 4    NUEVA POMPEYA -34.6499 -58.4053 2016-10-31 04:00:00
    ## 4  68492 Comuna 13         BELGRANO -34.5615 -58.4557 2016-10-31 02:58:00
    ## 5 132437  Comuna 9          LINIERS -34.6524 -58.5193 2016-10-31 21:00:00
    ## 6 132469 Comuna 11 VILLA SANTA RITA -34.6218 -58.4833 2016-10-31 08:00:00
    ##          uso_arma uso_moto lugar origen_dato           tipo_delito
    ## 1 SIN USO DE ARMA SIN MOTO    NA          NA      Homicidio Doloso
    ## 2 SIN USO DE ARMA SIN MOTO    NA          NA      Homicidio Doloso
    ## 3 SIN USO DE ARMA SIN MOTO    NA          NA      Homicidio Doloso
    ## 4 SIN USO DE ARMA SIN MOTO    NA          NA    Homicidio Seg Vial
    ## 5 SIN USO DE ARMA SIN MOTO    NA          NA Hurto (Sin violencia)
    ## 6 SIN USO DE ARMA SIN MOTO    NA          NA Hurto (Sin violencia)
    ##   cantidad_vehiculos cantidad_victimas
    ## 1                  0                 0
    ## 2                  0                 0
    ## 3                  0                 0
    ## 4                  0                 1
    ## 5                  0                 0
    ## 6                  0                 0

Hagamos un primer gráfico rápido de este dataset a ver qué
encontramos... Lo más fácil de todo sería plotear la latitud contra la
longitud.

    ggplot(delitos) + 
            geom_point(aes(x=longitud, y=latitud))


<img src="https://github.com/gefero/gefero.github.io/raw/master/blog/_files/2019-03-08-Intro_tidy_files/p1.png" alt="acc" title="Plot 1">



Ya vemos que hay algo raro... hay un puntito solitario en
`(lat=0, long=0)`. Podemos eliminarlo, entonces.

    delitos_limpios <- filter(delitos, latitud!=0 | longitud!=0)
    head(delitos_limpios)

    ##       id    comuna           barrio  latitud longitud      fecha     hora
    ## 1  68400  Comuna 3        BALVANERA -34.6141 -58.4117 2016-10-31 01:00:00
    ## 2  68401  Comuna 7           FLORES -34.6509 -58.4547 2016-10-31 02:30:00
    ## 3  68402  Comuna 4    NUEVA POMPEYA -34.6499 -58.4053 2016-10-31 04:00:00
    ## 4  68492 Comuna 13         BELGRANO -34.5615 -58.4557 2016-10-31 02:58:00
    ## 5 132437  Comuna 9          LINIERS -34.6524 -58.5193 2016-10-31 21:00:00
    ## 6 132469 Comuna 11 VILLA SANTA RITA -34.6218 -58.4833 2016-10-31 08:00:00
    ##          uso_arma uso_moto lugar origen_dato           tipo_delito
    ## 1 SIN USO DE ARMA SIN MOTO    NA          NA      Homicidio Doloso
    ## 2 SIN USO DE ARMA SIN MOTO    NA          NA      Homicidio Doloso
    ## 3 SIN USO DE ARMA SIN MOTO    NA          NA      Homicidio Doloso
    ## 4 SIN USO DE ARMA SIN MOTO    NA          NA    Homicidio Seg Vial
    ## 5 SIN USO DE ARMA SIN MOTO    NA          NA Hurto (Sin violencia)
    ## 6 SIN USO DE ARMA SIN MOTO    NA          NA Hurto (Sin violencia)
    ##   cantidad_vehiculos cantidad_victimas
    ## 1                  0                 0
    ## 2                  0                 0
    ## 3                  0                 0
    ## 4                  0                 1
    ## 5                  0                 0
    ## 6                  0                 0

Bien... ya hicimos una primera limpieza de los datos.

    ggplot(delitos_limpios) + 
            geom_point(aes(x=longitud, y=latitud))


<img src="https://github.com/gefero/gefero.github.io/raw/master/blog/_files/2019-03-08-Intro_tidy_files/p2.png" title="Plot 2">

## ¿Qué pasó hasta acá?

Acabamos de introducir una buena cantidad de código que conviene empezar
a revisar para ir fijando conceptos.

Acabamos de hacer una visualización bien rápida. Teníamos una varaiable
que medía la posición en el eje *X* (o sea la `longitud`) y otra que lo
hacía en el eje *Y* (`latutud`). Hicimos un scatterplot de eso, usando
la librería `ggplot2`. Hay dos pasos básicos para hacer un gráfico en
ggplot:

1.  `ggplot(delitos) +` =&gt; Creamos el objeto `ggplot` y lo "llenamos"
    con un dataset. En este caso, una `tibble`
2.  `geom_point(aes(x=longitud, y=latitud))` =&gt; agregamos una capa
    estética, en este caso de puntos.

Vamos a volver, pero en general, todos los gráficos de `ggplot2` se
construyen acumulando capas estéticas.

A su vez, encontramos ¿una? inconsistencia en la base de datos. Básicamente, uno o
varios registros con coordenadas `latitud==0 & longitud==0`. Entonces,
usamos la instrucción `filter()` para filtrar los casos que cumplían con
esa condicion.


PASO 3. Visualizando los datos
------------------------------

Ya vimos un scatterplot, muy útil para plotear la distribución conjunta
de dos variables cuantitativas. Sigamos con nuestro ejemplo y veamos
algunos parámetros para modificar la estética del plot (que vale para
cualquier `geom_XXX`).

## Tamaño, color y forma (y una proyección)

Pongamos un color más bonito que ese negro. Y aprovechemos para hacer
una aclaración. Estrictamente, estamos trabajando con variables de
coordenadas geográficas. No tenemos tiempo en el curso para trabajar en
detalle este tema pero digamos que son variables cuantitativas
"especiales". Cada mapa está dibujado según un sistema de coordenadas
que llevan la forma "geódica" de la tierra (básicamente, algo que está
en 3 dimensiones) a un plano (en 2 dimensiones).

Es decir que "deforman" la forma de la tierra para llevarla a la hoja de
papel (o a la pantalla, en este caso). Si se fijan, la CABA aparece
medio alargada en el mapa anterior. Esto es porque no le especificamos a
`ggplot`en qué sistema de coordenadas está.

Pasemos, entonces la capa `coord_map('mercator')`

------------------------------
> Para más detalles sobre sistemas de coordenadas y referencia pueden
> consultar [Ciencia de Datos para Gente
> Sociable](https://bitsandbricks.github.io/ciencia_de_datos_gente_sociable/)
> de Antonio Vázquez Brust, material (y autor) que dieron una mano grande
> a este curso -además de ser colega y amigo-.

------------------------------


    ggplot(delitos_limpios) + 
            geom_point(aes(x=longitud, y=latitud), color='blue') +
            coord_map("mercator")

<img src="https://github.com/gefero/gefero.github.io/raw/master/blog/_files/2019-03-08-Intro_tidy_files/p3.png" title="Plot 3">

Ahora se parece más al Buenos Aires de Gardel...

Bien, cambiemos el tamaño de los puntitos. El parámetro `size` está en
pixels, por lo cual no es fácil estimarlo sin ver una versión previa del
plot, primero.

    ggplot(delitos_limpios) + 
            geom_point(aes(x=longitud, y=latitud), color='red', size=0.05) +
            coord_map("mercator")

<img src="https://github.com/gefero/gefero.github.io/raw/master/blog/_files/2019-03-08-Intro_tidy_files/p4.png" title="Plot 4">

Y, por último, cambiemos la forma...

    ggplot(delitos_limpios) + 
            geom_point(aes(x=longitud, y=latitud), color='red', size=0.05, shape=3) +
            coord_map("mercator")

<img src="https://github.com/gefero/gefero.github.io/raw/master/blog/_files/2019-03-08-Intro_tidy_files/p4.png" title="Plot 4">


## Facetado

Ahora, si queremos agregar más dimensiones al plot... la cosa se hace un
poco más densa. Es por eso que podemos usar una nueva "capa" de
`ggplot`, llamada *facetado*. La idea es que podemos tener gráficos
continguos, condicioados a los valores de una variable (generalmente,
categórica). Veamos, entonces, un plot por cada uno de los tipos de
delitos...

    ggplot(delitos_limpios) + 
            geom_point(aes(x=longitud, y=latitud, color=tipo_delito), size=0.05, alpha=0.25) +
            facet_wrap(~tipo_delito) +
            coord_map("mercator")

<img src="https://github.com/gefero/gefero.github.io/raw/master/blog/_files/2019-03-08-Intro_tidy_files/p6.png" title="Plot 6">


¿Qué diferencias hay con los plots anteriores?*


## Otros plots...

Veamos ahora cuáles son los tipos de delitos más comunes en la CABA.

    ggplot(delitos_limpios, aes(x=tipo_delito))+
            geom_bar(stat="count")

<img src="https://github.com/gefero/gefero.github.io/raw/master/blog/_files/2019-03-08-Intro_tidy_files/p7.png" title="Plot 7">

Se ve bastante bien... aunque tenemos acomodar un poco las etiquetas.
Una opción es pedirle a `ggplot` que las abrevie:

    ggplot(delitos_limpios, aes(x=tipo_delito))+
            geom_bar(stat="count") + 
            scale_x_discrete(labels = abbreviate)

<img src="https://github.com/gefero/gefero.github.io/raw/master/blog/_files/2019-03-08-Intro_tidy_files/p8.png" title="Plot 8">


Otra es pasarle nosotros un vector de etiquetas:

    ggplot(delitos_limpios, aes(x=tipo_delito))+
            geom_bar(stat="count") + 
            scale_x_discrete(labels = c('H.doloso','H.seg.vial', 'Hurto(s/v)', 
                                        'Robo(c/v)', 'Robo auto', 'Hurto auto', 'Lesion.seg.vial'))

<img src="https://github.com/gefero/gefero.github.io/raw/master/blog/_files/2019-03-08-Intro_tidy_files/p9.png" title="Plot 9">


## Histogramas

Un histograma, como hemos visto, se usa para mostrar la distribución de
una variable continua. Por ejemplo, podríamos hacer un histograma de la
distribución de edades de la EPH o de los ingresos. No tenemos una
variable cuantitativa, vamos a inventarnos una. Pero previamente vamos a
tener que introducir algunas ideas de limpieza de datos...

Pero eso viene en el próximo post...