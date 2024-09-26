import React, { useState, useEffect } from 'react';
import './DungeonCrawler.css';
const tileSize = 50;
const Player = ({ playerState }) => {
    return (
        <div id="player" style={{ 
            transform: playerState.transform,
            color: playerState.color,
            left: (playerState.position.x * tileSize + tileSize / 2) + 'px',
            top: (playerState.position.y * tileSize + tileSize / 2) + 'px',
        }}></div>
    );
}

// const Projectile = (game, x, y, speed, direction) => {
//     this.game = game;
//     this.position = { x: x, y: y };
//     this.speed = speed;
//     this.direction = direction;
//     this.element = document.createElement('div');
//     this.element.classList.add('projectile');
//     this.element.style.left = ((this.position.x + 0.5) * this.game.map.tileSize) + 'px';
//     this.element.style.top = ((this.position.y + 0.5) * this.game.map.tileSize) + 'px';

//     const remove = () => {
//         this.element.remove();
//         const index = this.game.map.projectiles.indexOf(this);
//         if (index !== -1) {
//             this.game.map.projectiles.splice(index, 1);
//         }
//     }

//     const move = () => {
//         let moveAmount = this.speed / this.game.map.tileSize;
//         switch (this.direction) {
//             case 'left':
//                 this.position.x -= moveAmount;
//                 break;
//             case 'right':
//                 this.position.x += moveAmount;
//                 break;
//             case 'up':
//                 this.position.y -= moveAmount;
//                 break;
//             case 'down':
//                 this.position.y += moveAmount;
//                 break;
//         }
//         if (this.position.x < -0.4 || this.position.x > this.game.map.mapSize.width - 0.6 || this.position.y < -0.4 || this.position.y > this.game.map.mapSize.height - 0.6) {
//             this.remove();
//         } else {
//             this.element.style.left = ((this.position.x + 0.5) * this.game.map.tileSize) + 'px';
//             this.element.style.top = ((this.position.y + 0.5) * this.game.map.tileSize) + 'px';
//             let tile = this.game.map.mapArray[Math.round(this.position.y)][Math.round(this.position.x)];
//             for (let child of tile.element.children) {
//                 if (child.classList.contains('tree')) {
//                     child.remove();
//                     if (Math.random() < 0.2) {
//                         new Coin(this.game, tile.position.x, tile.position.y);
//                     }
//                     this.remove();
//                 } else if (child.classList.contains('rock')) {
//                     this.remove();
//                 }
//             }
//             for (let enemy of this.game.map.enemies) {
//                 if (Math.abs(this.position.x - enemy.position.x) < 0.5 && Math.abs(this.position.y - enemy.position.y) < 0.5) {
//                     enemy.remove();
//                     this.remove();
//                 }
//             }
//         }
        
//     }
// }

// const Enemy = (x, y, speed, tileSize) => {
//     this.game = game;
//     this.position = { x: x, y: y };
//     this.speed = speed;
//     this.attack = 1;
//     this.expValue = 1;
//     this.element = document.createElement('div');
//     this.element.className = 'enemy';

//     const remove = () => {
//         this.element.remove();
//         this.game.player.gainExp(this.expValue);
//         new Coin(this.game, this.position.x, this.position.y);
//         const index = this.game.map.enemies.indexOf(this);
//         if (index !== -1) {
//             this.game.map.enemies.splice(index, 1);
//         }
//     }

//     const move = () => {
//         if (this.game.player.invincibility > 0) {
//             return;
//         }
//         if (Math.abs(this.game.player.position.x - this.position.x) < 0.5 && Math.abs(this.game.player.position.y - this.position.y) < 0.5) {
//             this.game.player.takeDamage(this.attack);
//             return;
//         }
//         const directionX = this.game.player.position.x - this.position.x;
//         const directionY = this.game.player.position.y - this.position.y;
//         // Normalize the direction
//         const length = Math.sqrt(directionX * directionX + directionY * directionY);
//         directionX /= length;
//         directionY /= length;
//         const moveAmount = this.speed / this.game.map.tileSize;
//         // Move the enemy moveAmount distance towards the player
//         const nextX = this.position.x + directionX * moveAmount;
//         const nextY = this.position.y + directionY * moveAmount;

