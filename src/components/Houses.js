import axios from 'axios';
import React, { Component } from 'react';
import { Card, Container, Header } from 'semantic-ui-react';

class Houses extends Component {
  state = { houses: [] }

  componentDidMount() {
    axios.get('https://api.got.show/api/houses')
      .then( res => {
        this.setState({ houses: res.data })
        console.log(res.data);
    })
      .catch(err => {
        console.log(err.response);
  });
}

displayHouses = () => {
  return this.state.houses.map( house => {
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            {house.name}
            <hr />
            {house.type}
          </Card.Header>
          <Card.Description>
            Info: <a>{House.link}</a>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  })
}


  render() {
    return (
      <Container>
        <Header as='h3' textAlign='center'>Houses</Header>
        <Card.Group stackable itemsPerRow={3}>
          { this.displayHouses() }
        </Card.Group>
      </Container>
    );
  }
}

export default Houses;
