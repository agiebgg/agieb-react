import Header from '../components/Header'
import Meta from '../components/Meta'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import React, { useState } from "react";
import DatePicker from "react-datepicker";

const CarDetail = () => {
  // page content
  const pageTitle = 'CarDetail'
  const pageDescription = 'Please fill up the form'
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <Meta title={pageTitle}/>
        <LinkContainer to='/'>
              <button type='button' className='btn btn-warning'>
                Back
              </button>
        </LinkContainer>
       <Container fluid='md' className='mt-5'>
      <Row>
        <Col>
          
          <div className='card'>
            <div className='card-header'>{pageTitle}</div>
            <div className='card-body'>
              <form>
                

                <div class="form-group">
                <label>Plate Number:</label>
                <input type="number" class="form-control" name="plate_number" />
                </div><br />


                <label>
                      Do you made any Claims in last 5 years?:<br />
                      <input type="radio" value="Yes"  name="claims[]"/> Yes &nbsp;
                      <input type="radio" value="No"  name="claims[]"/> No
                </label><br /><br />


                 <label>
                      How many Years do you have Driving Licence?:<br />
                      <select class="form-control"  name="years">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                      </select>
                </label><br /><br />

                <div class="form-group">
                 <label>Car Made Year:</label>
                 <input type="number" class="form-control" name="car_made" />
                 </div><br />

                <div class="form-group">
                <label>Car Model:</label>
                <input type="text" class="form-control" name="car_model" />
                </div><br />

                <div class="form-group">
                <label>Car Manufacturer Date:</label>
                 <DatePicker 
                 class="form-control"
                  selected={startDate} 
                  onChange={date => setStartDate(date)} 
                />
               </div><br />
                <LinkContainer to='/success'>
                      <button type='button' className='btn btn-success'>
                        Submit
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

export default CarDetail