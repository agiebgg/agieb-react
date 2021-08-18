import Header from '../components/Header'
import Meta from '../components/Meta'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
  // page content
  const pageTitle = 'Personal Details Form'
  const pageDescription = 'Please fill up the form'



  return (
    <div>
      <Meta title={pageTitle}/>
      <Container fluid='md' className='mt-5'>
      <Row>
        <Col>
          <div className='card'>
            <div className='card-header'>{pageTitle}</div>
            <div className='card-body'>
              <h5 className='card-title'>{pageDescription}</h5>
              
              <form>
              <div class="form-group">
                <label>First Name:</label>
                  <input type="text" class="form-control"  name="first_name" />
                </div><br />

                <div class="form-group">
                 <label>Last Name:</label>
                  <input type="text" class="form-control" name="last_name" />
                </div><br />

                <div class="form-group">
                 <label>Date Of Birth:</label>
                  <input type="date" class="form-control" name="dob" />
                </div><br />

                <div class="form-group">
                 <label>Email:</label>
                  <input type="email" class="form-control" name="email" />
                </div>
                <br />

                <LinkContainer to='/cardetail'>
                      <button type='button' className='btn btn-primary'>
                        Next
                      </button>
                </LinkContainer>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
      
    </div>
  )
}

export default Home