//         let canMove = true;
//         if (nextX < -0.3 || nextX > this.game.map.mapSize.width - 0.7 || nextY < -0.3 || nextY >= this.game.map.mapSize.height - 0.7) {
//             canMove = false;
//         } else {
//             for (let child of this.game.map.mapArray[Math.round(nextY)][Math.round(nextX)].element.children) {
//                 if (child.classList.contains('rock')) {
//                     canMove = false;
//                     break;
//                 }
//             }
//             if (!canMove) {
//                 canMove = true;
//                 nextX = this.position.x;
//                 nextY = this.position.y + directionY * moveAmount;
//                 for (let child of this.game.map.mapArray[Math.round(nextY)][Math.round(nextX)].element.children) {
//                     if (child.classList.contains('rock')) {
//                         canMove = false;
//                         break;
//                     }
//                 }
//             }
//             if (!canMove) {
//                 canMove = true;
//                 nextX = this.position.x + directionX * moveAmount;
//                 nextY = this.position.y;
//                 for (let child of this.game.map.mapArray[Math.round(nextY)][Math.round(nextX)].element.children) {
//                     if (child.classList.contains('rock')) {
//                         canMove = false;
//                         break;
//                     }
//                 }
//             }
//             for (let enemy of this.game.map.enemies) {
//                 if (enemy !== this && Math.abs(nextX - enemy.position.x) < 0.5 && Math.abs(nextY - enemy.position.y) < 0.5) {
//                     canMove = false;
//                     break;
//                 }
//             }
//         }
//         if (canMove) {
//             this.position.x = nextX;
//             this.position.y = nextY;
//             this.element.style.left = ((this.position.x + 0.5) * this.game.map.tileSize) + 'px';
//             this.element.style.top = ((this.position.y + 0.5) * this.game.map.tileSize) + 'px';
//         }
//     }

//     return (
//         <div className="enemy" style={{ left: (x * tileSize + tileSize / 2) + 'px', top: (y * tileSize + tileSize / 2) + 'px' }}></div>
//     );
// }

class Map {
    constructor(mapData) {
        this.mapData = mapData;
        this.collectibles = [];
        this.enemies = [];
        this.projectiles = [];
        this.mapSize = { width: mapData[0].length, height: mapData.length };
        // for (let y = 0; y < this.mapSize.height; y++) {
        //     for (let x = 0; x < this.mapSize.width; x++) {
        //         if (this.mapData[y][x] === 3) {
        //             this.enemies.push(new Enemy(x, y, 5));
        //         }
        //     }
        // }
    }
}

const MapComponent = ({ mapState }) => {
    // const initialMapState = {
    //     mapData: mapData,
    //     collectibles: [],
    //     enemies: [],
    //     projectiles: [],
    //     mapArray: [],
    //     mapSize: { width: mapData[0].length, height: mapData.length },
    //     tileSize: Math.floor(this.game.hudSize * 16 / this.mapSize.width),
    // };

    // initialMapState.mapArray = new Array(initialMapState.mapSize.height).fill(0).map(() => new Array(initialMapState.mapSize.width).fill(0));
    // for (let y = 0; y < initialMapState.mapSize.height; y++) {
    //     for (let x = 0; x < initialMapState.mapSize.width; x++) {
    //         initialMapState.mapArray[y][x] = new Tile(this.game, x, y, mapData[y][x], this);
    //         if (initialMapState.mapData[y][x] === 3) {
    //             initialMapState.enemies.push(new Enemy(this.game, x, y, 5));
    //         }
    //     }
    // }
    // for (let enemy of initialMapState.enemies) {
    //     this.element.appendChild(enemy.element);
    //     enemy.element.style.left = (enemy.position.x * this.tileSize + this.tileSize / 2) + 'px';
    //     enemy.element.style.top = (enemy.position.y * this.tileSize + this.tileSize / 2) + 'px';
    // }

    return (
        <div id="map">
            {mapState.mapData.map((row, y) => (
                row.map((tile, x) => (
                    <div key={[x,y]} className="tile" style={{ left: x * tileSize + 'px', top: y * tileSize + 'px' }}>
                        {tile === 1 ? <div className="tree"></div> : tile === 2 ? <div className="rock"></div> : tile === 3 ? <div className="enemy"></div> : tile === 4 ? <div className="exit"></div> : null}
                    </div>
                ))
            ))}
        </div>
    )
}

