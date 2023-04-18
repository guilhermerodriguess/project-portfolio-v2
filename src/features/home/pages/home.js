import { 
  Card, 
  CardHeader, 
  CardBody, 
  SimpleGrid, 
  Heading, 
  Text, 
  Flex, 
  Box,
  useDisclosure
} from '@chakra-ui/react';
import OSTable from '../osTable';
import ModalComp from '../modalComp';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const progressOS = () => {
    const db_os = localStorage.getItem("cad_os")
      ? JSON.parse(localStorage.getItem("cad_os"))
      : 0

    return db_os.length || 0
  }

  const waitingOS = () => {
    const db_os = localStorage.getItem("cad_budget")
      ? JSON.parse(localStorage.getItem("cad_budget"))
      : 0

    return db_os.length || 0
  }

  return (
    <Flex
    h="100vh"
    align="center"
    justify="center"
    fontSize="20px"
    fontFamily="poppins"
    >
    <Box maxW={1000} w="100%" h="100vh" py={10} px={2}>
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
  <Card>
    <CardHeader>
      <Heading size='md' textAlign='right' fontSize='6xl'>{progressOS()}</Heading>
    </CardHeader>
    <CardBody textAlign='right'>
      <Text>O.S em andamento</Text>
    </CardBody>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md' textAlign='right' fontSize='6xl'>25</Heading>
    </CardHeader>
    <CardBody textAlign='right'>
      <Text>O.S entregues</Text>
    </CardBody>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md' textAlign='right' fontSize='6xl'>{waitingOS()}</Heading>
    </CardHeader>
    <CardBody textAlign='right'>
      <Text>O.S aguardando aprovação</Text>
    </CardBody>
  </Card>
</SimpleGrid>
    <OSTable onOpen={onOpen}/>
    </Box>
    {isOpen && (
        <ModalComp
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
        />
      )}
    </Flex>
  )
}

export default Home;