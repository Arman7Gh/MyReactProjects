import React from 'react'
import { Pagination, PaginationItem, PaginationLink, Row, Col } from 'reactstrap'




const PageInation = ({ TotalPage, toPage ,page }) => {
  
  const tp = TotalPage
 
  const createproppageination = () => {  
    let items = [];
    for (let i = 1; i <= tp; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink onClick={() => toPage(i)} >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return items;
  };

  return (
    <div>
      <Row >
        <Col>
          <Pagination className='Pagination'>
            {createproppageination()}
          </Pagination>
        </Col>
      </Row>
    </div>
  )
}

export default PageInation
