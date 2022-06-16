import React, {useEffect, useState} from 'react';
/*
* TO USE COMBAT SYSTEM;
* const [combat] = useState(new CombatSystem('easy'|'med'|'hard'|'very hard'|'extreme))
* to get player health:
*   combat.getSamrHealth() || combat.getEnemyHealth()
* to get player availabe moves:
*   combat.availableMoves('samr') || combat.availableMoves('enemy')
* to get moves per turn:
*   combat.getMovesPerTurn()
* to attack:
*   Possible Moves: punch | kick | block | duck
*   the arguments MUST BE A STRING ARRAY of moves. It CANNOT be of greater length than moves per turn
*   combat.attack(ArrayOfMovesForSamr,ArrayOfMovesForEnemy)
* */
class CombatSystem {
    #moves = ['punch','kick','block','duck'];
    #samrHealth = 10;
    #enemyHealth;
    #numberOfMovePerTurn;
    #samrMoves;
    #enemyMoves;

    constructor(mode) {
        switch (mode) {
            case 'easy': {
                this.#enemyHealth = 5;
                this.#numberOfMovePerTurn = 1;
                this.#samrMoves = {punch:100, kick: 100,block:100,duck:100};
                this.#enemyMoves = {punch:100, kick: 100,block:100,duck:100};
                break;
            }
            case 'med': {
                this.#enemyHealth = 7;
                this.#numberOfMovePerTurn = 2;
                this.#samrMoves = {punch:100, kick: 100,block:100,duck:100};
                this.#enemyMoves = {punch:100, kick: 100,block:100,duck:100};
                break;
            }
            case 'hard': {
                this.#enemyHealth = 9;
                this.#numberOfMovePerTurn = 3;
                this.#samrMoves = {punch:100, kick: 100,block:100,duck:100};
                this.#enemyMoves = {punch:100, kick: 100,block:100,duck:100};
                break;
            }
            case 'very hard': {
                this.#enemyHealth = 11;
                this.#numberOfMovePerTurn = 4;
                this.#samrMoves = {punch:100, kick: 100,block:100,duck:100};
                this.#enemyMoves = {punch:100, kick: 100,block:100,duck:100};
                break;
            }
            case 'extreme': {
                this.#enemyHealth = 15;
                this.#numberOfMovePerTurn = 5;
                this.#samrMoves = {punch:100, kick: 100,block:100,duck:100};
                this.#enemyMoves = {punch:100, kick: 100,block:100,duck:100};
                break;
            }
        }
        this.availableMoves = this.availableMoves.bind(this);
    }

    availableMoves(who) {
        if (who === 'samr') {
            return this.#samrMoves;
        } else {
            return this.#enemyMoves;
        }
    }

    getSamrHealth() {
        return this.#samrHealth;
    }

    getEnemyHealth() {
        return this.#enemyHealth;
    }

    getMovesPerTurn() {
        return this.#numberOfMovePerTurn;
    }

    attack(samrMoves, enemyMoves) {
        // Calculates damage
        console.log('samrMoves.length',samrMoves.length,this.#numberOfMovePerTurn)
        if (samrMoves.length > this.#numberOfMovePerTurn || enemyMoves.length > this.#numberOfMovePerTurn) {
            console.error('Too Many Moves');
            return;
        }
        samrMoves.forEach((move, index) => {
            const enemyMove = enemyMoves[index];
            switch (move) {
                case 'punch': {
                    switch (enemyMove){
                        case 'punch': {
                            this.#enemyMoves.punch -=1;
                            break;
                        }
                        case 'kick': {
                            this.#samrHealth -= 2;
                            this.#enemyMoves.kick -=1;
                            break;
                        }
                        case 'block': {
                            this.#samrHealth -= 2;
                            this.#enemyMoves.block -=1;
                            break;
                        }
                        case 'duck': {
                            this.#samrHealth -= 1;
                            this.#enemyMoves.duck -=1;
                            break;
                        }
                    }
                    this.#samrMoves.punch -=1;
                    break;
                }
                case 'kick': {
                    switch (enemyMove){
                        case 'punch': {
                            this.#enemyHealth -= 2;
                            this.#enemyMoves.punch -=1;
                            break;
                        }
                        case 'kick': {
                            this.#enemyMoves.kick -=1;
                            break;
                        }
                        case 'block': {
                            this.#enemyHealth -= 1;
                            this.#enemyMoves.block -=1;
                            break;
                        }
                        case 'duck': {
                            this.#enemyHealth -= 2;
                            this.#enemyMoves.duck -=1;
                            break;
                        }
                    }
                    this.#samrMoves.kick -=1;
                    break;
                }
                case 'duck': {
                    switch (enemyMove){
                        case 'punch': {
                            this.#samrHealth -= 1;
                            this.#enemyMoves.punch -=1;
                            break;
                        }
                        case 'kick': {
                            this.#samrHealth -= 2;
                            this.#enemyMoves.kick -=1;
                            break;
                        }
                        case 'block': {
                            this.#enemyMoves.block -=1;
                            break;
                        }
                        case 'duck': {
                            this.#enemyMoves.duck -=1;
                            break;
                        }
                    }
                    this.#samrMoves.duck -=1;
                    break;
                }
                case 'block': {
                    switch (enemyMove){
                        case 'punch': {
                            this.#samrHealth -= 2;
                            this.#enemyMoves.punch -=1;
                            break;
                        }
                        case 'kick': {
                            this.#samrHealth -= 1;
                            this.#enemyMoves.kick -=1;
                            break;
                        }
                        case 'block': {
                            this.#enemyMoves.block -=1;
                            break;
                        }
                        case 'duck': {
                            this.#enemyMoves.duck -=1;
                            break;
                        }
                            this.#samrMoves.block -=1;
                    }
                    break;
                }
            }
        })

    }
}

export default CombatSystem;
