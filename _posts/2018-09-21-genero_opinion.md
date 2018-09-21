---

layout: post
title: "Género y periodismo... un ejercicio de text mining"
date: 2018-09-17
mathjax: true

---

Hace poco un tuitero (que permanecerá anónimo) nos pidió "hacer algo lindo y  **feminazi**" con el dataset de [@columnistos](https://twitter.com/columnistos). Teníamos, entonces, un conjunto de datos muy bonito en el cual figuraban bastantes datos de las notas de opinión escritas en diarios de circulación nacional (Página12, La Nación y Clarín).

Nostros trabajamos con dos:

* el texto del título de la nota
* el género (en este caso reducido a la dicotomía "masculino-femeno") de le autore

La idea era ver si había algún tipo de relación entre el tipo de temas que escriben autores de cada genero. Luego de probar algunos modelos de detección de tópicos (que no anduvieron muy bien... probablemente por la escasa información que proveían los títulos, generalmente más bien cortos) encaramos el problema de otra forma más bien reduccionista:

> ¿Existe relación entre las palabras que se usan en los títulos de las notas y el género de le autore?
O dicho de otra forma, ¿hay forma de "predecir" el género de les autores de las notas usando como features las palabras del título?

Así, a través de las palabras podríamos tener alguna noción de los temas que sobre los que escriben les autores. Formateamos el texto

Dicho esto, encaramos un modelo bastante simple: una bella y parsimoniosa regresión logística:

$$
P(G = 1 | X_{1}, X_{2}, ..., X_{p} = \frac{e^{\beta_{0} + \beta_{1}X_{1},\beta_{2}X_{2}, ..., \beta_{p}X_{p}}}{1+e^{\beta_{0} + \beta_{1}X_{1},\beta_{2}X_{2}, ..., \beta_{p}X_{p}}})
$$

La ventaja de este modelito, además de que corre bastante rápido, es que cada uno de los $$\beta_{p}$$ nos va a permitir

''' python
import pandas as pd
'''
