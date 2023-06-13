import React, { Component } from 'react'; //imrc
import PropTypes from 'prop-types';

class XiaojiejieItemss  extends Component { //cc

    //这个其实快速生成的时候会有的
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)//在构造方法中就绑定 省的循环里蛋疼
    }

    //解決子組件非必要刷新问题
    shouldComponentUpdate(nextProps){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }

    render() { 
        console.log("child-render")
        return ( 
            //传递的属性
            <li onClick={this.handleClick}>
                {this.props.content} 测试连接-{this.props.content}
             </li>
         );
         
    }

    handleClick(){
        //this.props.list=[]
        //console.log("free hug"+this.props.contentIndex)
        this.props.deleteTarget(this.props.ind)
    }
}


XiaojiejieItemss.propTypes={
    content:PropTypes.string.isRequired,//必传属性
    deleteItem:PropTypes.func,
    index:PropTypes.number
}


XiaojiejieItemss.defaultProps={
    content:"月海",//必传属性
}

export default XiaojiejieItemss;