# 💃 Dance World Conect 🕺

## 📖 Descripción del proyecto
**Dance World Conect** es un sistema de gestión de danza que conecta **instructores, escuelas, clases y bailarines**. Permite registrar eventos, clases y gestionar información relevante para la comunidad de danza.  

El proyecto utiliza **MongoDB** y **expresiones regulares** para filtrar información de manera práctica y eficiente.  

---

## 🗂️ Estructura de la base de datos

| Colección      | Archivo JSON                  | Descripción breve |
|----------------|-------------------------------|------------------|
| 👩‍🏫 Instructores   | `instructores.js`             | Datos de los instructores, certificaciones y especialidades |
| 🎉 Eventos        | `eventos.js`                  | Información de talleres y eventos de danza, con participantes y estilos |
| 🏫 Escuelas       | `escuelas.js`                 | Datos de escuelas, ubicación y estilos que enseñan |
| 📚 Clases         | `clases.js`                   | Clases de danza, horarios, instructores y niveles |
| 🕺 Bailarines     | `bailarines.js`               | Información de los bailarines: edad, ciudad, estilos practicados |
| 🔍 Consultas      | `consultas.js`                | Archivo con consultas en MongoDB usando expresiones regulares |

---

## ⚙️ Creación de la base de datos

1. Abrir **MongoDB Compass** o la consola de **Mongo Shell**.
2. Crear la base de datos:

```js
use dance_world_conect
```
## 🔎 Consultas con expresiones regulares

A continuación se presentan ejemplos de consultas útiles en el sistema. Cada consulta incluye la expresión regular utilizada y su utilidad.

**Ejemplo de consultas**

### 🎯 Bailarines

 **Consulta 1:** Filtrar bailarines por estilos de danza 🎼

```js
db.bailarines.find({estilos:{$regex:"ballet"}})
```
Permite categorizar a los bailarines según sus estilos de danza. Útil para crear filtros en la app o mostrar recomendaciones.

**Consulta 2:** Filtrar bailarines por país que inicie con "C" 🌎
```js
db.bailarines.find({país:{$regex:"^c",$options:"i"}})
```
útil para búsquedas rápidas, segmentación por región y estadísticas. 

**Consulta 3:** Filtrar por año de nacimiento 🎂
```js
db.bailarines.find({fecha_nacimiento:{$regex:"^2007"}})
```
Útil para competencias con restricción de edad.

**Consulta 4:** Filtrar por dominio de email 📧
```js
db.bailarines.find({email:{$regex:"@gmail\\.com$"}})
```
Permite identificar los dominios de correo de los bailarines, útil para notificaciones masivas.

**Consulta 5:** Buscar bailarines cuyo estilo inicie con "B" 🩰
```js
db.bailarines.find({estilos:{$regex:"^b",$options:"i"}})
```
Útil para buscadores que filtran estilos de danza por letra inicial.

### 🎯 Instructores

**Consulta 6:** Instructores con certificaciones “licenciatura” y “pedagogía” 🎓
```js
db.instructores.find({certificaciones:{$regex:"licenciatura"},certificaciones:{$regex:"pedagogía"}})
```
Filtra instructores con perfil académico sólido, útil para academias.

**Consulta 7:** Instructores con certificación “avanzado” 🏅
```js
db.instructores.find({certificaciones:{$regex:"avanzado"}})
```
Permite saber en qué áreas tienen más conocimientos los instructores.

**Consulta 8:** Instructores con más de 10 años de experiencia ⏳
```js
db.instructores.find({anios_experiecia:{$gt:10}})
```
Permite identificar instructores experimentados para asignar clases avanzadas.

**Consulta 9:** Instructores con certificaciones de alto nivel 🌟
```js
db.instructores.find({certificaciones:{$size:4}})
```
Detecta instructores con múltiples certificaciones, útil para destacar perfiles premium.

**Consulta 10:** Filtrar instructores por especialidad 🩰
```js
db.instructores.find({especialidad:{$regex:"folklore",$options:"i"}})
```
Categoriza instructores según su especialidad para búsquedas más precisas.

### 🎯 Clases

**Consulta 11:** Clases de nivel avanzado 💪
```js
db.clases.find({nivel:{$regex:"avanzado",$options:"i"}})
```

**Consulta 12:** Clases en septiembre de 2025 📅
```js
db.clases.find({fecha:{$regex:"^2025-09-"}})
```
Filtra clases por mes y año, útil para planificación y calendario.

**Consulta 13:** Clases que contengan la palabra “danza” 🩰
```js
db.clases.find({estilo:{$regex:"danza",$options:"i"}})
```
Agrupa todas las clases relacionadas con danza.

**Consulta 14:** Clases que se realizan el día 19 📆
```js
db.clases.find({fecha:{$regex:"19$"}})
```
Filtra las clases por día específico.

**Consulta 15:** Clases en el año 2025 🗓️
```js
db.clases.find({fecha:{$regex:"^2025"}})
```
Filtra todas las clases del año 2025.

### 🎯 Escuelas

**Consulta 16:** Escuelas en Bogotá que enseñen ballet 🏫
```js
db.escuelas.find({ciudad:{$regex:"^B",$options:"i"},estilos_enseñados:{$regex:"ballet"}})
```
Filtra escuelas por ciudad y estilo, útil para recomendaciones locales.

**Consulta 17:** Escuelas en Colombia que enseñen hip hop 
```js
db.escuelas.find({estilos_enseñados:{$regex:"^h",$options:"i"},país:{$regex:"Colombia",$options:"i"}})
```
Filtra escuelas por país y estilo para mostrar opciones específicas.

**Consulta 18:** Escuelas que enseñen ballet y hip hop 🩰🎵
```js
db.escuelas.find({estilos_enseñados:{$all:["ballet","hip hop"]}})
```
Filtra escuelas que ofrezcan ambos estilos.

**Consulta 19:** Escuelas que no enseñen ballet ni hip hop ❌
```js
db.escuelas.find({estilos_enseñados:{$not:{$in:["ballet","hip hop"]}}})
```
Excluye escuelas con esos estilos, útil para filtrado avanzado.

**Consulta 20:** Escuelas donde imparten clases instructores específicos 👩‍🏫
```js
db.escuelas.find({id_instructores:{$in:["1","3"]}})
```
Permite saber en qué escuelas enseña un instructor.

### 🎯 Eventos

**Consulta 21:** Buscar participantes por apellido y estilo de danza 🏆
```js
db.eventos.find({participantes:{$elemMatch:{apellido:{$regex:"^P"},estilos:{$regex:"danza urbana"}}}})
```
Encuentra participantes de eventos según apellido y estilo.

**Consulta 22:** Participantes con más habilidades 🌟
```js
db.eventos.find({"participantes.estilos":{$size:4}})
```
**Consulta 23:** Participantes que dominen salsa, ballet y danza contemporánea 💃🩰
```js
db.eventos.find({participantes:{$elemMatch:{estilos:{$all:["salsa","ballet","danza contemporánea"]}}}})
```
Filtra participantes con habilidades específicas para competencias.

**Consulta 24:** Eventos que contengan “danza” en el nombre 🎉
```js
db.eventos.find({nombre_evento:{$regex:"danza",$options:"i"}})
```
Facilita la búsqueda de eventos por palabra clave.

**Consulta 25:** Participantes llamados “Camila” en eventos de ballet 👏
```js
db.eventos.find({"participantes.nombre":{$regex:"camila",$options:"i"},estilo_principal:{$regex:"ballet",$options:"i"}})
```
Filtra competidores para revisar desempeño o mostrar resultados personalizados