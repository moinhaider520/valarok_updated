import React from "react";
class Music extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      button: true,
      play: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.url = "assets/soundtrack.mp3";
    this.audio = new Audio(this.url);
    this.audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    this.togglePlay = this.togglePlay.bind(this);
  }
  handleClick(){
    this.setState({
      button:!this.state.button
    })
  }

  // state = {
  //   play: true
  // }

   audio = new Audio("assets/soundtrack.mp3")

  // componentDidMount() {
  //   this.audio.addEventListener('ended', () => this.setState({ play: false }));
  // }

  // componentWillUnmount() {
  //   this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
  // }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }


  render() {
    return (
      <div id="player">
        <button  className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={ () => {this.handleClick(); this.togglePlay()}}></button>
      </div>

    );
  }
}


export default Music;