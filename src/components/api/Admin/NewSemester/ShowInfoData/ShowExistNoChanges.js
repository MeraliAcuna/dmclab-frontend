import { CDBBox, CDBIcon, CDBTable, CDBTableBody, CDBTableHeader } from "cdbreact";
import { Button, Modal } from "react-bootstrap";

const ShowExistNoChanges = ({ show, handleClose, data, title }) => {

    const columnSet = new Set();

    data.forEach((item) => {
        Object.keys(item).forEach((key) => {
            columnSet.add(key);
        });
    });

    const columns = Array.from(columnSet);

    return (
        <>
      
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>{title} existentes pero sin cambios</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-5 pb-4">
                    <CDBBox display="flex" flex="fill" alignItems="center" className="mx-5 mb-4 mt-2">
                        <CDBIcon icon="info-circle" size="lg" />
                        <h6 className="m-0 ms-4">Este es un listado de los datos que no serán insertados en la base de datos debido a que ya existen en el sistema y el insertarlos podrá ocasionar problemas a futuro</h6>
                    </CDBBox>
                    <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <CDBTable striped hover responsive maxHeight="50vh" scrollY borderless className="mb-0">
                            <CDBTableHeader>
                                <tr style={{ textAlign: 'center', backgroundColor: '#dc3444', color: 'white' }}>
                                    {columns.map((column) => (
                                        <th key={column}>{column}</th>
                                    ))}
                                </tr>
                            </CDBTableHeader>
                            <CDBTableBody>
                                {data.map((item, index) => (
                                    <tr key={index} style={{ textAlign: 'center' }}>
                                        {columns.map((column) => (
                                            <td key={column}>{item[column]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </CDBTableBody>
                        </CDBTable>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <CDBBox display="flex" flex="fill" justifyContent="end">
                        <Button variant="danger" onClick={handleClose}>Cerrar</Button>
                    </CDBBox>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ShowExistNoChanges