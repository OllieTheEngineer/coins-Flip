import React, {useState} from "react";
import Coin from "./Coin"


const FlipCoin = (props) => {
    const [ side, setSide ]= useState(null);
    const [ head, setHead ] = useState(0);
    const [ tail, setTail ] = useState(0);

    const flips = (arr) => {
        let randomIdx = Math.floor(Math.random() * arr.length);
        return arr[randomIdx];
      }

    const handleFlip = () => {
        const newCoin = flips(props.coin);
        setSide(newCoin);
        if(newCoin.quarter === "tail") {
            setTail(updateCount => updateCount + 1);
        } else {
            setHead(updateCount => updateCount + 1);
        }
    };

    const startingCoin = () => {
        if(side === <Coin quarter={side.quarter} image={side.image}/>) {
            return startingCoin; 
        } else {
            return null
        }
    }

    return (
        <div>
            <h1> Flip your Coin</h1>
            {startingCoin}
            <p>
            Out of {head + tail} flips, there have been {head} heads
            and {tail} tails.
            </p>
            <button onClick={handleFlip}>Flip Coin</button>
        </div>
    )
}

FlipCoin.defaultProps = {
    coin : [
      {
        quarter: "head",
        image: "https://tinyurl.com/react-coin-heads-jpg"
      },
        // image: <img src="coins-flip/coins-flip/src/images/head.jpeg"
        //             alt="head"/>,
      {
        quarter: "tail",
        image: "https://tinyurl.com/react-coin-tails-jpg"
        // image: <img src="coins-flip/coins-flip/src/images/tail.jpeg"
        //             alt ="tail"/>
      }
    ]
  }

  

export default FlipCoin;