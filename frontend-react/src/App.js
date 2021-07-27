import React, { Component } from "react";
import Web3 from "web3";
import "./App.css";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./config";

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const vaccineRecords = new web3.eth.Contract(
      CONTRACT_ABI,
      CONTRACT_ADDRESS
    );
    this.setState({ vaccineRecords });
    const alexInfo = await vaccineRecords.methods.retrieve("alex").call();
    // const mumInfo = await vaccineRecords.methods.store("mummy", "sinovac").call();
    console.log('alexInfo');
    console.log(alexInfo);
    this.setState({ alexInfo });
    // this.setState({ mumInfo });
    // for (var i = 1; i <= taskCount; i++) {
    //   const task = await todoList.methods.tasks(i).call()
    //   this.setState({
    //     tasks: [...this.state.tasks, task]
    //   })
    // }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      vaccineRecords: "",
      alexInfo: "",
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Hello, World!</h1>
        <p>Alex Info is: {this.state.alexInfo}</p>
      </div>
    );
  }
}
export default App;
