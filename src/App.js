import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Navbar,Row,Col} from "react-bootstrap";
import logo from "./logo.svg";
import axios from 'axios';

import { useEffect,useState } from "react";
const App = () => {
  const containermargin = {
    margin:"3%",
  }
  const border = {
      border:"1px solid grey",
  }
  const url = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all";
  const [state,setState] = useState(null);
  useEffect(()=>{
    axios.get(url).then((res) => {
      setState(res.data[0]);
    })
  },[url]);
  // const {new_case,total_case} = cocase;
  if(!state){
    return null;
  }
  const day =  state.txn_date;
  return (
    <>
    <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="40"
                className="d-inline-block align-center"
              />{" "}
              React Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Container style={containermargin}>
          <h1>Api call test</h1><br/>
            <Row>
              <Col style={border}>Day</Col>
              <Col style={border}>Number of cases today</Col>
              <Col style={border}>Number of cases all</Col>
            </Row>
            <Row>
              <Col style={border}>{day}</Col>
              <Col style={border}>{state.new_case}</Col>
              <Col style={border}>{state.total_case}</Col>
            </Row>
      </Container>
      </>
  );
  
};

export default App;

// "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all";