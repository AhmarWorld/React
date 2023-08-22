import './GameBox.css';
import Button from '../Button/Button';
import PlayerCard from '../PlayerCard/PlayerCard';
import { useState } from 'react';

export default function GameBox({ nameOne, nameTwo, setWinner}) {
    const [scoreOne, setScoreOne] = useState('0')
    const [scoreTwo, setScoreTwo] = useState('0')
    const [currentPointsOne, setCurrentPointsOne] = useState('0')
    const [currentPointsTwo, setCurrentPointsTwo] = useState('0')
    const [currentPlayer, setCurrentPlayer] = useState(true)

    return (
        <div className='main-game'>
            <PlayerCard name={nameOne} isCurrent={currentPlayer} score={scoreOne} currentPoints={currentPointsOne} />
            <div className='buttons-div'>
                <Button value={'🐷 NEW GAME'}
                    onClick={() => {
                        setScoreOne('0')
                        setScoreTwo('0')
                        setCurrentPointsOne('0')
                        setCurrentPointsTwo('0')
                        setCurrentPlayer(true)
                        setWinner({win:false, name:''})
                    }} />
                <div className='buttons_down'  >
                    <Button value={'🎲 ROLL THE DICE'}
                        onClick={() => {
                            let random = Math.floor(Math.random() * 6 + 1)
                            if (random === 1) {
                                setCurrentPlayer(!currentPlayer)
                                setCurrentPointsOne('0')
                                setCurrentPointsTwo('0')
                            } else if (currentPlayer) {
                                setCurrentPointsOne(`${+currentPointsOne + random}`)
                            } else {
                                setCurrentPointsTwo(`${+currentPointsTwo + random}`)
                            }
                        }} />
                    <Button value={'👌 LEAVE'}
                        onClick={() => {
                            if(currentPlayer){
                                setScoreOne(`${+currentPointsOne + +scoreOne}`)
                                if(+scoreOne >= 100){
                                    setWinner({win:true, name:nameOne})
                                }
                                setCurrentPointsOne(`0`)
                            }else{
                                setScoreTwo(`${+currentPointsTwo + +scoreTwo}`)
                                if(+scoreTwo >= 100){
                                    setWinner({win:true, name:nameTwo})
                                }
                                setCurrentPointsTwo(`0`)
                            }
                        }} />
                </div>
            </div>
            <PlayerCard name={nameTwo} isCurrent={!currentPlayer} score={scoreTwo} currentPoints={currentPointsTwo} />
        </div>
    )
}