import {useState} from "react";


function MyStateQ(){
    const [count, setCount] = useState(0)
    const plus = () => setCount(count + 1)
    const minus = () => setCount(count - 1)
    const reset = () => setCount(0)

    // 비동기처리 예시
    const handleClick = () => {
        console.log("변경 전:", count); // 0 출력
        setCount(count + 1);
        console.log("변경 후:", count); // 여전히 0 출력! (아직 안 바뀜)
    };

    // 비동기 예시 - 실패
    const handleClick2 = () => {
        setCount(count + 1); // count가 0이면 0+1=1
        setCount(count + 1); // 여전히 count는 0이므로 0+1=1
        setCount(count + 1); // 또 0+1=1
        // 결과: 3번 호출했지만 1만 증가함
    };

    // 함수형 업데이트 - 이전값이 뭐든간에 '+1 해달라' 선언
    const handleClick3 = () => {
        setCount(prev => prev + 1); // 이전값에서 +1
        setCount(prev => prev + 1); // 또 이전값에서 +1
        setCount(prev => prev + 1); // 또 이전값에서 +1
        // 결과: 제대로 3 증가함
    };


    return(
        <>
            <h3>실습</h3>
            <h3>카운트 : {count}</h3>
            <button type="button" onClick={plus}>증가</button>
            <button type="button" onClick={minus}>감소</button>
            <button type="button" onClick={reset}>리셋</button>
            <br/>
            <button type="button" onClick={handleClick}>Async</button>
            <button type="button" onClick={handleClick2}>AsyncPlus3GoesWrong</button>
            <button type="button" onClick={handleClick3}>AsyncPlus3GoesRight</button>

        </>
    )
}

export default MyStateQ;