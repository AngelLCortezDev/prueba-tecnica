--paises
CREATE TABLE IF NOT EXISTS public.paises
(
    id_pais serial,
    nombre character varying(55) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT paises_pkey PRIMARY KEY (id_pais)
)

TABLESPACE pg_default;

--administradores
CREATE TABLE IF NOT EXISTS public.administradores
(
    identificador character varying(55) COLLATE pg_catalog."default" NOT NULL,
    password character varying(60) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT administradores_pkey PRIMARY KEY (identificador)
)

TABLESPACE pg_default;

--empresas
CREATE TABLE IF NOT EXISTS public.empresas
(
    id_empresa serial,
    nombre character varying(55) COLLATE pg_catalog."default",
    CONSTRAINT empresas_pkey PRIMARY KEY (id_empresa)
)

TABLESPACE pg_default;

--denunciantes
CREATE TABLE IF NOT EXISTS public.denunciantes
(
    id_denunciante serial,
    nombre character varying(255) COLLATE pg_catalog."default",
    correo character varying(255) COLLATE pg_catalog."default",
    telefono character varying(10) COLLATE pg_catalog."default",
    CONSTRAINT denunciantes_pkey PRIMARY KEY (id_denunciante)
)

TABLESPACE pg_default;

--detalles_denuncia
CREATE TABLE IF NOT EXISTS public.detalles_denuncia
(
    id_detalle_denuncia serial,
    detalle character varying(255) COLLATE pg_catalog."default" NOT NULL,
    status smallint DEFAULT 0,
    CONSTRAINT detalles_denuncia_pkey PRIMARY KEY (id_detalle_denuncia)
)

TABLESPACE pg_default;

--estados
CREATE TABLE IF NOT EXISTS public.estados
(
    id_estado serial,
    nombre character varying(55) COLLATE pg_catalog."default" NOT NULL,
    pais integer NOT NULL,
    CONSTRAINT estados_pkey PRIMARY KEY (id_estado),
    CONSTRAINT pais FOREIGN KEY (pais)
        REFERENCES public.paises (id_pais) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

--mensajes
CREATE TABLE IF NOT EXISTS public.mensajes
(
    id_mensaje serial,
    mensaje character varying(255) COLLATE pg_catalog."default" NOT NULL,
    denuncia integer NOT NULL,
    CONSTRAINT mensajes_pkey PRIMARY KEY (id_mensaje),
    CONSTRAINT denuncia FOREIGN KEY (denuncia)
        REFERENCES public.detalles_denuncia (id_detalle_denuncia) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

--datos_denuncia
CREATE TABLE IF NOT EXISTS public.datos_denuncia
(
    id_datos_denuncia serial,
    empresa integer NOT NULL,
    pais integer NOT NULL,
    estado integer NOT NULL,
    "numCentro" integer NOT NULL,
    CONSTRAINT datos_denuncia_pkey PRIMARY KEY (id_datos_denuncia),
    CONSTRAINT empresa FOREIGN KEY (empresa)
        REFERENCES public.empresas (id_empresa) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT estado FOREIGN KEY (estado)
        REFERENCES public.estados (id_estado) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT pais FOREIGN KEY (pais)
        REFERENCES public.paises (id_pais) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

--denuncias
CREATE TABLE IF NOT EXISTS public.denuncias
(
    folio character varying(5) COLLATE pg_catalog."default" NOT NULL,
    password character varying(60) COLLATE pg_catalog."default" NOT NULL,
    datos_denuncia integer NOT NULL,
    detalle_denuncia integer NOT NULL,
    denunciante integer NOT NULL,
    CONSTRAINT denuncias_pkey PRIMARY KEY (folio),
    CONSTRAINT datos_denuncia FOREIGN KEY (datos_denuncia)
        REFERENCES public.datos_denuncia (id_datos_denuncia) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT denunciante FOREIGN KEY (denunciante)
        REFERENCES public.denunciantes (id_denunciante) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT detalle_denuncia FOREIGN KEY (detalle_denuncia)
        REFERENCES public.detalles_denuncia (id_detalle_denuncia) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;