import React from 'react';

class MySelect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      // 获取参数 HashRouter
      console.log(this.props.history.location.state2);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('你喜欢的风味是: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              选择你喜欢的风味:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">葡萄柚</option>
                <option value="lime">酸橙</option>
                <option value="coconut">椰子</option>
                <option value="mango">芒果</option>
              </select>
            </label>
            <span>{this.state.value}</span>
            <input type="submit" value="提交" />
          </form>
          <p>子路由</p>
          <div>{this.props.children}</div>
        </div>
      );
    }
  }

  export default MySelect;