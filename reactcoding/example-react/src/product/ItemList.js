import Item from "./Item";

const ItemList = ({items} ) => {
    return(

        <ul>
        {items.map((item) => (
            <Item key = {item.name} item={item} />
        ))}
        </ul>

    )
};

export default ItemList;