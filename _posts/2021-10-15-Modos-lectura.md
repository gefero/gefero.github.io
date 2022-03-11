---
layout: post
title: "Sobre los modos de lectura"
date: 2021-10-15
mathjax: true
page.comments: true
---


Las formas de leer
------------------
Es muy loco como con herramientas tan simples como un conteo ponderado de palabras se puede hacer un primer análisis de un corpus.

Acá van las 20 palabras más importantes según la métrica TF-IDF de cada uno de los tomos completos de los "Diarios de Emilio Renzi" de Ricardo Piglia. La idea de TF-IDF es medir las palabras importantes para el contenido de cada documento disminuyendo el peso de las palabras que se usan mucho y aumentando el peso de las palabras que no se usan mucho en un corpus.

<img src="https://github.com/gefero/gefero.github.io/raw/master/blog/_files/modos.jpg" alt="acc" title="Renzi">

En los "años de formación" se ve como la vida académica de Renzi (o sea, Piglia) tenía su importancia: términos como "concursos", "sinóptico" o "monografía" rankean entre los más imporantes.

A medida que avanza la vida de Piglia/Renzi vemos como otros personajes como "Toto Schmucler" toma importancia en su vida y es en el segundo tomo en el que viaja a China y por eso palabras como "china" o "mao" resultan relevantes.

El el tomo final son relevantes los años "1976" y "1977" y el encierro de la dictadura. También su migración a Estados Unidos aparece capturada por el término "princeton". la universidad en la que enseñó muchos años.

En fin... es por estas cosas que, a veces, me da la sensación de que sobreestimamos el detalle y la lectura "cercana". Obviamente, el detalle es importante, pero nos limita la escala de lo que podemos leer. Pero además me resulta muy lindo lo parsimoniosas que son estas aproximaciones distantes. Contemos palabras (con alguna ponderación), busquemos palabras que co-ocurren en un documento. Es una simplificación del "lenguaje", claro. Pero una muy útil.

