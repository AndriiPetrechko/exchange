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
      USD_buy_rate: '',
      USD_sale_rate: '',
      EUR_buy_rate: '',
      EUR_sale_rate: '',
      RUR_buy_rate: '',
      RUR_sale_rate: '',
      money_info: '',
      input: '',
      res_UAH: '',
      select_value: 'USD',
    };
    this.handleChange = this.handleChange.bind(this);
    this.change_buy = this.change_buy.bind(this);
    this.change_sale = this.change_sale.bind(this);
    this.getInitialstate = this.getInitialstate.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    const data = await response.json();
    console.log(data);
    this.setState({
      USD_buy_rate: data[0].buy,
      USD_sale_rate: data[0].sale,
      EUR_buy_rate: data[1].buy,
      EUR_sale_rate: data[1].sale,
      RUR_buy_rate: data[2].buy,
      RUR_sale_rate: data[2].sale,
    });
  }

  handleChange(event){
    event.preventDefault();
    this.setState({
      input: event.target.value
    });
  }

  change_buy(event){
    event.preventDefault();
    if (this.state.select_value === "USD") {
      this.setState({
        res_UAH: this.state.input * this.state.USD_sale_rate,
      });
    } else if (this.state.select_value === "EUR") {
      this.setState({
        res_UAH: this.state.input * this.state.EUR_sale_rate
      });
    } else if (this.state.select_value === "RUR") {
      this.setState({
        res_UAH: this.state.input * this.state.RUR_sale_rate
      });
    } else {
      this.setState({
        res_UAH: this.state.input,
      });
    }
  }

  change_sale(event){
    event.preventDefault();
    if (this.state.select_value === "USD") {
      this.setState({
        res_UAH: this.state.input * this.state.USD_buy_rate,
      });
    } else if (this.state.select_value === "EUR") {
      this.setState({
        res_UAH: this.state.input * this.state.EUR_buy_rate,
      });
    } else if (this.state.select_value === "RUR") {
      this.setState({
        res_UAH: this.state.input * this.state.RUR_buy_rate
      });
    } 
  }

  getInitialstate = (event) => {
    this.setState({
      select_value: event.target.value
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
              <Currency name={this.state.USD} buy={this.state.USD_buy_rate} sale={this.state.USD_sale_rate} />
              <Currency name={this.state.EUR} buy={this.state.EUR_buy_rate} sale={this.state.EUR_sale_rate} />
              <Currency name={this.state.RUR} buy={this.state.RUR_buy_rate} sale={this.state.RUR_sale_rate} />
            </div>
            <h1> Калькулятор обміну валют </h1>
            <div className="change_box">
              <h4> Я хочу </h4>
              <form>
                <input type="text" placeholder="100" onChange={this.handleChange} />
                <select onChange={this.getInitialstate} value={this.state.select_value}>
                  <option value="USD"> USD </option>
                  <option value="EUR"> EUR </option>
                  <option value="RUR"> RUR </option>
                </select>
                <Button variant="dark" onClick={this.change_buy} className="change_btn">Купити</Button>
                <Button variant="dark" onClick={this.change_sale} className="change_btn">Продати</Button>
              </form>
              <h4> Результат </h4>
              <h5> UAH {this.state.res_UAH} </h5>

            </div>
            <h6> Сайт працює використовуючи Rest API Приватбанк </h6>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
