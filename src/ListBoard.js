import ListItem from "./ListItem";
import PropTypes from 'prop-types';


const ListBoard = ({data, HandleClick}) => {

    
    return (
        <div className="list-board">
            {data.map((item, index) =>   
                < div   key={item.name} >
                    <ListItem   ImageData={item}  HandleClick={() => HandleClick(item.id)} index={index} />
                </div> 
            )}           
        </div>
    )
}

ListBoard.propTypes = {
    data: PropTypes.array.isRequired,
    HandleClick: PropTypes.func.isRequired,

}


export default ListBoard;

