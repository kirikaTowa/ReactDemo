import React, { Component } from 'react'; //imrc
class XiaojiejieItemss  extends Component { //cc

    //这个其实快速生成的时候会有的
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)//在构造方法中就绑定 省的循环里蛋疼
    }

    render() { 
        return ( 
            //传递的属性
            <li onClick={this.handleClick}>{this.props.content}</li>
         );
         
    }

    handleClick(){
        //console.log("free hug"+this.props.contentIndex)
        this.props.deleteTarget(this.props.ind)
    }


}
export default XiaojiejieItemss;