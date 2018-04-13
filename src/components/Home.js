import axios from 'axios';
import React, { Component } from 'react';
import { Card, Container, Header } from 'semantic-ui-react';

class Home extends Component {
  state = { episodes: [] }

  componentDidMount() {
    axios.get('https://api.got.show/api/episodes/')
      .then( res => {
        this.setState({ episodes: res.data })
    })
      .catch(err => {
        console.log(err.response);
  });
}

displayEpisodes = () => {
  return this.state.episodes.map( ep => {
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            Name: {ep.name}
          </Card.Header>
          <Card.Description>
            Season: {ep.season}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          Runtime: { ep.episodeLength }
        </Card.Content>
      </Card>
    )
  })
}


  render() {
    return (
      <Container>
        <Header as='h3' textAlign='center'>Episode List</Header>
        <Card.Group stackable itemsPerRow={3}>
          { this.displayEpisodes() }
        </Card.Group>
      </Container>
    );
  }
}

export default Home;
