import React from 'react';

const withNotification = (Component) => (props)=>{

  return <Component
    {...props}
    //Otros props
    />
}

function Notification() {
  return(
    <h1>Hola</h1>
  );
}

export default withNotification(Notification)