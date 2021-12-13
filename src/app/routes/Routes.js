import { useState } from 'react';
import { Switch, Route, Redirect} from 'react-router';
import ResultadosBusqueda from '../paginas/ResultadoBusqueda';
import DetallePelicula from '../paginas/DetallePelicula';
import Login from '../paginas/Login';
import AdministrarPeliculas from '../paginas/AdministrarPeliculas';
import Header from '../componentes/Header';


/* 
          COMPONENETES ENVOLVENTES O WRAPPERS.

*/

export default function Routes(){
          const auth= JSON.parse(localStorage.getItem('auth'));
          const [usuario, setUsuario]= useState(auth);
          
         

          return(
                    <Switch>
                              <Header usuario={usuario} autenticado={setUsuario}>
                                        <Route exact path="/" component={ResultadosBusqueda}/>
                                        <Route path="/detalle/:id" component={DetallePelicula} />
                                        <Route path="/login">
                                                  <Login autenticado={setUsuario} />
                                        </Route>
                                        <Route path="/administrar">
                                                  {usuario ? <AdministrarPeliculas /> : <Redirect to="/login" /> }
                                           
                                        </Route> 
                              </Header>

                    </Switch>
          );

}