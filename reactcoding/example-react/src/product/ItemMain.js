import {useState} from "react";
import ItemList from "./ItemList";
import ItemTotal from "./ItemTotal";
import ItemInput from "./ItemInput";

const ItemMain = () => {

    const itemDataArray = [
        {
            name: "CPU",
            price : 460000,
            quantity : 1,
        },
        {
            name: "메인보드",
            price : 110000,
            quantity : 1,
        },
        {
            name: "메모리",
            price : 79000,
            quantity : 2,
        },
        {
            name: "파워",
            price : 72000,
            quantity : 1,
        },
    ];
    const[items,setItems] = useState(itemDataArray);
    
    /*새로운 상품 등록*/
    const[form,setForm] = useState({
        name:"",
        price:0,
        quantity:0,
    });

    const handleChangePd = (e) =>{
        const{name,value} = e.target;
        setForm(
            {...form,[name]:value}
        );
    };

    const onCreate=()=>{
        setItems([...items, form]);
        alert("새 상품이 등록되었습니다.");
        setForm(
            {
            name:"",
            price:0,
            quantity:0,
            }
        );
    };


    /*제품가격/수량변경*/
    const handleChange = (name,field, value) =>{
        setItems((items) => 
        items.map((item) =>
        item.name===name? {...item,[field]:value}:item)
    );
};



    return(
        <>
            <ItemInput items={items} form={form} onChange={handleChange} handleChangePd={handleChangePd} onCreate={onCreate}/>
            <hr/>
            <ItemList items={items} />
            <ItemTotal items={items} />
        </>
    );
}


export default ItemMain;