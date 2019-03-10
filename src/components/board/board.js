import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';
// import HighScore from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Book of Souls',
        img: 'img/images/bookofsouls.png',
        clicked: false
    },
    {
        name: 'Eddie Clansman',
        img: 'img/images/clansman.png',
        clicked: false
    },
    {
        name: 'Eddie Anger',
        img: 'img/images/Eddie1.png',
        clicked: false
    },
    {
        name: 'Fear of the Dark',
        img: 'img/images/fearofthedark.png',
        clicked: false
    },
    {
        name: 'Killers',
        img: 'img/images/killers.png',
        clicked: false
    },
    {
        name: 'Killers 2',
        img: 'img/images/killers2.png',
        clicked: false
    
    }, 
    {
        name: 'Can I Play with Madness',
        img: 'img/images/madness.png',
        clicked: false
    },
    {
        name: 'Little Devil',
        img: 'img/images/maidendevil.png',
        clicked: false
    },
    {  
        name: 'Piece of Mind',
        img: 'img/images/pieceofmind.png',
        clicked: false
    },
    {
        name: 'Somewhere in Time',
        img: 'img/images/somewhereintime.png',
        clicked: false
    },
    {
        name: 'The Trooper',
        img: 'img/images/trooper.png',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <p>"Get your Jam on" Test your memory with this Eddie Clicky Game!<br/> Simply click on an Eddie image to recieve a point. But beware, clicking the same Eddie twice resets the game. Rock on! Enjoy :)</p>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}