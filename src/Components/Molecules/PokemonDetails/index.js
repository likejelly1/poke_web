import React, { Component } from 'react'
import { Button, Media, Modal } from 'react-bootstrap'
import { catchNow } from 'Utils'

export class PokemonDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             modals: null
        }
    }
    
    render() {
        const url = this.props.url
        const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
        let modal = null
        fetch(url).then((res) => res.json()).then((response) => {
            this.setState({
                modals: modal = () => {
                    return (
                        <>
                            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        {response.name[0].toUpperCase() + response.name.slice(1)}
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Media>
                                        <img
                                            width={64}
                                            height={64}
                                            className="mr-3"
                                            src={imageUrl + response.id + ".png"}
                                            alt={response.name + ".png"}
                                        />
                                        <Media.Body>
                                            <tr>
                                                <td>Height</td>
                                                <td>:</td>
                                                <td>{response.height}</td>
                                            </tr>
                                            <tr>
                                                <td>Weight</td>
                                                <td>:</td>
                                                <td>{response.weight}</td>
                                            </tr>
                                            <tr>
                                                <td>Abilities</td>
                                                <td>:</td>
                                                <td>{
                                                    response.abilities.map((item) => {
                                                        return item.ability.name + ", "
                                                    })}</td>
                                            </tr>
                                            <tr>
                                                <td>Types</td>
                                                <td>:</td>
                                                <td>{
                                                    response.types.map((item) => {
                                                        return item.type.name + ", "
                                                    })}</td>
                                            </tr>
                                        </Media.Body>
                                    </Media>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="outline-info" onClick={catchNow}>Catch Now</Button>
                                    <Button onClick={this.props.onHide}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    )
                }
            })
                
        })
        
        return this.state.modals
    }
}

export default PokemonDetails
