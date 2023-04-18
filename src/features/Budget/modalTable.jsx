import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import db_parts from '../../mocks/parts'
import db_services from '../../mocks/services'
import { DeleteIcon } from '@chakra-ui/icons'

const TableBudget = ({parts, setParts, service, setService, setValue}) => {

  const inputParts = () => {
    const result = parts.map((item) => {
      return db_parts.find((mock) => mock.product === item)
    })
    const prices = result.map((item, index) => {
      return (
        <Tr key={index} cursor="pointer" _hover={{ bg: "gray.100" }}>
        <Td>{item.product}</Td>
        <Td>R$ {item.value}</Td>
        <Td isNumeric><DeleteIcon onClick={() => removeParts(item.product)} /></Td>
      </Tr>
      )
    })
    return prices;
  }

  const removeParts = (name) => {
    const result = parts.filter((item) => item !== name);
    return setParts(result)
  }

  const inputService = () => {
    const result = service.map((item) => {
      return db_services.find((mock) => mock.service === item)
    })
    const prices = result.map((item, index) => {
      return (
        <Tr key={index} cursor="pointer" _hover={{ bg: "gray.100" }}>
        <Td>{item.service}</Td>
        <Td>R$ {item.value}</Td>
        <Td isNumeric><DeleteIcon onClick={() => removeService(item.service)} /></Td>
      </Tr>
      )
    })
    return prices;
  }

  const removeService = (name) => {
    const result = service.filter((item) => item !== name);
    return setService(result)
  }

  const BudgetValue = () => {
    const resultParts = parts.map((item) => {
      return db_parts.find((mock) => mock.product === item)
    })

    const resultService = service.map((item) => {
      return db_services.find((mock) => mock.service === item)
    })

    const totalParts = resultParts.map((item) => {
      return Number(item.value)
    })

    const totalService = resultService.map((item) => {
      return Number(item.value)
    })

    const total = [...totalParts, ...totalService];

    const result = total.reduce((acc, cur) => acc + cur, 0)
    setValue(result.toFixed(2))
    return result.toFixed(2);
  }

  return (
    <TableContainer>
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th>Peças</Th>
            <Th>Valor</Th>
            <Th isNumeric>Excluir</Th>
          </Tr>
        </Thead>
        <Tbody>
          { inputParts() }
        </Tbody>
        <Thead>
          <Tr>
            <Th>Serviços</Th>
            <Th>Valor</Th>
            <Th isNumeric></Th>
          </Tr>
        </Thead>
        <Tbody>
            { inputService() }
        </Tbody>
        <Tfoot bgColor={'gray.200'}>
          <Tr>
            <Th>
              Total
            </Th>
            <Td>
              R$ {BudgetValue()}
            </Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export default TableBudget;