import React from "react";
import axios from "axios";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from "reactstrap";
import CustomPagination from '../../../../tools/pagination/CustomPagination';
import CategoryGrid from './CategoryGrid'
import {getCategories} from '../../../../api/base/CategoryAPI'

const CategoryList = () => {
  const [items, setItems] = React.useState([]);
  const [currentItems, setCurrentItems] = React.useState([]);
  const [pages, setPages] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);

  const pageItemCount = 10;

  React.useEffect(() => {
    getCategoriesFromAPI();
  }, []);

  const getCategoriesFromAPI = () => {
    getCategories().then(response =>
      {
        console.log(response.data);
        setItems(response.data);
        const totalPage = Math.ceil(response.data.length / pageItemCount);
        setPages(totalPage);
        setCurrentItems(response.data.slice(0, pageItemCount));
      });
  }


  const goToPage = pageNumber => {
    const skip = (pageNumber - 1) * pageItemCount;
    console.log(skip);
    console.log(skip + pageItemCount);
    const temp = items.slice(skip, skip + pageItemCount);
    console.log(temp);
    console.log(items);
    setCurrentItems(temp);
    setCurrentPage(pageNumber);
  };
  return (
    <Row>
      <Col>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> لیست گروه بندی محصولات
          </CardHeader>
          <CardBody>
            <CategoryGrid items={currentItems}/>
            <CustomPagination changePage={goToPage}
            currentPage={currentPage} pages={pages} pageItemCount={pageItemCount}/>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default CategoryList;
