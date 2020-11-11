import React, { Component } from 'react'
import PokemonDetails from '../PokemonDetails';

export class PokemonList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading:false,
            list: null,
            modalShow:false
        }
    }
    render() {
        const pokeListUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=5"
        const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
        fetch(pokeListUrl)
            .then((res) => res.json())
            .then((response) => {
                this.setState({
                    list: response.results.map((item, index) => {
                        return (
                            <div key={`PokemonList-${index}`} className={`item column-4 ${index === 0  ? "row-2" :"row-1"}`}>
                                <div className="card card-featured">
                                    <div className="tag">
                                        <button onClick={()=>this.setState({modalShow:true})} className="streched-link d-block btn btn-link text-white">
                                            <h5>{item.name[0].toUpperCase()+item.name.slice(1)}</h5>
                                        </button>
                                    </div>
                                    
                                    <figure className="img-wrapper">
                                        <img src={imageUrl + (index + 1) + '.png'} alt={item.name} className="img-cover img-fluid"/>
                                    </figure>
                                </div>
                            
                                <PokemonDetails url={item.url} show={this.state.modalShow} onHide={() => this.setState({modalShow:false})} />
                            </div>
                        )
                    })
                })
            })

        return (
            <section className="bg-light text-dark pt-4">
                <div className="container">
                    <h2 className="mb-3 h2"><u>P</u>okemon List</h2>
                    <div className="container-grid sm">
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

