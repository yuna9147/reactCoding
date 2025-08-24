
const Input = ({label, type, name, placeholder,value, onChange}) => {
    if (type === "date") {
        return (
            <div className="Input">
                <h5>{label}</h5>
                <div className="date">
                    <input type={type} name="start_date" value={value[0]}onChange={onChange}/>
                    <input type={type} name="end_date" value={value[1]} onChange={onChange}/>
                </div>
            </div>
        )
    } else if(type === "category") {
        return (
            <div className="Input">
                <div className="radio">
                    <h5>카테고리 분류: </h5>
                    <input type="radio" name="option" value="food" id="food" onChange={onChange}/>
                    <label htmlFor="food">음식</label>
                    <input type="radio" name="option" value="activity" id="activity" onChange={onChange}/>
                    <label htmlFor="activity">액티비티</label>
                </div>
            </div>
        )
    } else  {
        return (
            <div className="Input">
                <h5>{label}</h5>
                <input type={type} name={name} onChange={onChange} placeholder={placeholder}/>
            </div>
        )
    }
};

export default Input;
