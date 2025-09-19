import {useParams} from "react-router-dom"
import ReadComponent from "../../components/todo/ReadComponent"

const ReadPage = () =>{
    const {tno} = useParams()

    return(
        <div className="font-extrabold w-full bg-white bg-opacity-70  mt-3 p-4 rounded-xl ">
            <div className="text-2xl  text-blue-800" >
                Todo Read Page Component {tno}
            </div>
                <ReadComponent tno={tno}></ReadComponent>
        </div>
    )
}

export default ReadPage