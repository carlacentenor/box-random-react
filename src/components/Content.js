import React, { Component } from 'react';
import './css/content.css';


function randomColor() {
  let values = '0123456789ABCDEF';
  let length = values.length;
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += values[Math.floor(Math.random() * length)];
  }
  return color;
}

function randomStyle() {
  let styles = ['style-1', 'style-2', 'style-3'];
  let length = styles.length;
  let styleRandom = styles[Math.floor(Math.random() * length)];
  return styleRandom;
}

const colorRandom = {backgroundColor: randomColor()};
const style = randomStyle();

class Content extends Component {

  render() {
    return (
     <div className="h70 flex">
      <div className="box h30" style={colorRandom}>
        <p className={style}>Hola mundo</p>
      </div>
     </div>
    );
  }
}

export default Content;