import React, { Component } from 'react';
import Calendar from 'react-calendar';

import './Sample.less';

interface State {
  value: Date | Date[];
}

export default class Sample extends Component<{}, State> {
  state = {
    value: new Date(),
  };

  onChange = (value: Date | Date[]) => {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <div className="Sample">
        <header>
          <h1>react-calendar sample page</h1>
        </header>
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Calendar
              onChange={this.onChange}
              showWeekNumbers
              value={value}
            />
          </main>
        </div>
      </div>
    );
  }
}
