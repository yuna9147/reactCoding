import './Header.css';

const Header = () =>{
    const date=new Date();
    const options ={
        year:'numeric',
        month:'2-digit',
        day:'numeric',
        weekday:'short',
    };
    const formattedDate = date.toLocaleDateString('ko-KR',options);

    return(
        <div className="Header">
            <h3>오늘은 📆</h3>
            <h1>{formattedDate}</h1>
        </div>
    );
}

export default Header;
