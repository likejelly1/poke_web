
import { Hero, PokemonList } from 'Components'
import React, { Component } from 'react'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Hero />
                <PokemonList/>
            </div>
        )
    }
}
