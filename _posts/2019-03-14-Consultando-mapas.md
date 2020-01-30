---
layout: post
title: "Interludio interesante: conectándose a un servicio de mapas WFS en R"
date: 2019-03-14
mathjax: true
page.comments: true
---


Usando servicios WFS en R
-------------------------

Va a ser un post rápido: estoy usando bastantes datos geográficos y
necesitaba la forma de conectarme al servicio de mapas de
[INDEC](http://www.indec.gob.ar).

Acá va un snippet rápido para hacerlo

*1. Traemos las librerías a usar:*

```r
library(tidyverse)
library(sf)
library(gdalUtils)
```

*2. Definimos la URL del WFS y vemos qué información hay:*

```r
    wfs <- "WFS:https://geoservicios.indec.gov.ar/geoserver/ows?service=wfs&version=1.0.0&request=GetCapabilities"

    info <- ogrinfo(wfs, so = TRUE)
```

Vemos que hay capas a nivel provincia, departamento y provincia.

*3. Elegimos las que queremos traer: en este caso, traemos la tabla de Necesidades Básicas Insatisfechas a nivel departamento:*

```r
    # Definimos el nombre de la capa tal y como figura en servidor
    lay <- "geocenso2010:nbi_dpto"

    # Definimos una ruta y un nombre para un archivo
    file <-  "../../data/nbi_dpto.geojson"

    # Ejecutamos la consulta:
    ogr2ogr(
            src_datasource_name = wfs,
            layer = lay,                    
            dst_datasource_name = file ,  
            f = "geojson",                           
            t_srs = "EPSG:4326",
            verbose = TRUE
    )

# Leemos el archivo
    ind_radio <- st_read(file, stringsAsFactors = TRUE)



    ## Reading layer `geocenso2010:nbi_dpto' from data source `~\data\nbi_dpto.geojson' using driver `GeoJSON'
    ## Simple feature collection with 527 features and 11 fields
    ## geometry type:  MULTIPOLYGON
    ## dimension:      XY
    ## bbox:           xmin: -74.02985 ymin: -90 xmax: -25.02314 ymax: -21.74506
    ## epsg (SRID):    4326
    ## proj4string:    +proj=longlat +datum=WGS84 +no_defs
```

El archivo quedó salvado como un geojson y con proyección 4326. Filtremos la Antártida y las Islas del Atlántico Sur y ploteemos el porcentaje de personas en hogares con NBI para cada departamento

```r
ind_filtrado<-ind_dpto %>%
        filter(departamento!="Antártida Argentina" & departamento!="Islas del Atlántico Sur")

ggplot() + 
        geom_sf(data=ind_filtrado, color=NA, aes(fill=personas_con_nbi_porc)) +
        scale_fill_viridis_c() +
        labs(title = "Porcantaje de personas en hogares con NBI",
             subtitle = "Total de departamentos",
             fill = "% NBI") + 
        theme_minimal()
```

Podemos ver que el mapa está muy bonito:

<img src="https://github.com/gefero/gefero.github.io/raw/master/blog/_files/2019-03-14-Consultando-mapas/p1.png" title="Plot 1">



Y eso es todo, amigos.

Seguimos en breve con nuestra programación habitual (y con la
introducción al `tydyverse`).

------------------------------------------------------------------

Código completo
---------------

```r
    library(tidyverse)
    library(sf)
    library(gdalUtils)


    wfs <- "WFS:https://geoservicios.indec.gov.ar/geoserver/ows?service=wfs&version=1.0.0&request=GetCapabilities"
    info <- ogrinfo(wfs, so = TRUE)

    lay <- "geocenso2010:nbi_dpto"
    file <-  "../../data/nbi_dpto.geojson"

    # Ejecutamos la consulta:
    ogr2ogr(
            src_datasource_name = wfs,
            layer = lay,                    
            dst_datasource_name = file ,  
            f = "geojson",                           
            t_srs = "EPSG:4326",
            verbose = TRUE
    )

    # Salvamos el archivo
    ind_radio <- st_read(file, stringsAsFactors = TRUE)
    
    ind_filtrado<-ind_dpto %>%
        filter(departamento!="Antártida Argentina" & departamento!="Islas del Atlántico Sur")

ggplot() + 
        geom_sf(data=ind_filtrado, color=NA, aes(fill=personas_con_nbi_porc)) +
        scale_fill_viridis_c() +
        labs(title = "Porcantaje de personas en hogares con NBI",
             subtitle = "Total de departamentos",
             fill = "% NBI") + 
        theme_minimal()
```