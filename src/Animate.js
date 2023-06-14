import React, { Component } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group'

class  Animate extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            //数据驱动，增加属性   要做啥先有数据
            isShow:true
         }

         this.toToggole = this.toToggole.bind(this);
    }
 


    render() { 
        return ( 
            <div>
                {/* 三元运算符动态改类名  Css通过className指定样式*/}
                {/* <div className={this.state.isShow?'show':'hide'}>I am a hedgehog</div> */}
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="animate-test"
                    unmountOnExit
                >
                <div className={this.state.isShow?'show':'hide'}>I am a hedgehog</div>
                </CSSTransition>
                <div><button onClick={this.toToggole}>FreeHug</button></div>
            </div>
         );
    }


    toToggole(){
        this.setState({
            isShow:this.state.isShow ? false : true
        })
    }
}
 
export default Animate;