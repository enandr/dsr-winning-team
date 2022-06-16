import React, {useEffect, useState} from 'react';
class CombatSystem {
    #moves = ['punch','kick','block','duck'];
    #samrHealth = 10;
    #enemyHealth;
    #numberOfMovePerTurn;
    #numberOfMovePerType;
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

    availableMoves() {
        return this.#moves;
    }

    getSamrHealth() {
        return this.#samrHealth;
    }

    getEnemyHealth() {
        return this.#enemyHealth;
    }

    attack(samrMove, enemyMove) {
        // Calculates damage
        switch (samrMove) {
            case 'punch': {
                switch (enemyMove){
                    case 'punch': {
                        break;
                    }
                    case 'kick': {
                        this.#samrHealth -= 2;
                        break;
                    }
                    case 'block': {
                        this.#samrHealth -= 2;
                        break;
                    }
                    case 'duck': {
                        this.#samrHealth -= 1;
                        break;
                    }
                }
                break;
            }
            case 'kick': {
                switch (enemyMove){
                    case 'punch': {
                        this.#enemyHealth -= 2;
                        break;
                    }
                    case 'kick': {
                        break;
                    }
                    case 'block': {
                        this.#enemyHealth -= 1;
                        break;
                    }
                    case 'duck': {
                        this.#enemyHealth -= 2;
                        break;
                    }
                }
                break;
            }
            case 'duck': {
                switch (enemyMove){
                    case 'punch': {
                        this.#samrHealth -= 1;
                        break;
                    }
                    case 'kick': {
                        this.#samrHealth -= 2;
                        break;
                    }
                    case 'block': {
                        break;
                    }
                    case 'duck': {
                        break;
                    }
                }
                break;
            }
            case 'block': {
                switch (enemyMove){
                    case 'punch': {
                        this.#samrHealth -= 2;
                        break;
                    }
                    case 'kick': {
                        this.#samrHealth -= 1;
                        break;
                    }
                    case 'block': {
                        break;
                    }
                    case 'duck': {
                        break;
                    }
                }
                break;
            }
        }
    }
}

export default CombatSystem;
