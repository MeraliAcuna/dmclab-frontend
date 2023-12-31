import { Button, Container, Navbar } from "react-bootstrap"
import LogoDMC from '../../../img/DMC LAB LIGHT LOGO.png'
import { CDBBox } from "cdbreact"
import { Route, Routes } from "react-router-dom"
import Orders from "./Orders/OrdersInterface"
import ReceptionistSideBar from "./ReceptionistSideBar"
import Requests from "./Requests/RequestsInterface"

const ReceptionistMain = () => {
    return (
        <CDBBox display="flex" flex="column" style={{ height: '100vh' }}>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar>
                        <CDBBox display="flex" alignItems="center">
                            <img
                                alt="DMCLAB Logo"
                                src={LogoDMC}
                                height="35px"
                            />
                        </CDBBox>
                    </Navbar>
                    <CDBBox display="flex" className="me-3" alignItems="center">
                        <h6 className="mb-0 me-3" style={{ color: 'white' }}>¡Bienvenido Casetero!</h6>
                        <Button variant="danger">Cerrar Sesión</Button>
                    </CDBBox>
                </Container>
            </Navbar>
            <CDBBox display="flex" flex="fill">
                <ReceptionistSideBar />
                <Routes>
                    <Route path="/pedidos" element={<Orders />} />
                    <Route path="/solicitudes" element={<Requests />} />
                    <Route path="/reportes" />
                </Routes>
            </CDBBox>
        </CDBBox>

    )
}

export default ReceptionistMain