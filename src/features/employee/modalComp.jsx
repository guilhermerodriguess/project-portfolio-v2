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
  Input,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [name, setName] = useState(dataEdit.name || "");
  const [phone, setPhone] = useState(dataEdit.phone || "");
  const [specialty, setSpecialty] = useState(dataEdit.specialty || "");

  const handleSave = () => {
    if (!name || !phone || !specialty) return;

    if (phoneAlreadyExists()) {
      return alert("Telefone já cadastrado!");
    }

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { name, phone, specialty };
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { name, phone, specialty }]
      : [...(data ? data : [])];

    localStorage.setItem("cad_employee", JSON.stringify(newDataArray));

    setData(newDataArray);

    onClose();
  };

  const phoneAlreadyExists = () => {
    if (dataEdit.phone !== phone && data?.length) {
      return data.find((item) => item.phone === phone);
    }

    return false;
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastro de Colaboradores</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={4}>
              <Box>
                <FormLabel>Nome</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Telefone</FormLabel>
                <Input
                  type="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Especialidade</FormLabel>
                <Input
                  type="text"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                />
              </Box>
            </FormControl>
          </ModalBody>

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
