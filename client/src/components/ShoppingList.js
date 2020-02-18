import React, { Component, useState } from "react";
import { container, ListGroup, ListGroupItem, Button, Container } from "reactstrap";
import { CCSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: "EGG" },
      { id: uuid(), name: "smor" },
      { id: uuid(), name: "steak" },
      { id: uuid(), name: "vion" }
    ]
  }

render () {
    const { items} = this.state
    return(
        <Container>
            <Button
            color="dark"
            style={{marginBottom: '2rem'}}
            onClick={() => {
                const name = prompt('Enter Item');
                if (name){
                    this.setState(state => ({
                        items: [...state.items,{id:uuid(), name}]

                    }))
                }
            }}>Add Item</Button>

        </Container>
    )
}

export default ShoppingList;