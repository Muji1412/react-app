import {useState} from "react";


function IteratorComponentQ(){

    const arr = [
        {src : '/img/img1.png', title : '아이폰10', price: 1000},
        {src : '/img/img2.png', title : '아이폰11', price: 2000},
        {src : '/img/img3.png', title : '아이폰12', price: 3000},
        {src : '/img/img4.png', title : '아이폰13', price: 4000},
    ]


    // 이미지 선택, 이벤트 객체로 이미지 아닌경우 종료, 이미지인 경우에는 src속성 가져오기
    const handleClick = (e) =>{
        if (e.target.tagName !== "IMG") return;
        setCur(list.indexOf(e.target.src));
    }
    const [list, setList] = useState(arr);
    const [cur, setCur] = useState(0);
    const imgList = arr.map((value, index) => {
        return (
            <li key={index} onClick={handleClick}>
                <img src={value.src} alt={value.title}/>
                <p> 상품: {value.title}</p>
                <p>가격{value.price}원</p>
            </li>
        )
    })

    //이미지 돌리기
    const clickHandler = () =>{
        if (cur!==list.length-1) {
            setCur(cur + 1);
        } else {
            setCur(0);
        }
    }




    return (
        <>
            <img src={list[cur].src} alt={list[cur].title} onClick={clickHandler}/>

            <ul style={{
                display: 'flex',
                listStyle: 'none'
            }}>{imgList}</ul>

        </>
    )
}

export default IteratorComponentQ;