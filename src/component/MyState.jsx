import {useState} from "react";


function MyState(){
    //함수형 컴포넌트에서 useState()훅으로 state 관리함
    // 람다식이니 한줄로 변경

    // setColor 해서 color값을 set 함
    // 여기서, const red = () => color = red 이런식으로 하면 안됨.
    // 무조건 setColor, setter로 바꿔줘야 잘 작동함.
    // 1. const로 선언했고, 2. 리액트가 바뀐걸 모름. 3. 화면이 바뀌지도 않음

    const [color, setColor] = useState('black')
    const red = () => setColor('red')
    const blue = () => setColor('blue')



    return(
        <>
            {/*css 지정하는거라 중괄호 2개*/}
            <h3 style={{color:color}}>현재 색상{color}</h3>
            <button type="button" onClick={red}>붉은색</button>
            <button type="button" onClick={blue}>퍼랭이</button>
            {/*굳이 const 선언 안하고 이렇게 넣어줘도 상관없음, 한줄이기 때문에*/}
            <button type="button" onClick={() => setColor('yellow')}>노랭이</button>


        </>
    )
}

export default MyState;  // ✅ 맞아요
