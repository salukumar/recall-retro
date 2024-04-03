const Header = ({data ,counter, topScore}) => {
    const showMiddle = () => counter === data.length ? true : false;
        
    
    return (
        <div className="header">
            <div className="left">
                <h1>Memory Game</h1>
                <span>Click on an image to earn points, but don't click on any more than once! You will loose!!</span>
             </div>
                {showMiddle() && (
                    <div className="middle" >
                                <h3>You Won</h3>
                            </div>
                )}
             
             <div className="right">
                <span>Score: {counter}</span>
                <span>Top Score: {topScore}</span>
             </div>
        </div>
    )
}

export default Header;