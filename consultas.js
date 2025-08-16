//BAILARINES

//1) Esta consulta puede servir para filtrar a los bailarines por estilos de danza y poder categorizarlos
db.bailarines.find({estilos:{$regex:"ballet"}})

//2)Esta consulta filtraria a cada bailarin por pais en este caso pasies que inicien por la "c" sin importar si es mayúscula o minúscula
db.bailarines.find({país:{$regex:"^c",$options:"i"}})

//3)Se filtran a los bailarines por fecha de nacimiento, por ejemplo si en alguna competencia hay resricción de edad esta consulta puede ser útil
db.bailarines.find({país:{$regex:"^c",$options:"i"}})

//4)Filtra cada dominio que cada bailarin usa
db.bailarines.find({email:{$regex:"@gmail\\.com$"}})

//5)Busca que bailarines tienen en estilos alguno que inicie por b lo que puede servir en un buscador cuando se esten filtrando los estilos que sabe cada bailarin
db.bailarines.find({estilos:{$regex:"^b",$options:"i"}})

//INSTRUCTORES

//6)Busca todos los instructores que dentro de sus certificaciones tengan licenciatura y pedagogía algo importante al momento de en una academía buscar el peril de un profesor de danza 
db.instructores.find({certificaciones:{$regex:"licenciatura"},certificaciones:{$regex:"pedagogía"}})

//7)Filtra a los intructores que dentro de sus certificaciones tengan avanzado, de esta forma se sabe en que aspectos tiene mas concocimientos el instructor
db.instructores.find({certificaciones:{$regex:"avanzado"}})

//8)Trae los instructores con mas de 10 años de experiencia, lo cual es fundamental al momneto de buscar un instructor para una academia de danza
db.instructores.find({anios_experiecia:{$size:3}})

//9)Detectar un perfil con estandar de certificaciones alto para ver los perfiles de los "mejores" instructores
db.instructores.find({certificaciones:{$size:4}})

//10)Puede filtrar a los instructores por especialidad lo que sirve para categorizar cada instructor 
db.instructores.find({especialidad:{$regex:"folklore",$options:"i"}})

//CLASES

//11)Muestra las clases de nivel avanzado lo que sirve al momento de que algún estudiante quiera buscar una clase de nivel avanzado, de igual modo con intemedio y principiante
db.clases.find({nivel:{$regex:"avanzado",$options:"i"}})

//12) Hace busquedas de clases donde el año sea 2025 y las clases sean del mes Septiembre, lo que sirve para filtrar las clases por fecha
db.clases.find({fecha:{$regex:"^2025-09-"}})

//13)Al momento de hacer la busqueda se hace facil ya que agrupa todos los estilos que tienen la palabra danza
db.clases.find({estilo:{$regex:"danza",$options:"i"}})

//14)Filtra las clases que se realizan el dia 19 facilitando la busqueda de las clases por dia
db.clases.find({fecha:{$regex:"19$"}})

//15) 
db.clases.find({fecha:{$regex:"^2025"}})

//ESCUELAS

//16)Está consulta es muy útil ya que me va a filtar las ciudades que inicien con B en este caso Bogotá y que enseñen ballet esto es muy útil ya que puede servir si un bailarin quiere ver las escuelas en este caso de Bogotá que eseñan ballet
db.escuelas.find({ciudad:{$regex:"^B",$options:"i"},estilos_enseñados:{$regex:"ballet"}})

//17)Busca en que escualas de colombia enseñan hip hop en este caso lo cual es muy util ya que filtra tambine por paises para mostrar por categorias que enseñan en cada pais
db.escuelas.find({estilos_enseñados:{$regex:"^h",$options:"i"},país:{$regex:"Colombia",$options:"i"}})

//18)Busca que escuelas senseñan tanto ballet como hip hop ayudando a la busqueda y filtrado de esto 
db.escuelas.find({estilos_enseñados:{$all:["ballet","hip hop"]}})

//19)Exclueye todas las escuelas que no enseñan niballet ni hip hop , puede ser útil al momento de si algún bailarin no quiere saber de ninguna academia que enseñe ballet y hip hop
db.escuelas.find({estilos_enseñados:{$not:{$in:["ballet","hip hop"]}}})

//20)Esta consulta puede ser muy útil para saber en que escuelas esta dando clases el instructor 
db.escuelas.find({id_instructores:{$in:["1","3"]}})

//EVENTOS
//21)esta conusulta puede ser muy útil al momento de buscar algun participante de un grupo por medio de su apellidp y del estilo de danza que se este buscando para el evento
db.eventos.find({participantes:{$elemMatch:{apellido:{$regex:"^P"},estilos:{$regex:"danza urbana"}}}})

//22)esta consulta ayuda a mirar los participantes que mas destacan por sus habilidades
db.eventos.find({"participantes.estilos":{$size:4}})

//23)permite encontrar participantes qeu tengas habilidades que se quieren para la competemcia y qeu de algin modo ayudaran en la competencia
db.eventos.find({participantes:{$elemMatch:{estilos:{$all:["salsa","ballet","danza contemporánea"]}}}})

//24)ayuda a la busqueda de la competemcia y filtar esto ayudando en al experiencia de usauario
db.eventos.find({nombre_evento:{$regex:"danza",$options:"i"}})

//25)Es útil para filtrar competidores, revisar desempeño o mostrar resultados personalizados.
db.eventos.find({"participantes.nombre":{$regex:"camila",$options:"i"},estilo_principal:{$regex:"ballet",$options:"i"}})
