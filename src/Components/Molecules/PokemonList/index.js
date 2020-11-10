import React, { Component } from 'react'
import { imageUrl } from 'Utils'

export class PokemonList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading:false,
            list: null
        }
    }
    render() {
        const pokeListUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=5"
        fetch(pokeListUrl)
            .then((res) => res.json())
            .then((response) => {
                this.setState({
                    list: response.results.map((item, index) => {
                        return (<div>
                            
                            {imageUrl(item.url)} <br/>
                        </div>
                            )
                    })
                })
            })

        return (
            <section className="bg-light text-dark pt-4">
                <div className="container">
                    <h4 className="mb-3"><u>P</u>okemon List</h4>
                    <div className="container-grid">
                        {
                                this.state.list
                        }
                    </div>

                </div>
            </section>
        )
    }
}

export default PokemonList

