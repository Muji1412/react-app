import {useState} from "react";


function EventComponentQ(){

    const [food, setFood] = useState('');

    const handleFood = (e) => {
        if (e.target.value === "메뉴선택") return;
        setFood(e.target.value);
    }


    return (
        <>
            <h3>셀렉트 태그 핸들링</h3>
            <h3> 태그 체인지 될 떄 선택한 결과 아래 출력</h3>

            <select name="메뉴선택" onChange={handleFood}>
                <option value={"메뉴선택"}>메뉴선택</option>
                <option value={"치킨"}>치킨</option>
                <option value={"피자"}>피자</option>
                <option value={"햄버거"}>햄버거</option>
            </select>

            <br/>
            <h3> 선택한 결과 </h3>
            {food}
        </>
    );
}

export default EventComponentQ;