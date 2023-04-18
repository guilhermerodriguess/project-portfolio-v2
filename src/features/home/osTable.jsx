import { ViewIcon } from '@chakra-ui/icons';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  TableContainer,
  Text,
  Select,
  Button,
} from '@chakra-ui/react';

const OSTable = ({ onOpen }) => {

  const OSinProgress = () => {
    const db_os = localStorage.getItem("cad_os")
      ? JSON.parse(localStorage.getItem("cad_os"))
      : [];

    const result = db_os.map((os, i) => {
      return (
        <Tr key={i}>
        <Td>{os.client}</Td>
        <Td>{os.employee}</Td>
        <Td>
          <Select>
          {os.parts.map((item, i) => {
            return (
              <option key={i}>{item}</option>
            )
          })}
          </Select>
        </Td>
        <Td>
          <Select>
          {os.service.map((item, i) => {
            return (
              <option key={i}>{item}</option>
            )
          })}
          </Select>
          
        </Td>
        <Td isNumeric>R$ {os.value}</Td> 
        <Td isNumeric> 
          <Button colorScheme="blue" >
          INICIAR
        </Button>
          <ViewIcon onClick={() => onOpen()}/>
        </Td>  
        </Tr>
      )
    })
    return result;
  }

  return (
    <Box>
    <TableContainer py={10}>
      <Text>O.S EM ANDAMENTO</Text>
      <Table variant='simple'>
        <Thead>
          <Tr>
            {/* <Th fontSize='2xl'>O.S EM ANDAMENTO </Th> */}
          </Tr>
        </Thead>
        <Tbody>
        <Tr>
            <Th>Cliente</Th>
            <Th>Responsável</Th>
            <Th >Peças</Th>
            <Th >Serviços</Th>
            <Th >Valor</Th>
            <Th >Iniciar/Finalizar</Th>
          </Tr>
            {OSinProgress()}  
        </Tbody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default OSTable;