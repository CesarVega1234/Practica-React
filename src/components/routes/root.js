import React,{ useContext} from 'react';
import { AuthContext } from '../../context/auth';
import { Icon,Grid, Button,Message,Container} from 'semantic-ui-react';
import { watchLogOut } from '../../services/firebase';

//Este componente permite mostrar el loading si no esta el usuario sincronizado con firebase. Y tambien valida, que el usuario exista en la base de datos.

//Aqui van todas las funcionalidades necesarias antes de que se renderize la aplicacion. Por ejemplo, validar que el usuario exista.

export default function Root(props) {
    const authx = useContext(AuthContext);
    const [isDelete,setIsDelete] = React.useState(false);
    const { children } = props;

    //Cada vez que renderizo algo nuevo, analizo si el usuario esta sicnronizado.
    //El usuario cuando no esta loggeado es null y rompe el sistema si no lo valido antes.
    React.useEffect(()=>{
        if (authx.user) { //Valido que exista
            if (authx.user.isDelete) { //Valido que no sea eliminado de la db
                setIsDelete(true)
            }
        } else{
            setIsDelete(false)
        }
    },[authx])

    if (!authx.authReady) { //Loading...
            return(
            <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
                <Grid.Column>
                    <Icon.Group size='huge'>
                        <Icon loading size='big' name='circle notch'/>
                        <Icon name='user' />
                    </Icon.Group>
                    <h1>Cargando...</h1>
                </Grid.Column>
            </Grid>
        );
    } else if (isDelete) { //Si es eliminado
               return(
            <Container>
            <Grid verticalAlign='middle' textAlign='center' style={{ height: '100vh'}}>
                <Grid.Row>
                    <Grid.Column>
                    <Message
                        error
                        header='No estas registrado en la base de datos'
                        list={[
                        'Contactese con un admin para que lo registre.',
                        'No tendra acceso hasta estar registrado.',
                        ]}
                    />
                    <Button
                        color='orange'
                        content='Cerrar sesion'
                        icon='log out'
                        labelPosition='left'
                        onClick={watchLogOut} />
                    <Button
                        content='Sincronizar cuenta'
                        icon='sync alternate'
                        labelPosition='left'
                        onClick={()=>window.location.reload()} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
        );
    }
    return children;
}