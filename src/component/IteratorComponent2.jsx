import {useState} from "react";


function IteratorComponent2(){

    const [data, setData] = useState('');

    // 화면에 뿌려질 가짜데이터 생성, 이 데이터를 state로 관리
    const arr = [
        {id:1, todo: "hello"},
        {id:2, todo: "bye"},
        {id:3, todo: "bababoi"}
    ]



    const [list, setList] = useState(arr);

    list.map((item) => <li key={item.id}> {item.todo}</li>);

    //이벤트 연결법
    // 1. onClick = {함수명}
    // 2. onClick = {()=> 함수명()}
    const newList = list.map(item =>
        <li key ={item.id}
            onDoubleClick={() =>handleRemove(item.id)}
            >
            {item.todo}
        </li>
    )

    const handleClick = e =>{
        let obj = {id: list[list.length - 1].id + 1, todo: data};
        let newObj = list.concat(obj);

        setList(newObj);
        setData('')
    }
    const handleRemove = id => {
        // console.log("리무브 실행됨", id);

        //filter- return true인 값으로 필터링됨
        const filteredList = list.filter(item => {
            return item.id !== id;  // id가 다른 것들만 true 반환
        });

        // 2단계: 필터링된 결과로 상태 업데이트
        setList(filteredList);
    }



    return (
        <>
            <h1>IteratorComponent2 </h1>
            <h3>할일 목록 추가하기</h3>
            <input type={"text"} onChange={(e) => setData(e.target.value)} value={data}/>
            <button type={"button"} onClick={handleClick}>목록 추가하기</button>
            <ul>
                {newList}
            </ul>
        </>
    )
}

export default IteratorComponent2;