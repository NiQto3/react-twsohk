import React from 'react';
import './style.css';

// Задание
// Допишите код так, чтобы DatePicker был контролируемым компонентом.
// При выборе даты в input'е, текст на ним должен обновляться и показывать выбранную дату
// При нажатии на кнопку Reset date, input должен очищаться, а надпись становаиться 'Select date'
// Документация по JQuery UI
// https://jqueryui.com/datepicker
// https://api.jqueryui.com/datepicker

class DatePicker extends React.Component {
  inputRef = null;

  componentDidMount() {
    $(this.inputRef).datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: this.props.SelectFunc,
    });
  }

  updateDate() {
    $(this.inputRef).datepicker('setDate', this.props.value);
  }

  render() {
    return (
      <input
        ref={(domElement) => {
          this.inputRef = domElement;
        }}
      />
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: '1/4/2023'}
    this.SelectFunc = this.SelectFunc.bind(this)
    this.Resetfunc = this.Resetfunc.bind(this)
  }

  SelectFunc = (ChosenDate) => {
    this.setState(function () {
      return { date: ChosenDate };
    });
  };

  Resetfunc = () => {
    this.setState(function () {      
      return { date: '' };
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.date ? `Date: ${this.state.date}` : 'Select date'}{' '}
        </div>
        <div>
          <DatePicker value={this.state.date} SelectFunc={this.SelectFunc} />
        </div>
        <div>
          <button onClick={this.Resetfunc}>Reset date</button>
        </div>
      </React.Fragment>
    );
  }
}

