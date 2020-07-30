import React from 'react'
import { Dropdown, Icon, Menu,Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { watchLogOut } from '../../services/firebase/watcher';
import Notification from './ButtonNotification';
import { connect } from 'react-redux';
import { getContadorColecciones }  from '../../redux/actions/contadorColecciones';

function Header() {
  return(
    <div style={{ marginTop: '5em' }}>
      <Menu fixed='top' inverted size='huge'>
        <Menu.Item
          as={Link}
          to='/dashboard'>
          <img src='https://react.semantic-ui.com/logo.png' alt='Logo'/>
        </Menu.Item>

        <Menu.Item as={Link} to={'/pedidos'}>
          Pedidos
        </Menu.Item>

        <Menu.Item as={Link} to={'/stock'}>
          Stock
        </Menu.Item>

        <Notification/>

        <Menu.Menu position='right'>
          {/* <Menu.Item as='a'>
            <Icon name='mail' />
            <Label color='red'>
              22
            </Label>
          </Menu.Item> */}

          <Dropdown item icon='bars' simple>
            <Dropdown.Menu>
              <Dropdown.Item>Cuenta</Dropdown.Item>
              <Dropdown.Item>Editar permisos</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <Button color="orange" animated onClick={watchLogOut}>
                  <Button.Content visible>
                    Cerrar Sesion
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="log out" />
                  </Button.Content>
                </Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = {
    getContadorColecciones,
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);