import React, { Component } from 'react'

import Layout from "../components/layout"
import styles from "./app.module.css"

const N0 = ['A09', 'B08', 'C07', 'D06', 'A05', 'B04', 'C03', 'D02', 'A01', 'B09', 'C08'];
const N1 = ['B08', 'C07', 'D06', 'A05', 'B04', 'C03', 'D02', 'A01', 'B09', 'C08', 'D07'];

class knit extends Component {
  constructor(props) {
    super(props);   
    this.state = {count: 0, btn: false};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      4000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if(this.state.btn){
      this.setState((state, props) => ({
          count: state.count + 1
      }));
    }
  }

  handleClick() {
    this.setState(state => ({
      btn: !state.btn
    }));
  }

  render() {
    const index = this.state.count % 10
    return (
      <Layout>
        <div className={styles.container}>
          <p className={styles.step}>Step {this.state.count}.</p>
          <p className={styles.now}>{N0[index]}&emsp;→&emsp;{N1[index]}</p>
          <button onClick={this.handleClick}>
            {this.state.btn ? 'Stop' : 'Start'}
          </button>
          <p className={styles.next}>Next :&emsp;{N0[index+1]}&emsp;→&emsp;{N1[index+1]}</p>
        </div>
      </Layout>
    );
  }
}

export default knit
