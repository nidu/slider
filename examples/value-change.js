require('rc-slider/assets/index.less');

const React = require('react');
const ReactDOM = require('react-dom');
const Slider = require('rc-slider');

const style = {width: 400, margin: 50};
const marks = {
  '-10': '-10°C',
  0: <strong>0°C</strong>,
  26: '26°C',
  37: '37°C',
  50: '50°C',
  100: {
    style: {
      color: 'red',
    },
    label: <strong>100°C</strong>,
  },
};

function log(value) {
  console.log(value);
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 26,
      defaultValue: 26
    };
  }

  render() {
    const {value, defaultValue} = this.state;

    return (
      <div style={style}>
        <p>Slider with change value track</p>
        <Slider min={-10} marks={marks} step={null} onChange={log}
                value={value}
                defaultValue={defaultValue}
                highlightChange
                onChange={value => this.setState({value})} />
        <button onClick={e => this.setState({defaultValue: this.state.value})}
                style={{marginTop: 30}}>
          Set default value
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Demo />
  </div>
  , document.getElementById('__react-content'));
