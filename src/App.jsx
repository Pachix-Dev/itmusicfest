import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
function App () {
  return (
    <>
      <div className='itmusicfest-wrapper'>
        <Container className='pt-3'>
          <div className='logosheader mb-5'>
            <div>
              <img src='/logomusicfest.webp' alt='ITM MUSIC FEST' width={200} />
            </div>
            <div>
              <a href='https://industrialtransformation.mx/' target='_blank' rel='noreferrer'>
                <img src='/logoITM.webp' alt='ITM MUSIC FEST' width={200} />
              </a>
            </div>
          </div>
          <div className='blackeyedpeas-wrapper'>
            <img src='/logoblackeyedpeas.webp' alt='Black Eyed Peas' className='logoband' />
            <img src='/blackeyedpeas.webp' alt='Black Eyed Peas' className='band' />
            <div className='info-text'>
              <h1>6 DE OCTUBRE</h1>
              <h2>REGÍSTRATE PARA PARTICIPAR</h2>
            </div>
          </div>
        </Container>
        <div className='logos-firstviewport'>
          SÍGUENOS EN REDES
          <Row className='mt-3 m-0'>
            <Col xs sm md className='pt-3 my-auto'>
              <img src='/menteFactura.webp' alt='mente factura ' width={100} />
            </Col>
            <Col xs sm md className='pt-3 my-auto'>
              <img src='/logofuturistic.webp' alt='mente factura ' width={100} />
            </Col>
            <Col xs sm md className='pt-3 my-auto'>
              <img src='/logogto200.webp' alt='mente factura ' width={100} />
            </Col>
            <Col xs sm md className='pt-3 my-auto'>
              <img src='/logoIGECO.webp' alt='mente factura ' width={100} />
            </Col>
            <Col xs sm md className='pt-3 my-auto'>
              <img src='/logodeutschemesse.webp' alt='mente factura ' width={100} />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default App