const HUD = ({ gameState, playerState }) => {
        // MINIMAP
        // Create a new tile for each map in the world map
        // for (let y = 0; y < this.worldMapSize.height; y++) {
        //     for (let x = 0; x < this.worldMapSize.width; x++) {
        //         let miniTile = document.createElement('div');
        //         miniTile.style.left = (x * this.hudSize - 1) + 'px';
        //         miniTile.style.top = (y * this.hudSize - 1) + 'px';
        //         miniTile.classList.add('miniTile');
        //         if (x === this.worldPosition.x && y === this.worldPosition.y) {
        //             miniTile.classList.add('playerIcon');
        //         }
        //         else if (this.worldMap[y][x] !== 0) {
        //             miniTile.classList.add('mapIcon');
        //         }
        //         this.minimap.appendChild(miniTile);
        //     }
        // }
    return (
        <div id="HUD">
            <div id="healthBar">
                {Array.from({ length: playerState.health }, (_, i) => (
                    <div key={i} className="square"></div>
                ))}
            </div>
            <div id="energyBar">
                {Array.from({ length: playerState.energy }, (_, i) => (
                    <div key={i} className="square"></div>
                ))}
            </div>
            <div id="coinBar">
                {Array.from({ length: playerState.coins }, (_, i) => (
                    <div key={i} className="square"></div>
                ))}
            </div>
            <div id="experienceBarOutline">
                <div id="experienceBar" style={{ width: (playerState.exp / playerState.maxExp * tileSize) + 'px' }}></div>
            </div>
            <div id="minimap">
                {Array.from({ length: gameState.worldMapSize.height }, (_, y) => {
                    Array.from({ length: gameState.worldMapSize.width }, (_, x) => {
                        <div key={[x, y]} className={`miniTile ${x === gameState.worldPosition.x && y === gameState.worldPosition.y ? 'playerIcon' : gameState.worldMap[y][x] !== 0 ? 'mapIcon' : ''}`} style={{ left: (x * gameState.hudSize - 1) + 'px', top: (y * gameState.hudSize - 1) + 'px' }}></div>
                    })
                })}
            </div>
        </div>
    )
}

// const Collectible = (game, x, y) => {
//     this.game = game;
//     this.position = { x: x, y: y };
//     this.game.map.collectibles.push(this);
//     this.element = document.createElement('div');
//     this.element.classList.add('collectible');
//     this.game.map.element.appendChild(this.element);
//     this.element.style.left = ((this.position.x + 0.5) * this.game.map.tileSize) + 'px';
//     this.element.style.top = ((this.position.y + 0.5) * this.game.map.tileSize) + 'px';

//     const remove = () => {
//         this.element.remove();
//         const index = this.game.map.collectibles.indexOf(this);
//         if (index !== -1) {
//             this.game.map.collectibles.splice(index, 1);
//         }
//     }
// }

// const Coin = (game, x, y) => {
//     super(game, x, y);
//     this.element.classList.add('coin');
// }

