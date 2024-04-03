import PropTypes from 'prop-types';
const ListItem = ({ImageData, HandleClick, index}) => {

    return (
       <div className="list-board-item"  onClick={HandleClick} >
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ImageData.id}.png`}

         alt={ImageData.name} />
            <span>{ImageData.name}</span>
       </div>
    )
}

ListItem.prototype = {
    ImageData: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired,
    HandleClick: PropTypes.func.isRequired
}

export default ListItem