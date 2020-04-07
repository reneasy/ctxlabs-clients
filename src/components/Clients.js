import React, { Component } from 'react';

import Client from './Client.js';

import './Clients.css';

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      clients: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(`/api/clients`)
      .then(response => response.json())
      .then(clients => this.setState({clients}));
  }

  handleChange(event) {
    event.preventDefault();

    const searchTerm = event.target.value;
    this.setState({ search: searchTerm });
    
    fetch(`/api/clients?search=${encodeURIComponent(searchTerm)}`)
      .then(response => response.json())
      .then(clients => this.setState({clients}));

  }

  getClients() {
    return this.state.clients.map((client, key) => {
      return (<Client key={key}
        avatar={client.avatar}
        name={client.name}
        title={client.title}
        quote={client.quote}
        nationality={client.nationality} />);
    });
  }

  getClientsLength() {
    return this.state.clients ? this.state.clients.length : 0;
  }

  render() {
    return (
      <div className="Clients">
        <div className="Clients-container">
          <header className="Clients-header">
            <form className="Clients-search">
              <label className="Clients-search__label" 
                htmlFor="name">Search Clients</label>
              <input
                id="name"
                className="Clients-search__input"
                type="text"
                placeholder="Enter search term"
                value={this.state.search}
                onChange={this.handleChange}
              />
            </form>
          </header>

          <h2 className="Clients-count">
            <span className="Clients-count-length">{this.getClientsLength()}</span>{' '}
            Client(s)
          </h2>

          <ul className="Clients-list">
            {this.getClients()}
          </ul>

          <footer className="Clients-footer">
            <p className="Clients-footer__project">ctxlabs-clients</p>
            <p className="Clients-footer__developer">Developed by Reneldy Senat</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Clients;
