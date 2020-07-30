/* jshint ignore:start*/
import React,{useEffect,useState} from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button, Icon } from 'semantic-ui-react'
import DocFull from './DocPDF';

function PDF(props) {
  const{
    order
  } = props;

  const [open, setOpen] = useState(false);
  //Pausa el recargo de la pagina por un 1ms y le da tiempo de renderizar correctamente la libreria react-pdf.
  useEffect(() => {
    setOpen(false);
    setOpen(true);
    return () => setOpen(false); //No deja que se renderizen los hijos. Por ende no muestra los hijos
  },[]);

  return(
    <React.Fragment>
      {
        open && (

          <PDFDownloadLink document={<DocFull order={order}/>} fileName={`pedido_${order.fecha}_${order.sucursal}.pdf`}>
        {({ blob, url, loading, error }) =>
          (
            (loading) ?
              <Button loading secondary fluid>
                Loading
              </Button>
            :
              <Button fluid color="red" animated="vertical">
                <Button.Content visible>
                  <Icon name="file pdf"/>
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow alternate circle down" />
                </Button.Content>
              </Button>
        )}
        </PDFDownloadLink>

        )
      }
    </React.Fragment>
  );
}

export default PDF;