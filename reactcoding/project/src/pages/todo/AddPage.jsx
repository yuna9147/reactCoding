import AddComponent from "../../components/todo/AddComponent"

const AddPage = () =>{
    return (
        <div className="p-4 w-full bg-white bg-opacity-70 rounded-xl">
            <div className="text-3xl font-extrabold ">
                Todo Add Page
            </div>
            <AddComponent />
        </div>
    )
}

export default AddPage