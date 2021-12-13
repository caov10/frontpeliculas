import { useParams } from "react-router";
import { useState, useEffect } from "react";
import DetalleActores from "../componentes/DetalleActores";
import DetalleNominaciones from "../componentes/DetalleNominaciones";
import DetalleGeneral from "../componentes/DetalleGeneral";
import * as PeliculasService from "../servicios/PeliculasService";
import '../estilos/detalle-pelicula.css';

export default function DetallePelicula(){
          const { id } = useParams(); 
          const [pelicula, setPelicula]= useState({});

          useEffect(()=>{
                    PeliculasService.servicioBusquedaId(id)
                    .then(function(resultadosBusqueda){
                              setPelicula(resultadosBusqueda.data)
                    })
          },[id]);

          /*
          1. Datos Externos
                    =>ID pelicula => Parametros
          2. EStados Propiedades.
                    **ESTADOS
                              =>Peliculas


          3.Efectos
                    useEffects() => Montaje.
          
          4.Componenetes.
                    =>DetalleActores =>  Array de Objetos
                    =>DetalleNominacionesv => Objetos
                    =>Detalle General => Array
          */
          return(
                    <>
                              <div className="dv-detalle_detalle">
                                        <fieldset>
                                                  <legend>Detalle Pelicula</legend>
                                                  <h1>{pelicula.titulo}</h1>
                                                  <div className= "dv-main_detalle">
                                                            <div className= "dv-poster_detalle">
                                                                      <img alt="Poster" src={pelicula.poster}></img>
                                                            </div>
                                                            <div>
                                                                      <fieldset>
                                                                                <legend>Año</legend>
                                                                                <span>{pelicula.ano}</span>
                                                                      </fieldset>
                                                                      <fieldset>
                                                                                <legend>Rating</legend>
                                                                                <span>{pelicula.rating}</span>
                                                                      </fieldset>
                                                                      <fieldset>
                                                                                <legend>Clasificacion</legend>
                                                                                <span>{pelicula.clasificacion}</span>
                                                                      </fieldset>
                                                            </div>
                                                            <div>
                                                                      <p>{pelicula.sinopsis}</p>
                                                            </div>
                                                  </div>
                                                  <fieldset>
                                                            <legend>Detalle</legend>
                                                            <DetalleActores titulo="Actores"  datos={pelicula.actores}/>
                                                            <div className="dv-datos_detalle">
                                                                      <DetalleGeneral titulo="Generos" datos={pelicula.generos} />
                                                                      <DetalleGeneral titulo="Idiomas" datos={pelicula.idiomas}/>
                                                                      <DetalleGeneral titulo="Paises" datos={pelicula.paises}/>
                                                                      <DetalleNominaciones titulo="Nominaciones" datos={pelicula.nominaciones}/>
                                                            </div>
                                                            <DetalleGeneral titulo="Directores"  datos={pelicula.directores} />

                                                  </fieldset>
                                        </fieldset>

                              </div>     
                    </>
          );
}