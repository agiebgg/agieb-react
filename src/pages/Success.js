import Header from '../components/Header'
import Meta from '../components/Meta'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

const Success = () => {
  // page content
  const pageTitle = 'Success'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle}  />

           
    </div>
  )
}

export default Success