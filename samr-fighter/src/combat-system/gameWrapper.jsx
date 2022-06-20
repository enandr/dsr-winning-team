import React, {Component,Children, cloneElement, isValidElement, useState, useEffect} from 'react';
import LevelSelect from "../pages/levelSelect";
import Level from "../pages/level";
import logo from "../assets/logo.svg";

const GameWrapper = ({children}) => {
    const [difficulty, setDifficulty] = useState('easy');
    const [samrHealth,setSamrHealth] = useState(10);
    const [enemyHealth,setEnemyHealth] = useState(10);
    const [enemyName, setEnemyName] = useState('enemy');
    const [samrMoves,setSamrMoves] = useState({punch:0, kick: 0,block:0,duck:0});
    const [enemyMoves,setEnemyMoves] = useState({punch:0, kick: 0,block:0,duck:0});
    const [numberOfMovesTurns,setNumberOfMovesPerTurn] = useState(1);
    const [childrenWithProps,setChildrenWithProps] = useState(children);
    const [gameIsOver,setGameIsOver] = useState(false);
    const [winner,setWinner] = useState('');

    const attack = (samrMoves, enemyMoves) => {
        if (gameIsOver) {
            return;
        }
        if (samrHealth <= 0 || enemyHealth <= 0 ) {
            samrHealth <= 0 && setSamrHealth(0);
            enemyHealth <= 0 && setEnemyHealth(0);
            setWinner(samrHealth <= 0 ? 'samr' : enemyName);
            setGameIsOver(true);
            return;
        }
        if (samrMoves.length > numberOfMovesTurns || enemyMoves.length > numberOfMovesTurns) {
            console.error('Too Many Moves');
            return;
        }
        samrMoves.forEach((move, index) => {
            const enemyMove = enemyMoves[index];
            switch (move) {
                case 'punch': {
                    switch (enemyMove){
                        case 'punch': {
                            setEnemyMoves({...enemyMoves,punch:enemyMoves.punch - 1});
                            break;
                        }
                        case 'kick': {
                            setSamrHealth(samrHealth - 2);
                            setEnemyMoves({...enemyMoves,kick:enemyMoves.kick - 1});
                            break;
                        }
                        case 'block': {
                            setSamrHealth(samrHealth - 2);
                            setEnemyMoves({...enemyMoves,block:enemyMoves.block - 1});
                            break;
                        }
                        case 'duck': {
                            setSamrHealth(samrHealth - 1);
                            setEnemyMoves({...enemyMoves,duck:enemyMoves.duck - 1});
                            break;
                        }
                        default:
                            break;
                    }
                    setSamrMoves({...samrMoves,punch:enemyMoves.punch - 1});
                    break;
                }
                case 'kick': {
                    switch (enemyMove){
                        case 'punch': {
                            setEnemyHealth(enemyHealth - 2);
                            setEnemyMoves({...enemyMoves,punch:enemyMoves.punch - 1});
                            break;
                        }
                        case 'kick': {
                            setEnemyMoves({...enemyMoves,kick:enemyMoves.kick - 1});
                            break;
                        }
                        case 'block': {
                            setEnemyHealth(enemyHealth - 1);
                            setEnemyMoves({...enemyMoves,block:enemyMoves.block - 1});
                            break;
                        }
                        case 'duck': {
                            setEnemyHealth(enemyHealth - 2);
                            setEnemyMoves({...enemyMoves,duck:enemyMoves.duck - 1});
                            break;
                        }
                        default:
                            break;
                    }
                    setEnemyHealth(enemyHealth - 2);
                    setSamrMoves({...samrMoves,kick:samrMoves.kick - 1});
                    break;
                }
                case 'duck': {
                    switch (enemyMove){
                        case 'punch': {
                            setSamrHealth(samrHealth - 1);
                            setEnemyMoves({...enemyMoves,punch:enemyMoves.punch - 1});
                            break;
                        }
                        case 'kick': {
                            setSamrHealth(samrHealth - 2);
                            setEnemyMoves({...enemyMoves,kick:enemyMoves.kick - 1});
                            break;
                        }
                        case 'block': {
                            setEnemyMoves({...enemyMoves,block:enemyMoves.block - 1});
                            break;
                        }
                        case 'duck': {
                            setEnemyMoves({...enemyMoves,duck:enemyMoves.duck - 1});
                            break;
                        }
                        default:
                            break;
                    }
                    setSamrMoves({...samrMoves,duck:samrMoves.duck - 1});
                    break;
                }
                case 'block': {
                    switch (enemyMove){
                        case 'punch': {
                            setSamrHealth(samrHealth - 2);
                            setEnemyMoves({...enemyMoves,punch:enemyMoves.punch - 1});
                            break;
                        }
                        case 'kick': {
                            setSamrHealth(samrHealth - 1);
                            setEnemyMoves({...enemyMoves,kick:enemyMoves.kick - 1});
                            break;
                        }
                        case 'block': {
                            setEnemyMoves({...enemyMoves,block:enemyMoves.block - 1});
                            break;
                        }
                        case 'duck': {
                            setEnemyMoves({...enemyMoves,duck:enemyMoves.duck - 1});
                            break;
                        }
                        default:
                            break;
                    }
                    setSamrMoves({...samrMoves,block:samrMoves.block - 1});
                    break;
                }
                default:
                    break;
            }
        })
    }

    useEffect(() => {
        if (['easy','med','hard','very hard','extreme'].includes(difficulty) !== true){
            console.error('The Difficulty Options Are:',['easy','med','hard','very hard','extreme'])
            return;
        }
        switch (difficulty) {
            case 'easy': {
                setEnemyHealth(5);
                setSamrHealth(10);
                setNumberOfMovesPerTurn(1);
                setSamrMoves({punch:100, kick: 100,block:100,duck:100});
                setEnemyMoves({punch:100, kick: 100,block:100,duck:100});
                break;
            }
            case 'med': {
                setEnemyHealth(7);
                setSamrHealth(10);
                setNumberOfMovesPerTurn(2);
                setSamrMoves({punch:100, kick: 100,block:100,duck:100});
                setEnemyMoves({punch:100, kick: 100,block:100,duck:100});
                break;
            }
            case 'hard': {
                setEnemyHealth(9);
                setSamrHealth(10);
                setNumberOfMovesPerTurn(3);
                setSamrMoves({punch:100, kick: 100,block:100,duck:100});
                setEnemyMoves({punch:100, kick: 100,block:100,duck:100});
                break;
            }
            case 'very hard': {
                setEnemyHealth(11);
                setSamrHealth(10);
                setNumberOfMovesPerTurn(4);
                setSamrMoves({punch:100, kick: 100,block:100,duck:100});
                setEnemyMoves({punch:100, kick: 100,block:100,duck:100});
                break;
            }
            case 'extreme': {
                setEnemyHealth(15);
                setSamrHealth(10);
                setNumberOfMovesPerTurn(5);
                setSamrMoves({punch:100, kick: 100,block:100,duck:100});
                setEnemyMoves({punch:100, kick: 100,block:100,duck:100});
                break;
            }
            default:
                break;
        }
    },[difficulty])

    useEffect(() => {
        const newChildrenWithProps = Children.map(children, child => {
            if (isValidElement(child)) {
                return cloneElement(child, {gameController:
                {
                    attack,
                    samrHealth,
                    enemyHealth,
                    numberOfMovesTurns,
                    setDifficulty,
                    difficulty,
                    winner,
                    gameIsOver,
                    enemyName,
                    setEnemyName,
                    enemyMoves,
                    samrMoves
                }
            });
            }
            return child;
        });
        setChildrenWithProps(newChildrenWithProps);
    },[samrHealth,enemyHealth,enemyMoves,samrMoves,gameIsOver,winner,difficulty,enemyName,numberOfMovesTurns])

    return (
        <div>{childrenWithProps}</div>
    )


}
export default GameWrapper;
