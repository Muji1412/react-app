import {useState} from "react";


function EventComponent(){

    // 인풋값을 state로 관리하기

    const [nick, setNick] = useState('');
    const [todo, setTodo] = useState('');

    const handleNick = (e) => {
        console.log(1)
        // 인풋태그 값을 얻어야함
        // onChange에 넣어놔서 setNick 아니면 애초에 입력이 받아지지도않음
        setNick(e.target.value)
    }

    const handleTodo = (e) =>{
        setTodo(e.target.value);
        console.log(e)
    }
    
    //출력
    const handleClick = () =>{
        alert(nick + "이 해야할 일은" + todo + "입니다.")
    }
    //백틱 사용 출력
    const handleClick2 = () =>{
        alert(`${nick} 님의 할 일은 ${todo} 입니다.`)
    }
    
    // 엔터클릭시 얼러트처리
    const handleKeyUp = (e) =>{
        if (e.keyCode === 13){
            handleClick()
        }
    }
    
    // 키코드 대신 key 이름으로
    const handleKeyUp2 = (e) =>{
        if (e.key === 'Enter'){
            handleClick()
        }
    }



    return(
        <>
            {/*사용자가 버튼 클릭하면 이름, 할일을 경고창으로 출력*/}
            <h3>리액트 이벤트</h3>
            <label>이름</label>
            <input type={"text"}
                   onChange={handleNick}
                   value={nick}
                   onKeyUp={handleKeyUp2}
            />
            <label>할일</label>
            <input type={"text"}
                   onChange={handleTodo}
                   value={todo}
                   onKeyUp={handleKeyUp}
            />

            <button type={"button"} onClick={handleClick}>오늘의 할일은?</button>
            <button type={"button"} onClick={handleClick2}>오늘의 할일은?</button>
        </>
    )
}

export default EventComponent;