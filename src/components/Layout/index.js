import React from 'react';
import Header from '../Header';

//Este componente lo que hace es poner un componente que se renderiza en todas las rutas

function Layout(props) {
  const {
    children,
  } = props;

  return(
    <React.Fragment>
      <div style={{width:'100%'}}>
        <Header/>
      </div>
      <div style={{paddingTop:'10px'}}>
        {children}
      </div>
    </React.Fragment>
  );
}

export default Layout;