import {Fragment, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from "./component/MyComponent.jsx";
import MyComponent2 from "./component/MyComponent2.jsx";
import MyComponent3 from "./component/MyComponent3.jsx";
import MyState from "./component/MyState.jsx";
import MyStateQ from "./component/MyStateQ.jsx";


function App2() {
  const [count, setCount] = useState(0)

  return (
      <Fragment>
          <div>
              <h3>state</h3>
              <br/>
              <MyStateQ/>
              <br/>

              <MyState/>

              <hr/>
              <h3>props</h3>
              <MyComponent/>
              <MyComponent2></MyComponent2>
              <MyComponent name={"홍길동"} age={20} addr={"서울"}/>
              <MyComponent3 nick ={"클래스형"} age ={30}></MyComponent3>

              <hr/>
              <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
              <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
              </p>
          </div>

          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
          <div>
              <li>삼항연산자 사용</li>
          </div>
          <div>
              hellow world {name} 님 의 나이는 {count} 입니다,
              <br/>
              {count < 20 ? '미성년자입니다' : '성인입니다'}
              <br/>
              이거 쓸때 안보여주고싶다면 null 쓰는게 좋음, undefined 주의

          </div>
          <div>
              <li> DOM 요소에 스타일을 지정할려면 반드시 객체형으로</li>
              <li style={{color: "red", fontSize: "35px"}}>이렇게 줘야합니다, 키:값 키:값으로.</li>

              <li className={"x"}>8. 클래스 대신에 className 사용</li>
              <li> 9. 홀로 사용하는 태그는 반드시 닫는 태그 사용</li>

          </div>    

          <img src={reactLogo} alt="React logo anotherspot"/>
          <img src="./assets/react.svg"/>
          <br/>
          <li> 처리 방식상 이렇게 하면 안되고, 퍼블릭에 있는 파일이 아닌이상 import 사용해서 끌어와야함 </li>
          <img src="/vite.svg" alt="Vite logo"/>
      </Fragment>
  )
}

export default App2
