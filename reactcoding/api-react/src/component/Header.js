import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {useNavigate} from 'react-router-dom';

const Header = () =>{
    const navigate = useNavigate();
    const goBusan=() =>{
        navigate('/');
    };

    const goGyeongnam = () =>{
        navigate('/list');
    }
    return(
        <ButtonGroup aria-label="Basic example">
            <Button
                variant="secondary"
                onClick={goBusan}>
                부산 테마 여행 리스트
            </Button>
            <Button
                variant="secondary"
                onClick={goGyeongnam}>
                경상남도 문화 관광 리스트
            </Button>
        </ButtonGroup>
    )
}

export default Header;