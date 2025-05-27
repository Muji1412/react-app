import {useState} from "react";


// 입력창에서
function EventComponentQ2(){
    const [data, setData] = useState({result:'', answer:''})
    // state 하나로만 핸들링 해볼거니까 하나만 사용
    // const [answer, setAnswer] = useState('')

    // 사용자가 값 입력할떄마다 바뀔것들
    const handleChange = (e) => {

        // 이때 key-value는 변수가 아니라 이름표, 이정표의 역할에 가까움
        let key = e.target.name;
        let value = e.target.value;

        // 유저가 입력할때마다 스프레드로 새로운 객체 생성, setData로 값 바꿔주기
        let newData = {...data, [key]: value};
        setData(newData);

    }

    //클릭시
    const clickButton = () =>{

        // 무조건 setter 사용, 현재 창은 비워주고 answer의 값만 바꿔주기
        setData(
            {
            result:'',
            answer:data.result
        })
    }



    return (
        <>
            <input type={"text"} value={data.result} name={"result"} onChange={handleChange}/>
            <button type={"button"} onClick={clickButton}>추가하기</button>
            <h3>결과</h3>
            <p>{data.answer}</p>
        </>
    );
}

export default EventComponentQ2;