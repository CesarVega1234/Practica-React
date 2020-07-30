import React from 'react';
import { Document, View,Text } from '@react-pdf/renderer';
import {
  Contenedor,
  Header,
  Logo,
  ContainerDataUser,
  Title,
  Input,
  SubTitle,
  Position,
  Divider,
  Table,
  TableHeader,
  TableCell,
  TableCellText,
  TableCellHeader,
  DividerTable,
  styles
} from './Components.js';

export default function DocFull({order}){
  return(
    <Document>
    <Contenedor size="A4" >
      <Header>
        <Title>Pedido</Title>
        <Logo src='https://i2.wp.com/cleverlogos.co/wp-content/uploads/2018/05/reciepthound_1.jpg?fit=800%2C600&ssl=1'/>
      </Header>
      <ContainerDataUser>
        <Position>
          <SubTitle>Fecha De Creacion: {order.fecha}</SubTitle>
          <SubTitle>Sucursal: {order.sucursal}</SubTitle>
          <Input>Creado Por: {order.responsable}</Input>
          <Input>Entregado Por: {order.entregadoPor ? order.entregadoPor : '---'}</Input>
          <Input>Fecha De Entrega: {order.fecha_entregado ? order.fecha_entregado : '---'}</Input>
        </Position>
      </ContainerDataUser>
      <Divider/>
      <Table>
        <TableHeader>
          <TableCellHeader>Producto</TableCellHeader>
          <TableCellHeader>Cantidad</TableCellHeader>
          <TableCellHeader>Kg's</TableCellHeader>
        </TableHeader>
        {
          order.listado.map((row,index)=>(
              <View key={index}>
                <TableCell>
                  <TableCellText>{row.producto}</TableCellText>
                  <TableCellText>{row.cantidad}</TableCellText>
                  <TableCellText>{row.kilogramos.length > 0 ? row.kilogramos.map((data,index)=>{return (<Text key={index}>{data},</Text>)}) : '---'}</TableCellText>
                </TableCell>
                <DividerTable/>
              </View>
          ))
        }
      </Table>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Contenedor>
  </Document>
  )
}