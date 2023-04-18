import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Select,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import db_parts from '../../mocks/parts'
import db_services from '../../mocks/services'
import TableBudget from "./modalTable";

const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [client, setClient] = useState(dataEdit.client || "");
  const [employee, setEmployee] = useState(dataEdit.employee || "");
  const [value, setValue] = useState(dataEdit.value || "");
  const [parts, setParts] = useState(dataEdit.parts || []);
  const [service, setService] = useState(dataEdit.service || [])
  const [status, setStatus] = useState(dataEdit.status || "Em aberto")

  const handleSave = () => {
    if (!client || !employee) return;

    if (clientAlreadyExists()) {
      return alert("Cliente já possui O.S aberta!");
    }

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { client, employee, value, parts, status, service };
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { client, employee, value, parts, status, service }]
      : [...(data ? data : [])];

    localStorage.setItem("cad_budget", JSON.stringify(newDataArray));

    setData(newDataArray);

    onClose();
  };

  const clientAlreadyExists = () => {
    if (dataEdit.client !== client && data?.length) {
      return data.find((item) => item.client === client);
    }

    return false;
  };

  const clientNames = () => {
    const names = JSON.parse(localStorage.getItem("cad_client"));

    const result = names.map((clientName, i) => {
      return (
        <option key={i} value={clientName.name}>
          {clientName.name}
        </option>
      )
    })
    return result;
  }

  const employeeNames = () => {
    const names = JSON.parse(localStorage.getItem("cad_employee"));

    const result = names.map((employeeName, i) => {
      return (
        <option key={i} value={employeeName.name}>
          {employeeName.name}
        </option>
      )
    })
    return result;
  }

  const partsNames = () => {
    const result = db_parts.map((itemName, i) => {
      return (
      <option key={i} value={itemName.product}>
        {itemName.product}
      </option>
      )
    })
    return result;
  }

  const serviceNames = () => {
    const result = db_services.map((serviceName, i) => {
      return (
      <option key={i} value={serviceName.service}>
        {serviceName.service}
      </option>
      )
    })
    return result;
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Criar Orçamento</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={4}>
              <Box>
                <FormLabel>Cliente</FormLabel>
                <Select onClick={(e) => setClient(e.target.value)}>
                  { clientNames() }
                </Select>
              </Box>
              <Box>
                <FormLabel>Mecânico</FormLabel>
                <Select onClick={(e) => setEmployee(e.target.value)}>
                  { employeeNames() }
                </Select>
              </Box>
              <Box>
                <FormLabel>Peças</FormLabel>
                <Select onClick={(e) => setParts([...parts, e.target.value])}>
                  { partsNames() }
                </Select>
              </Box>
              <Box>
                <FormLabel>Serviços</FormLabel>
                <Select onClick={(e) => setService([...service, e.target.value])}>
                  { serviceNames() }
                </Select>
              </Box>
            </FormControl>
          </ModalBody>
          <TableBudget 
            parts={parts}
            setParts={setParts}
            service={service}
            setService={setService}
            setValue={setValue}
          />
          <ModalFooter justifyContent="start">
            <Button colorScheme="green" mr={3} onClick={handleSave}>
              SALVAR
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              CANCELAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComp;
