class TutorialApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // these "items" will be displayed in list format
      items: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h3',
        null,
        'React / Fetch Tutorial'
      ),
      React.createElement(PlainList, { items: this.state.items }),
      React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'button',
          null,
          'Fetch Data'
        )
      )
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    // by changing the state we force all components to render
    this.setState({ items: ['First', 'Second', 'Third'] });
    fetch("http://api.fixer.io/2017-11-02").then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw "No Data";
      }
    }).then(json => {
      let newItems = [];
      for (let item in json.rates) {
        newItems.push(item + " -> " + json.rates[item]);
      }
      this.setState({ items: newItems });
    }).catch(error => console.log(error));
  }
}

class PlainList extends React.Component {
  render() {
    return React.createElement(
      'ul',
      null,
      this.props.items.map(item => React.createElement(Item, { key: item, text: item }))
    );
  }
}

function Item(props) {
  return React.createElement(
    'li',
    null,
    props.text
  );
}

ReactDOM.render(React.createElement(TutorialApp, null), document.getElementById('root'));
