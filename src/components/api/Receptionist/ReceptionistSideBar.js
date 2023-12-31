import { CDBSidebar, CDBSidebarHeader, CDBSidebarFooter, CDBSidebarContent, CDBSidebarMenu, CDBSidebarMenuItem, CDBBox } from "cdbreact"
import { NavLink } from "react-router-dom"
import DMCLABLOGO from '../../../img/DMC LAB LIGHT LOGO.png'

const ReceptionistSideBar = () => {

    return (
        <div style={{ display: 'flex', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#212428" toggled>
                <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                    <CDBBox display="flex" alignItems="center">
                        <img src={DMCLABLOGO} alt="DMC LAB LOGO" style={{ width: '150px' }} />
                    </CDBBox>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink to="/casetero/pedidos" className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                            <CDBSidebarMenuItem icon="shopping-bag">Pedidos</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/casetero/solicitudes" className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                            <CDBSidebarMenuItem icon="clipboard-list">Solicitudes</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/casetero/reportes" className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                            <CDBSidebarMenuItem icon="book">Reportes</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <CDBSidebarMenu>
                        <NavLink to="/admin/configuracion" className={({ isActive }) => isActive ? 'activeClicked' : ""}>
                            <CDBSidebarMenuItem icon="wrench">Configuración</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarFooter>

            </CDBSidebar>
        </div>
    )
}

export default ReceptionistSideBar