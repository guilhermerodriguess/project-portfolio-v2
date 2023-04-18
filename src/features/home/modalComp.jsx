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

const ModalComp = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detalhes da ordem de serviço</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={4}>
              <Box>
                <FormLabel>Cliente</FormLabel>
              </Box>
              <Box>
                <FormLabel>Responsável</FormLabel>
              </Box>
              <Box>
                <FormLabel>Veículo</FormLabel>
              </Box>
              <Box>
                <FormLabel>Peças</FormLabel>
              </Box>
              <Box>
                <FormLabel>Serviços</FormLabel>
              </Box>
              <Box>
                <FormLabel>Valor</FormLabel>
              </Box>
              <Box>
                <FormLabel>Iniciada em:</FormLabel>
              </Box>
              <Box>
                <FormLabel>Finalizada em:</FormLabel>
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="start">
            <Button colorScheme="green" mr={3} >
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
}

export default ModalComp;