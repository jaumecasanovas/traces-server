
CREATE TABLE runners (
    runner_id serial PRIMARY KEY,
    nom varchar(25) NOT NULL,
	cognoms varchar (50) NOT NULL,
	dorsal smallint NOT NULL UNIQUE
);


CREATE TABLE points ( 
   	runner_id integer REFERENCES runners (runner_id),
	geom geometry(Point,25831)
);	
