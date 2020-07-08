import React from 'react'

// 使用原生dom获取焦点
class Ref1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    // 使用原生dom获取焦点
    handleClick() {
        this.refs.myInputRef.focus();
    }
    render() {
        return (
            <div>
                <input type="text" ref="myInputRef" />
                <input type="button" value="获取焦点"
                    onClick={this.handleClick} />
            </div>
        )
    }
}

/**
 * ref转发
 */
const FancyButton = React.forwardRef((props, ref) => (
    // <button ref={ref} className="FancyButton">
    //     {props.children}
    // </button>
    <input type="text" ref={ref} value="123" onChange={e => console.log(e.target.value)} />
));

class Ref2 extends React.Component {
    constructor(props) {
        super(props);
        this.testref = React.createRef();
        this.handleClick = this.handleClick.bind(this)
    }
    // 使用原生dom获取焦点
    handleClick() {
        console.log(this.testref)
        this.testref.current.focus();
    }

    render() {
        // 你可以直接获取 DOM button 的 ref：
        return (
            <div>
                <FancyButton ref={this.testref}></FancyButton>
                <input type="button" value="获取焦点"
                    onClick={this.handleClick} />
            </div>
        )
    }
}

function Component() {
    return (
        <p>aa</p>
    )
}

function logProps(Component) {
    class LogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render() {
            const { forwardedRef, ...rest } = this.props;
            // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
            return <Component ref={forwardedRef} {...rest} />;
        }
    }
    // 注意 React.forwardRef 回调的第二个参数 “ref”。
    // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
    // 然后它就可以被挂载到被 LogProps 包裹的子组件上。
    return React.forwardRef((props, ref) => {
        return <LogProps {...props} forwardedRef={ref} />;
    });
}

class Ref3 extends React.Component {
    constructor(props) {
        super(props);
        this.testref = React.createRef();
        this.handleClick = this.handleClick.bind(this)
    }
    // 使用原生dom获取焦点
    handleClick() {
        console.log(this.testref)
        // this.testref.current.focus();
    }

    render() {
        // 你可以直接获取 DOM button 的 ref：
        let BewCom = logProps(Component);
        return (
            <div>
                <BewCom ref={this.testref}/>
                <input type="button" value="获取焦点"
                    onClick={this.handleClick} />
            </div>
        )
    }
}

function out() {
    return (
        <>
            <Ref1 />
            <Ref2 />
            <Ref3 />
        </>
    )
}

export default out