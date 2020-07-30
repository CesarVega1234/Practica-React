import React,{ useEffect } from 'react'
import { Dropdown, Icon, Feed,Button,Label} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getNotification } from '../../redux/actions/notification';
import moment from 'moment';
import { getContadorColecciones } from '../../redux/actions/contadorColecciones';
//Toda la logica
const withNotification = (Component) => (props) => {
  const{
    getNotification,
    notification,
    getContadorColecciones,
    contadorColecciones
  } = props;
  console.log(contadorColecciones);

  useEffect(() => {
    if (notification.length === 0) {
      getNotification();
    }
    if (contadorColecciones.length === 0) {
      getContadorColecciones();
    }
  }, [getNotification,getContadorColecciones,notification,contadorColecciones]);

  const trigger = (
    <span>
      <Icon name='alarm' /> Notificacion
      <Label color='red'>
        22
      </Label>
    </span>
  )

  const createItem = (obj) => {

    //Transformo de timestamp de firestore a una hora comprensible.
    var dateString = moment.unix(obj.fecha_creado.seconds).format('DD/MM/YYYY, HH:mmA');

    return {
      key: obj.id,
      text: (
        <div>
          <Feed>
          <Feed.Event>
            <Feed.Label image='https://freeiconshop.com/wp-content/uploads/edd/clipboard-list-flat.png' />
            <Feed.Content>
              <Feed.Date content={dateString} />
              <Feed.Summary>
                Nuevo pedido de {obj.data.sucursal}
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
          </Feed>
        </div>
      ),
    }
  }

//Recibe todas las notificaciones y la almacena en un array el cual lo transformara en un Card de notificaciones
  const AllNotifications = (array) =>{
    let options = [];
    array.map(item=>options.push(createItem(item)))
    return options;
  }
  return(
    <Component
      {...props}
      trigger={trigger}
      createItem={createItem}
      AllNotifications={AllNotifications}
      notification={notification}
    />
  );
}

//Todo el html
const Notification = ({ trigger, createItem, AllNotifications,notification}) => {
  return(
    <Dropdown
      trigger={trigger}
      item
    >
      <Dropdown.Menu>
        <Dropdown.Header>
        <Button icon='list' fluid primary/>
        </Dropdown.Header>
        <Dropdown.Menu scrolling>
          {AllNotifications(notification).map((item) => (
            <Dropdown.Item key={item.value} {...item} />
          ))}
        </Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>
  );
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = {
    getNotification,
    getContadorColecciones
}

export default connect(mapStateToProps,mapDispatchToProps)(withNotification(Notification));