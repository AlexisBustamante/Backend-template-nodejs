
DROP TABLE IF EXISTS roles_usr;

create table roles_usr
(
    id_rol serial primary key,
    name_rol text not null
)





DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios
(
    id_usr serial NOT NULL,
    usr_name text COLLATE pg_catalog
    ."default" NOT NULL,
    usr_email text COLLATE pg_catalog."default" NOT NULL,
    usr_password text COLLATE pg_catalog."default" NOT NULL,
    usr_datecreate date NOT NULL DEFAULT CURRENT_DATE,
	usr_id_rol integer not null references roles_usr
    (id_rol),
    CONSTRAINT usuarios_pkey PRIMARY KEY
    (id_usr),
    CONSTRAINT usuarios_usr_email_key UNIQUE
    (usr_email)
)

TABLESPACE pg_default;

    ALTER TABLE public.usuarios
    OWNER to postgres;

    ---consultas
    select usuarios.id_usr,
        usuarios.usr_name,
        usuarios.usr_email,
        roles_usr.name_rol
    from usuarios JOIN roles_usr on usuarios.usr_id_rol=roles_usr.id_rol;




    DROP TABLE IF EXISTS pacientes;

    CREATE TABLE pacientes
    (
        pa_id serial not null primary key,
        pa_nombres text not null,
        pa_apellidos text not null,
        pa_telefono text,
        pa_edad integer,
        pa_fecha_nac date not null DEFAULT current_date,
        pa_RUT varchar(10) unique not null,
        pa_fecha_pre date not null DEFAULT current_date,
        pa_fecha_def date not null DEFAULT current_date,
        pa_usr_id integer not null references usuarios(id_usr),
        pa_fecha_creacion date not null DEFAULT current_date,
        pa_procedencia text not null,
        pa_habitacion text not null,
        pa_centro_derivacion text not null,
        pa_isapre text not null,
        pa_familiar_resp_id integer not null references familiar_responsable (fam_responsable_id),
        pa_familiar_eco_id integer not null references familiar_responsable (fam_responsable_id)
    )


    DROP TABLE IF EXISTS familiar_responsable;

    CREATE TABLE familiar_responsable
    (
        fam_responsable_id serial not null primary key,
        fam_nombres text not null DEFAULT '',
        fam_apellidos text not null DEFAULT '',
        fam_email_ text,
        fam_direccion text,
        fam_telefono text,
        fam_es_economico boolean,
        fam_fecha_creacion date not null DEFAULT current_date,
        fam_fecha_modificacion date not null DEFAULT current_date
    )


    ----INSERT
    INSERT INTO roles_usr
        (name_rol)
    VALUES
        ('Administrador');
    select *
    from roles_usr;