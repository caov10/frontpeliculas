function MiPrimerComponenteArray(props){
          
          return (
          <>
                    {props.personas.map(persona =>(
                       <>
                         <h3>Mi Primer componente funcional</h3>
                         <span>{persona.nombre} {persona.apellido}</span>
                       </>       
                    ))}
                  
          </>
          );

}
export default MiPrimerComponenteArray; 