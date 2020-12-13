import {ThemeContext} from './theme-context';
import React from 'react'

class ThemedButton extends React.Component {
  // 方法1：绑定context值
  static contextType = ThemeContext
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <>
        <button
          {...props}
          style={{backgroundColor: theme.background}}/>
      </>
    );
  }
}
// 方法2：绑定context值
// ThemedButton.contextType = ThemeContext;

export default ThemedButton;