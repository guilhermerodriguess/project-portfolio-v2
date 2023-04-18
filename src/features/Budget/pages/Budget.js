import { EditIcon, DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalComp from "../modalComp";

const BudgetList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  useEffect(() => {
    const db_budget = localStorage.getItem("cad_budget")
      ? JSON.parse(localStorage.getItem("cad_budget"))
      : [];

    setData(db_budget);
  }, [setData]);

  const handleRemove = (client) => {
    const newArray = data.filter((item) => item.client !== client);

    setData(newArray);

    localStorage.setItem("cad_budget", JSON.stringify(newArray));
  };

  const budgetAproved = (client) => {
    const db_budget = JSON.parse(localStorage.getItem("cad_budget"))
    const result = db_budget.filter((name) => name.client !== client )
    const newOS = db_budget.find((name) => name.client === client )

    setData(result);
    localStorage.setItem("cad_budget", JSON.stringify(result))

    const db_os = localStorage.getItem("cad_os")
      ? JSON.parse(localStorage.getItem("cad_os"))
      : [];
    
    localStorage.setItem("cad_os", JSON.stringify([...db_os, newOS]))
  }

  return (
    <Flex
      h="100vh"
      align="center"
      justify="center"
      fontSize="20px"
      fontFamily="poppins"
    >
      <Box maxW={800} w="100%" h="100vh" py={10} px={2}>
        <Button colorScheme="blue" onClick={() => [setDataEdit({}), onOpen()]}>
          NOVO ORÇAMENTO
        </Button>

        <Box overflowY="auto" height="100%">
          <Table mt="6">
            <Thead>
              <Tr>
                <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                  Cliente
                </Th>
                <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                  Mecânico
                </Th>
                <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                  Valor
                </Th>
                <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                  Status
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ client, employee, value, status, parts, service }, index) => (
                <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                  <Td maxW={isMobile ? 5 : 100}>{client}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{employee}</Td>
                  <Td maxW={isMobile ? 5 : 100}>R$ {value}</Td>
                  <Td maxW={isMobile ? 5 : 100}>{status}</Td>
                  <Td p={0}>
                    <CheckIcon
                      fontSize={20}
                      onClick={() => budgetAproved(client)}
                    />
                  </Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({ client, employee, value, status, parts, index, service }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td p={0}>
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(client)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isOpen && (
        <ModalComp
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          setData={setData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
      )}
    </Flex>
  );
};

export default BudgetList;