# moviesBlocks
 57BlocksTest

Backend application only - APIs

Run app:

1. Clone repository
2. run command on terminal: npm install 
3. run command on terminal: npm start or npm run dev

Database is stored on cluster in MongoDB Atlas - If needed send me an email with the email which will need access and I'll give access.


API Pelicula 

HTTP Method	-		URL				-    	Parameters

GET	-	http://localhost:3000/api/pelicula/list		-	(Query): valor=texto (String value for search - leave it blank to get all the documents)

POST	-	http://localhost:3000/api/pelicula/add		-	(Body):
                                                                	genero(ObjectId from 'genero' collection),codigo(String),nombre(string-50),
                                                                	sinopsis(String-255),duracion(Number),pais(String),director(String)
								
GET	-	http://localhost:3000/api/pelicula/query	-	(Query): _id(String)

PUT	        http://localhost:3000/api/pelicula/update	-	(Body):
                                                                	_id(String),genero(ObjectId from 'genero' collection),codigo(String),nombre(string-50),
                                                                	sinopsis(String-255),duracion(Number),pais(String),director(String)
								
DELETE	-	http://localhost:3000/api/pelicula/remove	-	(Query):_id(String)

PUT	-	http://localhost:3000/api/pelicula/activate	-	(Body):_id(String)

PUT	-	http://localhost:3000/api/pelicula/deactivate	-	(Body):_id(String)



API Genero

HTTP Method	-		URL				-    	Parameters

GET	-	http://localhost:3000/api/genero/list		-	(Query): valor=texto (String value for search - leave it blank to get all the documents)

POST	-	http://localhost:3000/api/genero/add		-	(Body):nombre(string-50),descripcion(String-255)

GET	-	http://localhost:3000/api/genero/query		-	(Query):_id(String)

PUT	-	http://localhost:3000/api/genero/update		-	(Body):_id(String),nombre(string-50),descripcion(String-255)

DELETE	-	http://localhost:3000/api/genero/remove		-	(Body):_id(String)

PUT	-	http://localhost:3000/api/genero/activate	-	(Body):_id(String)

PUT	-	http://localhost:3000/api/genero/deactivate	-	(Body):_id(String)



API Usuarios

HTTP Method	-		URL				-    	Parameters

GET	-	http://localhost:3000/api/usuario/list		-	(Query): valor=texto (String value for search - leave it blank to get all the documents)

POST	-	http://localhost:3000/api/usuario/register	-	(Body):rol(String-30),nombre(String-50),tipo_documento (String-20),num_documento (String-20)
									direccion(String-70),telefono(String-20),email(String-50),password(String-64)
									
GET	-	http://localhost:3000/api/usuario/query		-	(Query):_id(String)

PUT	-	http://localhost:3000/api/usuario/update	-	(Body):_id(String),rol(String-30),nombre(String-50),tipo_documento (String-20),
									num_documento (String-20),direccion(String-70),telefono(String-20),email(String-50),password(String-64)
									
DELETE	-	http://localhost:3000/api/usuario/remove	-	(Query):_id(String)

PUT	-	http://localhost:3000/api/usuario/activate	-	(Body):_id(String)

PUT	-	http://localhost:3000/api/usuario/deactivate	-	(Body):_id(String)

POST	-	http://localhost:3000/api/usuario/login		-	(Body):email(String-50),password(String-64)


