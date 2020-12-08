import React from 'react'

/**
 * 处理多个 input 元素时，我们可以给每个元素添加 name 属性，并让处理函数根据 event.target.name 的值选择要执行的操作。
 * 获取路由参数
 * 函数跳转路由
 */
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.navTo = this.navTo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    // 获取参数
    console.log(this.props.match.params);
  }

  navTo() {
    // HashRouter
    // this.props.history.push("/select");
    // 隐形传参，不用在路由地址path中加参数，如/:id
    // 接收参数this.props.history.location.state
    this.props.history.push({
      pathname: "/select",
      state2: {
        id: 2
      }
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          参与:
            <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          来宾人数:
            <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <p>跳转路由</p>
        <button onClick={this.navTo}>goto select</button>
      </form>
    );
  }
}
/*
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'test'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <p>{this.state.value}</p>
        <label>
          文章:
                  <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
*/
export default MyForm;