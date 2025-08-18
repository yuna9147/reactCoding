import NoticeList from './NoticeList';
import { useState ,useRef} from 'react';
import './NoticeMain.css'
import NoticeForm from './NoticeForm';

 const mockList = [
        {
            no:1,
            title:"[필독] 강의장 이용 안내",
            content:"8월 16일(금)~8월 17일(토) 이틀간 학원 내 바닥 및 에어컨 청소 작업이 진행될 예정입니다.\n 이에 따라 8월 14일(내일) 퇴실 시, \n의자와 개인 짐을 책상 위로 올려놓은 후 귀가해 주시기 바랍니다.",
            writer:"admin",
            writeDate: new Date().getTime(),
            important:true,
        },
        {
            no:2,
            title:"추석연휴 안내",
            content:"2025년 10월 3일~10일까지 추석연휴로 인해 강의장 사용이 불가함을 안내드립니다. \n 이용에 착오없으시기 바랍니다. \n감사합니다.",
            writer:"admin",
            writeDate: new Date().getTime(),
            important:false,
        },
        {
            no:3,
            title:"네이버 페이 시스템 점검 안내 (08/13)",
            content:"보다 안정적인 서비스 제공을 위해 네이버페이 인프라 작업을 진행할 예정입니다.\n아래 일정을 참고하시어 서비스 이용에 불편이 없으시기를 바랍니다.",
            writer:"admin",
            writeDate: new Date().getTime(),
            important:false,
        },
    ]

const NoticeMain = () => {
   const[notice,setNotice] = useState(mockList);
   const [count, setCount] = useState(mockList.length);
    const [showForm, setShowForm] = useState(false);
   const idRef = useRef(4);
   
   const onCreate = (title,content,important) =>{
    const newNotice = {
        no:idRef.current,
        title,
        content,
        writer:"admin",
        writeDate: new Date().getTime(),
        important,
    }
    setNotice([...notice,newNotice]);
    idRef.current += 1;
    setCount(count + 1);
    setShowForm(false);
   };

   const handleNewContent = () =>{
    setShowForm(true);
   };

   const handleNewContentClose = () =>{
    setShowForm(false);
   }

   const onDelete = (targtNo) => {
    setNotice(notice.filter((it)=>it.no!==targtNo));
    setCount(count-1);
  };

  const onModify = (targtNo) =>{

  };

    return(
        <>
            <h1>공지사항</h1>
            <NoticeList notice={notice} count={count} handleNewContent={handleNewContent} onDelete={onDelete} onModify={onModify}/>
            {showForm && <NoticeForm onCreate={onCreate} handleNewContentClose={handleNewContentClose}/> }
                   
        </>
    );
}

export default NoticeMain;