import React, { Component } from 'react';

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
                <div className={this.state.isShow?'show':'hide'}>FreeHug</div>
                <div><button onClick={this.toToggole}>I am a hedgehog</button></div>
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