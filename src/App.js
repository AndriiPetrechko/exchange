import React, { Component } from 'react';
import './App.css';
import { Container, Button } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Currency from './components/Currency';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      USD: 'USD',
      EUR: 'EUR',
      RUR: 'RUR',
      USD_buy: '',
      USD_sale: '',
      EUR_buy: '',
      EUR_sale: '',
      RUR_buy: '',
      RUR_sale: '',
      money_info: ''
    }
  }

  async componentDidMount() {
    const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    const data = await response.json();
    console.log(data);
    this.setState({
      USD_buy: data[0].buy,
      USD_sale: data[0].sale,
      EUR_buy: data[1].buy,
      EUR_sale: data[1].sale,
      RUR_buy: data[2].buy,
      RUR_sale: data[2].sale,
    });

  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Content">
          <Container>
            <h1> Курс валют станом на {new Date().toLocaleDateString()} </h1>
            <div className="kurs_card">
              <Currency name={this.state.USD} buy={this.state.USD_buy} sale={this.state.USD_sale} />
              <Currency name={this.state.EUR} buy={this.state.EUR_buy} sale={this.state.EUR_sale} />
              <Currency name={this.state.RUR} buy={this.state.RUR_buy} sale={this.state.RUR_sale} />
            </div>
            <h1> Калькулятор обміну валют </h1>
            <div className="change_box">
              <h4> Я хочу </h4>
              <form>
                <input type="text" placeholder="100" />
                <select>
                  <option> USD </option>
                  <option> EUR </option>
                  <option> RUR </option>
                </select>
                <Button variant="dark" className="change_btn">Купити</Button>
                <Button variant="dark" className="change_btn">Продати</Button>
              </form>
              <h4> Результат </h4> 
            </div>
            <h6> Сайт працює використовуючи Rest API Приватбанк </h6>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
