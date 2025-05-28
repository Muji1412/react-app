import {useEffect, useState} from "react";


function HookEffect() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");


    //useEffect 훅 => 컴포넌트의 생명주기를 다룸
    // useEffect(() => {
    //     console.log("렌더링 이후에 실행됨")
    // });

    // useEffect(() => {
    //     console.log('마운트 이후 1회만 실행됨');
    // }, []);

    // useEffect(() => {
    //     console.log('마운트 이후, 특정 state가 업데이트 된 이후 실행됨')
    //
    //     // 무한루프 예시
    //     // const copy = {...name }; //객체 전개구문( 객체복사)
    //     // setName(copy) //주소값이 변했다고 판단되어 다시 렌더링을 실행
    // }, [name]);
    // console.log('화면실행 마운트 이전')

    useEffect(() => {
        console.log('마운트 이후, 특정 state가 업데이트 된 이후에 실행됩니다')

        return() =>{
            console.log(`언마운트 이후 동작하게 됨 업데이트 직전값 : ${name}`);
        }
    }, [name])

    // useEffect는 여러개 있어도 상관없음

    return (
        <>
            <h3>훅 useEffect</h3>
            <h3>머임</h3>

            <input type={"text"} placeholder={"이름"} onChange={e => setName(e.target.value)} value={name}/>
            <br/>
            <input type={"text"} placeholder={"나이"} onChange={e => setAge(e.target.value)} value={age}/>

        </>
    );
}

export default HookEffect