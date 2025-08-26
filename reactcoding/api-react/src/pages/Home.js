import BusantravelList from "../component/BusantravelList";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Header from "../component/Header";

const Home = () =>{
    return(
        <Container>
            <Row>
                <Col>
                    <Header />
                </Col>
                </Row>
                <Row>
                <Col>
                    <h2 className='text-center'>부산 테마여행 리스트</h2>
                </Col>
                </Row>
                <Row>
                <Col>
                    <BusantravelList />
                </Col>
                </Row>
        </Container>
    );
}
export default Home;