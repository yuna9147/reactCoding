const Input = ({label, type, name, value, onChange}) => {
    if (type === "date") {
        return (
            <div className="Input">
                <h5>{label}</h5>
                <div className="date">
                    <input type={type} name="start_date" onChange={onChange}/>
                    <input type={type} name="end_date" onChange={onChange}/>
                </div>
            </div>
        )
    } else if(type === "checkbox") {
        return (
            <div className="Input">
                <input type={type} name="option" value={value}/>
                <h5>{label}</h5>
            </div>
        )
    } else  {
        return (
            <div className="Input">
                <h5>{label}</h5>
                <input type={type} name={name} onChange={onChange}/>
            </div>
        )
    }
};

export default Input;
