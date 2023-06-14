import Item from 'antd/es/list/Item';
import React, { Component, Fragment } from 'react'
import './style.css'
import XiaojiejieItemss from './XiaojiejieItemss';
import axios from 'axios';
import Animate from './Animate';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group'


//声明一个类继承组件
class Xiaojiejie extends Component {
    //使用构造函数
    constructor(props) {//参数都叫props
        super(props)
        //state中 定义组件所需要的数据   
        this.state = {
            inputValue: "",
            list: []
        }

    }

    componentDidMount() {
        //axios获取远端数据  放在render中渲染一次拉取一次 axios链式回调
        axios.get('https://mock.mengxuegu.com/mock/64882955ed3be37af65f1e59/reactdemo/foodlist')
            .then((res) => {
                console.log('axios 获取数据成功:' + JSON.stringify(res))
                this.setState({
                    list: res.data.data
                })
            })
            .catch((error) => { console.log('axios 获取数据失败' + error) })
    }

    render() { //jsx
        console.log("main-render")
        return (//括号换行
            <Fragment> {/* 减少层级 */}
                <div>
                    {/**
                     *  大括号里放js代码
                     *  value={this.state.inputValue} 进行数据绑定，此时input框无法输入因为没进行事件绑定
                     * */}
                    <input
                        className='inputStyle'
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={input => { this.input = input }}//es6语法 传递input参数

                    /> {/* .bind(this)绑定方法 */}
                    <button onClick={this.addList.bind(this)}> 增加服务 </button>{/* 绑定事件 */}
                </div>
                <ul ref={(ul) => { this.ul = ul }}>{/* 改成从state里取数据  JSX用大括号通过this.state.list.mao进行循环  里面要写个return*/}
                    {/* 将循环包裹住*/}
                    <TransitionGroup>
                        {
                            this.state.list.map((Item, index) => {
                                return (
                                    //     <li
                                    //     key={index + Item}
                                    //     /* 删除多加个index标识*/
                                    //     onClick={this.deleteItem.bind(this, index)}  
                                    //     dangerouslySetInnerHTML={{__html:Item}}/* 有两个大括号，红色的明显是jsx语法，里面的大括号表示一个对象 */
                                    //     >
                                    //     {/*{Item}   注释掉，标签内使用dangerouslySetInnerHTML声明*/}
                                    // </li>
                                    <CSSTransition
                                        timeout={1000}
                                        classNames="animate-test"
                                        unmountOnExit
                                        key={Item}
                                        appear={true}
                                    >
                                        <XiaojiejieItemss
                                            content={Item}
                                            contentIndex={index}
                                            //再写个属性处理删除事件  该条目的
                                            //list={this.state.list}
                                            deleteTarget={this.deleteItem.bind(this)}
                                        />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Animate />
            </Fragment>
        )
    }

    // //事件绑定 
    // inputChange(el) { //定义接受一个参数
    //     console.log(el.target.value);//取得打印值
    //     // this.state.inputValue=el.tatget.value //问题1. 直接写会报错  this指向错误，当前为空
    //     //问题2.不能直接等于赋值，得通过setState方法和小程序一样
    //     this.setState({
    //         inputValue: el.target.value
    //     })
    // }

    //事件绑定 
    inputChange() { //定义接受一个参数
        this.setState({
            inputValue: this.input.value
        })
    }

    //增加服务的按钮响应方法
    addList() {
        this.setState({/* setState改变数据 */
            list: [...this.state.list, this.state.inputValue],/* es6 ...扩展运算符，相当于一个list数组中使用这个语句把原this.state.list取出来值放到前面 */
            //如果想清空原输入框
            inputValue: ''//单引号空字符
        }, () => {
            console.log(this.ul.querySelectorAll('li').length)//獲取所有元素
        })
    }

    //删除单项服务
    deleteItem(index) {
        console.log(index)

        //let声明局部变量
        //正常方法
        let listChange = this.state.list
        listChange.splice(index, 1)//从索引项删除一位
        this.setState({ //JSX语法要大括号
            list: listChange
        })
        //不用局部变量会怎么样  异常一 能正常操作，但官方不允许 会产生性能障碍
        // this.state.list.splice(index,1)
        // this.setState({
        //     list: this.state.list
        //  })

        // 异常一 不能能正常操作
        // this.setState({
        //     list:  this.state.list.splice(index,1)
        //  })

    }
}
//es6语法暴露组件 让外部引用到
export default Xiaojiejie 