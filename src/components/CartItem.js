import React from 'react'
import { Button, Card, Col, Container, Row} from 'react-bootstrap';

const CartItem = ({ product, borrarItem, borrarTodo}) => {


    return (
        <Card body className="espaciado">
          <Container>
            <Row>
              <Col className="fw-bold"> 
                Productos
              </Col>
              <Col  className="fw-bold">
                Unidades
              </Col>
              <Col  className="fw-bold">
                Precio por unidad
              </Col>
              <Col  className="fw-bold">
                Precio Total
              </Col>
              <Col  className="fw-bold">
                Borrar Todo
              </Col>
            </Row>
            <Row>
              <Col>
              {product.item.nombre}
              </Col>
              <Col>
              <Button variant="secondary" size="sm" >
                -
              </Button>
              </Col>
              <Col>
                {product.count}
              </Col>
              <Col>
              <Button variant="secondary" size="sm">
                +
              </Button>
              </Col>
              <Col>
                ${product.item.precio }
              </Col>
              <Col>
               ${product.item.precio * product.count}
              </Col>
              <Col>
              <Button variant='danger' onClick={() => borrarItem(product.item.id)}>Borrar</Button>
              </Col>
              <Col>
              <Button variant='primary' onClick={borrarTodo(product)}>Borrar Todo</Button>
              </Col>
            </Row>
            <Row>
            <Col>
              precio final: 
            </Col>
            </Row>
            
          </Container>
        </Card>
      )
}

export default CartItem
//onClick={() =>aumentarContador(product.item.count)}

/*

*/