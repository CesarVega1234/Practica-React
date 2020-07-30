import React,{ useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import * as PATH from '../routes/PATH';

//Este componente verifica que todas las rutas que se naveguen en la web el usuario siempre este validado en la db y validado.

export default function GuardRoute(props) {

    const context = useContext(AuthContext);

    const { isLoggedIn } = context;
    const { type, history, ...rest } = props;

    if (type === 'private' && !isLoggedIn ) {
            return <Redirect to={PATH.LOGIN}/>;
        } else if (type === 'public' && isLoggedIn) {
            return <Redirect to="/dashboard" />;
        }

    return <Route {...rest} />;
}