// Main game logic
const Game = () => {
    const initialGameState = (ticksPerSecond) => {
        const gameStatePrototype = {
            active: true,
            worldMap: null,
            worldMapSize: null,
            worldPosition: null,
            hudSize: null,
            worldLevel: 1,
            worldFinished: false,
            totalEnemies: 0,
            ticksPerSecond: ticksPerSecond,
            tickLength: null,
            keys: {
                left: false,
                right: false,
                up: false,
                down: false,
                fire: false,
            },
        };
        gameStatePrototype.worldMapSize = { width: gameStatePrototype.worldLevel, height: gameStatePrototype.worldLevel };
        gameStatePrototype.worldPosition = { x: 0, y: 0 };
        gameStatePrototype.worldMap = generateWorldMap(gameStatePrototype.worldMapSize.height, gameStatePrototype.worldMapSize.width, gameStatePrototype.worldLevel);
        gameStatePrototype.tickLength = 1000 / initialGameState.ticksPerSecond;
        gameStatePrototype.hudSize = 40;//Math.min(Math.floor(document.documentElement.clientHeight / 20), Math.floor(document.documentElement.clientWidth / 20));
        return gameStatePrototype;
    };

    const initialPlayerState = (health, energy, speed) => {
        return {
            maxHealth: health,
            health: health,
            maxEnergy: energy,
            energy: energy,
            speed: speed,
            position: { x: 0, y: 0 },
            coins: 1,
            maxInvincibility: 20,
            invincibility: 20,
            energyRegen: 1,
            level: 1,
            maxExp: 3,
            exp: 0,
            direction: 'down',
            transform: 'translate(-50%, -50%) rotate(0deg)',
            color: "#185bb3",
        }
    };

    const playerTakeDamage = (damage) => {
        if (playerState.invincibility > 0) {
            return;
        }
        const newPlayerState = {
            ...playerState,
            invincibility: playerState.maxInvincibility,
            health: Math.max(playerState.health - damage, 0),
        }
        if (newPlayerState.health === 0) {
            setTimeout(() => {
                alert('Game over!');
                cashOut();
            }, 100);
        }
        setTimeout(() => {
            newPlayerState.color = "#185bb3";
        }, 100);
        setPlayerState(newPlayerState);
    }

    const playerUpdateDirection = () => {
        const newPlayerState = {
            ...playerState,
        }
        switch (newPlayerState.direction) {
            case 'up':
                newPlayerState.transform = 'translate(-50%, -50%) rotate(180deg)';
                break;
            case 'right':
                newPlayerState.transform = 'translate(-50%, -50%) rotate(270deg)';
                break;
            case 'down':
                newPlayerState.transform = 'translate(-50%, -50%) rotate(0deg)';
                break;
            case 'left':
                newPlayerState.transform = 'translate(-50%, -50%) rotate(90deg) ';
                break;
            default:
                newPlayerState.transform = 'translate(-50%, -50%) rotate(0deg)';
                break;
        }
        setPlayerState(newPlayerState);
    }

    const playerMove = (direction) => {
        let nextX = playerState.position.x;
        let nextY = playerState.position.y;
    
        const moveAmount = playerState.speed / tileSize;
        
        switch (direction) {
            case 'left':
                nextX -= moveAmount;
                break;
            case 'right':
                nextX += moveAmount;
                break;
            case 'up':
                nextY -= moveAmount;
                break;
            case 'down':
                nextY += moveAmount;
                break;
            default:
                break;
        }
    
        const newPlayerState = {
            ...playerState,
        }
        const newGameState = {
            ...gameState,
        }
        if (nextX < -0.3 && gameState.worldPosition.x > 0 && gameState.worldMap[gameState.worldPosition.y][gameState.worldPosition.x - 1] !== 0 && nextY < gameState.worldMap[gameState.worldPosition.y][gameState.worldPosition.x - 1].mapSize.height
            && gameState.worldMap[gameState.worldPosition.y][gameState.worldPosition.x - 1].mapData[Math.round(playerState.position.y)][gameState.worldMap[gameState.worldPosition.y][gameState.worldPosition.x - 1].mapSize.width - 1] !== 1) {
                newGameState.worldPosition.x--;
                setGameState(newGameState);
                setMapState(newGameState.worldMap[newGameState.worldPosition.y][newGameState.worldPosition.x]);
                newPlayerState.position.x = mapState.mapSize.width - 0.7;
        }
        else if (nextX > mapState.mapSize.width - 0.7 && gameState.worldPosition.x < gameState.worldMapSize.width - 1 && gameState.worldMap[gameState.worldPosition.y][gameState.worldPosition.x + 1] !== 0 && nextY < gameState.worldMap[gameState.worldPosition.y][gameState.worldPosition.x + 1].mapSize.height) {
            newGameState.worldPosition.x++;
            setGameState(newGameState);
            setMapState(newGameState.worldMap[newGameState.worldPosition.y][newGameState.worldPosition.x]);
            newPlayerState.position.x = -0.3;
        }
        else if (nextY < -0.3 && gameState.worldPosition.y > 0 && gameState.worldMap[gameState.worldPosition.y - 1][gameState.worldPosition.x] !== 0 && nextX < gameState.worldMap[gameState.worldPosition.y - 1][gameState.worldPosition.x].mapSize.width) {
            newGameState.worldPosition.y--;
            setGameState(newGameState);
            setMapState(newGameState.worldMap[newGameState.worldPosition.y][newGameState.worldPosition.x]);
            newPlayerState.position.y = mapState.mapSize.height - 0.7;
        }
        else if (nextY > mapState.mapSize.height - 0.7 && gameState.worldPosition.y < gameState.worldMapSize.height - 1 && gameState.worldMap[gameState.worldPosition.y + 1][gameState.worldPosition.x] !== 0 && nextX < gameState.worldMap[gameState.worldPosition.y + 1][gameState.worldPosition.x].mapSize.width) {
            newGameState.worldPosition.y++;
            setGameState(newGameState);
            setMapState(newGameState.worldMap[newGameState.worldPosition.y][newGameState.worldPosition.x]);
            newPlayerState.position.y = -0.3;
        }
        if (nextX < -0.3) {
            nextX = -0.3;
        }
        if (nextX > mapState.mapSize.width - 0.7) {
            nextX = mapState.mapSize.width - 0.7;
        }
        if (nextY < -0.3) {
            nextY = -0.3;
        }
        if (nextY > mapState.mapSize.height - 0.7) {
            nextY = mapState.mapSize.height - 0.7;
        }
        if (mapState.mapData[Math.round(nextY)][Math.round(nextX)] === 4) {
            finishWorld();
        }
        else if (mapState.mapData[Math.round(nextY)][Math.round(nextX)] !== 1) {
            newPlayerState.position.x = nextX;
            newPlayerState.position.y = nextY;
        }
        setPlayerState(newPlayerState);
    }

    const playerFireProjectile = () => {
        if (playerState.energy <= 0) {
            return;
        }
        const newPlayerState = {
            ...playerState,
            energy: playerState.energy - 1,
        }
        const newMapState = {
            ...mapState,
        }
        // newMapState.projectiles.push(new Projectile(this.position.x, this.position.y, 20, playerState.direction));
        setPlayerState(newPlayerState);
        setMapState(newMapState);
    }

    const loadMap = (mapData) => {
        this.game.element.appendChild(this.element);
        this.element.appendChild(this.game.player.element);
        this.game.player.element.style.left = (this.game.player.position.x * this.tileSize + this.tileSize / 2) + 'px';
        this.game.player.element.style.top = (this.game.player.position.y * this.tileSize + this.tileSize / 2) + 'px';
        document.documentElement.style.setProperty('--tileSize', this.tileSize + 'px');
        document.documentElement.style.setProperty('--mapWidth', this.mapSize.width);
        document.documentElement.style.setProperty('--mapHeight', this.mapSize.height);
        this.game.player.invincibility = this.game.player.maxInvincibility;
        this.game.updateHUD();
        this.game.checkWin();
    }

    // Listen for keydown and keyup events to update the state of the keys
    const handleKeyDown = (event) => {
        console.log(event.key);
        const newGameState = {
            ...gameState,
        }
        const newPlayerState = {
            ...playerState,
        }
        switch (event.key) {
            case 'a':
                newGameState.keys.left = true;
                break;
            case 'd':
                newGameState.keys.right = true;
                break;
            case 'w':
                newGameState.keys.up = true;
                break;
            case 's':
                newGameState.keys.down = true;
                break;
            case ' ':
                newGameState.keys.fire = true;
                // newGameState.player.element.classList.add('attackReady');
                break;
            case 'ArrowLeft':
                newPlayerState.direction = 'left';
                break;
            case 'ArrowRight':
                newPlayerState.direction = 'right';
                break;
            case 'ArrowUp':
                newPlayerState.direction = 'up';
                break;
            case 'ArrowDown':
                newPlayerState.direction = 'down';
                break;
            default:
                break;
        }
        setGameState(newGameState);
        setPlayerState(newPlayerState);
    };

    const handleKeyUp = (event) => {
        const newGameState = {
            ...gameState,
        }
        const newPlayerState = {
            ...playerState,
        }
        switch (event.key) {
            case 'a':
                newGameState.keys.left = false;
                break;
            case 'd':
                newGameState.keys.right = false;
                break;
            case 'w':
                newGameState.keys.up = false;
                break;
            case 's':
                newGameState.keys.down = false;
                break;
            case ' ':
                newGameState.keys.fire = false;
                // newGameState.player.element.classList.remove('attackReady');
                break;
            default:
                break;
        }
        setGameState(newGameState);
        setPlayerState(newPlayerState);
    };

    const resetGame = () => {
        setGameState(initialGameState());
    };

    const cashOut = () => {
        // Add the player's coins to the total
        setTotalCoins(totalCoins + playerState.coins);

        // Reset the game
        resetGame();
    }
    
    const finishWorld = () => {
        const newGameState = {
            ...gameState,
            worldLevel: gameState.worldLevel + 1,
            worldFinished: false,
            exitSpawned: false,
        }
        loadNewWorld();
        setGameState(newGameState);
    }

    const checkWin = () => {
        if (gameState.totalEnemies === 1 && !gameState.worldFinished) {
            const newGameState = {
                ...gameState,
                worldFinished: true,
            }
            spawnExit();
            setGameState(newGameState);
        }
    }

    const spawnExit = () => {
        const newMapState = {
            ...mapState,
        }
        while (true) {
            const x = Math.floor(Math.random() * mapState.mapSize.width);
            const y = Math.floor(Math.random() * mapState.mapSize.height);
            if (mapState.mapData[y][x] === 0) {
                newMapState.mapData[y][x] = 4;
                break;
            }
        }
        setMapState(newMapState);
    }

    const updateGame = () => {
        const newPlayerState = {
            ...playerState,
            moveClock: playerState.moveClock + 1,
        }
        // Move the player based on the state of the keys
        if (gameState.keys.left) {
            playerMove('left');
        }
        if (gameState.keys.right) {
            playerMove('right');
        }
        if (gameState.keys.up) {
            playerMove('up');
        }
        if (gameState.keys.down) {
            playerMove('down');
        }
        playerUpdateDirection();
        if (gameState.keys.fire) {
            playerFireProjectile();
        }
        // for (let i = mapState.projectiles.length - 1; i >= 0; i--) {
        //     projectileMove(mapState.projectiles[i]);
        // }
        // for (let i = mapState.enemies.length - 1; i >= 0; i--) {
        //     enemyMove(mapState.enemies[i]);
        // }
        for (let i = mapState.collectibles.length - 1; i >= 0; i--) {
            if (Math.abs(playerState.position.x - mapState.collectibles[i].position.x) < 0.5 && Math.abs(playerState.position.y - mapState.collectibles[i].position.y) < 0.5) {
                mapState.collectibles.remove(i);
                newPlayerState.coins++;
            }
        }
        newPlayerState.invincibility--;
        newPlayerState.energy = Math.min(newPlayerState.energy + newPlayerState.energyRegen, newPlayerState.maxEnergy);
        setPlayerState(newPlayerState);
        checkWin();
    }

    const loadNewWorld = () => {
        generateNewWorld(gameState.worldLevel, gameState.worldLevel);
        setMapState(gameState.worldMap[gameState.worldPosition.y][gameState.worldPosition.x]);
        const newPlayerState = {
            ...playerState,
            energy: playerState.maxEnergy,
        }
        while (true) {
            const x = Math.floor(Math.random() * mapState.mapSize.width);
            const y = Math.floor(Math.random() * mapState.mapSize.height);
            if (mapState.mapData[y][x] === 0) {
                newPlayerState.position = { x: x, y: y };
                break;
            }
        }
        setPlayerState(newPlayerState);
    }

    const generateNewWorld = (height, width) => {
        const newGameState = {
            ...gameState,
            worldMapSize: { width: width, height: height },
            worldMap: generateWorldMap(height, width, gameState.worldLevel),
        }
        while (true) {
            const x = Math.floor(Math.random() * newGameState.worldMapSize.width);
            const y = Math.floor(Math.random() * newGameState.worldMapSize.height);
            if (newGameState.worldMap[y][x] !== 0) {
                newGameState.worldPosition = { x: x, y: y };       
                break;
            }
        }
        setGameState(newGameState);
    }

    const generateWorldMap = (height, width, size) => {
        const worldMap = new Array(height).fill(0).map(() => new Array(width).fill(0));
        let x = Math.floor(width / 2);// + 1 - Math.random() * 2 * ((width + 1) % 2));
        let y = Math.floor(height / 2);// + 1 - Math.random() * 2 * ((height + 1) % 2));
        worldMap[y][x] = new Map(generateMap(9, 13));
        for (let count = 1; count < size ** 1.3; count++) {
            while (true) {
                x = Math.floor(Math.random() * width);
                y = Math.floor(Math.random() * height);
                if (x >= 0 && x < width && y >= 0 && y < height && worldMap[y][x] === 0 && checkSurroundingRooms(worldMap, x, y, width, height) === 1) {
                    worldMap[y][x] = new Map(generateMap(9, 13));
                    break;
                }
            }
        }
        return worldMap;
    }

    const generateMap = (height, width) => {
        const map = [];
        for (let i = 0; i < height; i++) {
            const row = [];
            for (let j = 0; j < width; j++) {
                const random = Math.random();
                if (random < 0.7) row.push(0);
                else if (random < 0.84) row.push(1);
                else if (random < 0.98) row.push(2);
                else row.push(3);
            }
            map.push(row);
        }
        return map;
    }

    const checkSurroundingRooms = (worldMap, x, y, width, height) => {
        let count = 0;
        if (x > 0 && worldMap[y][x - 1] !== 0) count++;
        if (x < width - 1 && worldMap[y][x + 1] !== 0) count++;
        if (y > 0 && worldMap[y - 1][x] !== 0) count++;
        if (y < height - 1 && worldMap[y + 1][x] !== 0) count++;
        return count;
    }

    const focusGameWindow = () => {
        document.getElementById('gameWindow').focus();
    }

    const startGame = () => {
        gameState.active = true;
    }

    const [gameState, setGameState] = useState(initialGameState(20));
    const [playerState, setPlayerState] = useState(initialPlayerState(10, 3, 5));
    const [mapState, setMapState] = useState(gameState.worldMap[gameState.worldPosition.y][gameState.worldPosition.x]);
    const [totalCoins, setTotalCoins] = useState(0);

    useEffect(() => {
        let tickInterval;
        if (gameState.active) {
            tickInterval = setInterval(() => {
                updateGame();
            }, gameState.tickLength);
            // gameState.hudSize = Math.min(Math.floor(document.documentElement.clientHeight / 20), Math.floor(document.documentElement.clientWidth / 20));
        }
        return () => {
            clearInterval(tickInterval);
        }
    }, [gameState.active]);
    // Set up CSS variables
    document.documentElement.style.setProperty('--hudSize', gameState.hudSize + 'px');
    document.documentElement.style.setProperty('--tileSize', tileSize + 'px');
    document.documentElement.style.setProperty('--mapWidth', mapState.mapSize.width);
    document.documentElement.style.setProperty('--mapHeight', mapState.mapSize.height);
    document.documentElement.style.setProperty('--worldMapWidth', gameState.worldMapSize.width);
    document.documentElement.style.setProperty('--worldMapHeight', gameState.worldMapSize.height);

    return (
        <div>
            <div id="home">
                <h1>Dungeon Crawler</h1>
                <button id="start" onClick={startGame} >Start Game</button>
                <button id="cashout" onClick={cashOut} >Cash Out</button>
                <p id="totalCoins">Total Coins: {totalCoins}</p>
            </div>
            <div id="gameWindow" tabIndex="0" onClick={focusGameWindow} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
                <HUD gameState={gameState} playerState={playerState} />
                <MapComponent mapState={mapState} />
                <Player playerState={playerState} />
            </div>
        </div>
    )
};

export default Game;

// Home screen logic
// document.getElementById('start').addEventListener('click', function() {
//     document.getElementById('home').style.display = 'none';
//     document.getElementById('game').style.display = 'block';
//     document.getElementById('continue').style.display = 'block';
//     if (game.active) {
//         game.resetGame();
//     }
//     game = new Game();
//     document.getElementById('game').appendChild(game.element);
// });

// document.getElementById('back').addEventListener('click', function() {
//     document.getElementById('game').style.display = 'none';
//     document.getElementById('home').style.display = 'block';
// });

// document.getElementById('continue').addEventListener('click', function() {
//     document.getElementById('game').style.display = 'block';
//     document.getElementById('home').style.display = 'none';
// });

// let totalCoins = 0;

// document.getElementById('cashout').addEventListener('click', function() {
//     game.cashOut();
//     document.getElementById('game').style.display = 'none';
//     document.getElementById('home').style.display = 'block';
//     document.getElementById('continue').style.display = 'none';
// });

