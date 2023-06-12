import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Xiaojiejie from './xiaojiejie';


function fetchTodos() {
  return [
    {
      id: 1,
      title: "唱",
      completed: false,
    },
    {
      id: 2,
      title: "跳",
      completed: false,
    },
    {
      id: 3,
      title: "rap",
      completed: true,
    },
  ]
}



function TodoList(props){
  return (  
  <li>
    <input type='checkbox' defaultChecked={props.completeds}/>
    <label>{props.titles}</label>
    <button onClick={ props.handleClick }>点击更新状态</button>
  </li>
  
  )
}

function App() {
  //const todos = fetchTodos();
  /**
   * react状态管理模方式(响应式变量的 hook 函数)：useState会返回两个值
   * todos:存储当前状态变量
   * setTodos：修改状态方法setTodos()
   * fetchTodos为初始值状态
   */
 const [todos,setTodos]=useState(fetchTodos);//函数内改的话局部变量自动销毁，全局变量得考虑组件同步
  //拿到todos不能直接改，得调方法

  return (
    <>
      <ul>
          {//花括号 html中嵌js
            todos.map((todo) =>(
              <TodoList
              titles={todo.title}
              completeds={todo.completed}
              handleClick={()=>{
                setTodos([
                  {
                    id: 1,
                    title: "唱",
                    completed: false,
                  },
                  {
                    id: 2,
                    title: "跳",
                    completed: false,
                  },]
               )
              }}
              />
            )
            )
            }
      </ul>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//<App/>
<Xiaojiejie/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
