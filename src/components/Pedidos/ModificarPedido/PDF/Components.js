import styled from '@react-pdf/styled-components';
import { StyleSheet } from '@react-pdf/renderer';

let colorThePDF = '#ff7f50';

export const Contenedor = styled.Page`
  display:flex;
  padding-top: 35px;
  padding-bottom: 65px;
  padding-right: 35px;
  padding-left: 35px;
`;

export const Header = styled.View`
  background:${colorThePDF};
  width:100%;
  padding:20px;
  // margin-bottom:10px;
  // border-radius:10px;
  /*flex*/
  display:flex;
  justify-content:space-between;
  flex-direction:row;
  flex-wrap:wrap;
`;

export const Logo = styled.Image`
  aling-items:center;
  width:50px;
  line-height:50px; 
`;

export const ContainerDataUser = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right:10px;
  padding-left: 10px;
  display:flex;
  // border: 2px;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: justify;
  font-family: 'Times-Roman';
  color: white;
`;

export const Input = styled.Text`
  margin: 10px;
  font-size: 14px;
  text-align: justify;
  font-family: 'Times-Roman';
`;

export const SubTitle = styled.Text`
  margin: 10px;
  font-size: 18px;
  text-align: justify;
  font-family: 'Times-Roman';
`;

export const Position = styled.View`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  flex-direction:row;
`;

export const Divider = styled.View`
  margin-top:5px;
  margin-bottom:25px;
  background:#9C9C9C;
  width:100%;
  height:1px;
  border-radius: 45px;
`;

export const Table = styled.View`
  display:flex;
  flex-direction:column;
  text-align: center;
`;

export const TableHeader = styled.View`
  padding: 13px;
  background:${colorThePDF};
  font-size: 24px;
  text-align: center;
  font-family: 'Times-Roman';
  color: white;
  width:100%;

  display:flex;
  justify-content:space-between;
  flex-direction:row;
  flex-wrap:wrap;
`;

export const TableCell = styled.View`
  padding: 2%;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-around;
`;

export const TableCellText = styled.Text`
  width:33%;
  font-size: 12px;
  text-align: center;
  font-family: 'Times-Roman';
`;

export const TableCellHeader = styled.Text`
  width:33%;
  font-size: 16px;
  text-align: center;
  font-family: 'Times-Roman';  
`;

export const DividerTable = styled.View`
  margin-top:3px;
  background:#9C9C9C;
  width:100%;
  height:1px;
  border-radius: 45px;
`;

export const styles = StyleSheet.create({
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});