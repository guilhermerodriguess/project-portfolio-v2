import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <Link to="/">
          <SidebarItem Icon={FaHome} Text="Início" />
        </Link>
        {/* <SidebarItem Icon={FaChartBar} Text="Statistics" /> */}
        <Link to="/clientes">
          <SidebarItem Icon={FaUserAlt} Text="Clientes" to />
        </Link>
        {/* <SidebarItem Icon={FaEnvelope} Text="Mail" /> */}
        {/* <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" /> */}
        <Link to="colaborador">
          <SidebarItem Icon={FaIdCardAlt} Text="Colaborador" />
        </Link>
        <Link to="/orcamentos">
          <SidebarItem Icon={FaRegFileAlt} Text="Orçamentos" />
        </Link>
        {/* <SidebarItem Icon={FaRegSun} Text="Settings" /> */}
      </Content>
    </Container>
  )
}

export default Sidebar