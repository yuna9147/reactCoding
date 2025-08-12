const ItemInput = ({items, onChange, form, onCreate, handleChangePd}) =>{

    const{name,price,quantity} = form;

    const handleChange = (e,field) => {
        const {name,value } = e.target;
        onChange(name,field,value);
    };


    return(
        <>
        <form className="Add">
            <fieldset>
                <legend> <h1>상품 입력</h1></legend>
            <table>
                <tbody>
                    <tr>
                        <td>상품명</td>
                        <td>
                            <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChangePd} />
                        </td>
                    </tr>
                    <tr>
                        <td>가격</td>
                        <td>
                            <input
                                type="text"
                                name="price"
                                value={price}
                                onChange={handleChangePd} />
                        </td>
                    </tr>
                    <tr>
                        <td>수량</td>
                        <td>
                            <input
                                type="text"
                                name="quantity"
                                value={quantity}
                                onChange={handleChangePd} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button type="button" onClick={onCreate}>등록</button>
            </div>
    </fieldset>
        </form>

        <ul>
            {items.map((item)=>(
                <li key={item.name}>
                    {item.name}의 가격:{" "}
                    <input
                        className="change"
                        type="text"
                        name={item.name}
                        value={item.price}
                        onChange={(e) =>handleChange(e,"price")}
                        />

                        수량:{" "}
                    <input
                        className="change"
                        type="text"
                        name={item.name}
                        value={item.quantity}
                        onChange={(e) =>handleChange(e,"quantity")}
                        />
                </li>
            ))}
        </ul>
       </>
    );
};

export default ItemInput;

