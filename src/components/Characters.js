import axios from 'axios';
import React, { Component } from 'react';
import { Card, Container, Header, Image } from 'semantic-ui-react';
import img from '../images/img.png';

class Characters extends Component {
  state = { characters: [] }

  componentDidMount() {
    axios.get('https://api.got.show/api/characters/')
      .then( res => {
        this.setState({ characters: res.data })
    })
      .catch(err => {
        console.log(err.response);
  });
}

displayCharacters = () => {
  const baseURL = 'https://api.got.show/'
  return this.state.characters.map( char => {
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            {char.name}
            <hr />
            {char.house}
          </Card.Header>
          <Card.Description>
            {
              char.imageLink ?
              <Image src={baseURL + char.imageLink} />
              :
              <Image src={img}/>
            }
          </Card.Description>
        </Card.Content>
      </Card>
    )
  })
}

  render() {
    return (
      <Container>
        <Header as='h3' textAlign='center'>Characters</Header>
        <Card.Group stackable itemsPerRow={3}>
          { this.displayCharacters() }
        </Card.Group>
      </Container>
    );
  }
}

export default Characters;
