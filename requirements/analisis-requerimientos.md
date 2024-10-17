#Analisis de requerimientos - Prueba Tecnica

##Analisis del modelo de datos
Tenemos una aplicación web de denuncias. Una denuncia está dividida en 3 partes:

	-DatosDenuncia - Empresa/Pais/Estado/No. Centro
	-ContactoDenuncia - Nombre/Correo/Telefono
	-DetalleDenuncia - Detalle/Fecha/Mensajes/status

Tenemos un rol generador de datos.
	
	-Denunciante: Datos, Contacto y Detalle.

Tenemos dos roles visualizadores de datos, que previamente deben ser autenticados:

	-Denunciante: Detalle.
	-Abogado: OBLIGATORIO -> Datos y Detalle, Contacto en caso de ser requerido y puede ser anonimo.

Tenemos un rol modificador de datos:

	-Abogado: Añadir comentarios, cambiar estatus de denuncia.

##Diseño del modelo de datos

![Modelo de datos](/requirements/img/modelo-datos.jpg)

