import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
      
      {/* <div>
        <Link to={'/'}>Home</Link> <br/>
        <Link to={'/new'}>새 일기</Link><br/>
        <Link to={'/diary'}>읽기</Link><br/>
        <Link to={'/edit'}>수정/삭제</Link>
      </div> */}
    </div>
  );
}
export default App;
