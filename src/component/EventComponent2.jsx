import {useState} from "react";


function EventComponent2(){

    const [data, setData] = useState({name:'', todo:''})

    const handleChange = (e) => {
        let value = e.target.value;
        let key = e.target.name;

        // let newData = {...data, [key]:value }; //obj를 복사한 후 키:값으로 변경함
        // setData(newData);

        //직전에 사용했던 state값을 얻어야 하는 경우
        //이 함수에 첫번째 매개변수에는 state 이전값을 넣어주도록 약속돼있음
        
        // 자동으로 Data의 값을 넣어줌 (직전의)
        setData((prev) =>{
            //prev를 사용하고, 리턴에 최종적으로 저장될 값을 던져주면 됨
            return {...prev, [key]: value}
            }
        )
    }

    return (
        <>
            <h3>state를 객체로 관리하기</h3>

            <input type={"text"} placeholder={"이름"} name={"name"} value={data.name} onChange={handleChange}/>
            <input type={"text"} placeholder={"할일"} name={"todo"} value={data.todo} onChange={handleChange}/>

            <button type={"button"}>클릭</button>

            <br/>
            현재 사용자입력한 이름 : {data.name}
            <br/>
            현재 사용자입력한 todo : {data.todo}


        </>
    );

}

export default EventComponent2;