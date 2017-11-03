class TutorialApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      // these "items" will be displayed in list format
      items: [], 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>React / Fetch Tutorial</h3>
        <PlainList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <button>
            Fetch Data
          </button>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    // by changing the state we force all components to render
    this.setState({items: ['First','Second','Third']})
    fetch("http://api.fixer.io/2017-11-02")
    .then(response => { 
      if (response.ok) {
        return response.json()
      } else {
        throw "No Data"
      }
    })
    .then(json => {
      let newItems = []
      for (let item in json.rates) {
        newItems.push(item + " -> " +json.rates[item])
      }
      this.setState({items: newItems})
    })
    .catch(error => console.log(error))
  }
}

class PlainList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <Item key={item} text={item} />
        ))}
      </ul>
    );
  }
}

function Item(props) {
  return (
    <li>{props.text}</li>
  )
}

ReactDOM.render(<TutorialApp />, document.getElementById('root'));
