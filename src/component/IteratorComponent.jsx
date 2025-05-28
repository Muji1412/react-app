

function IteratorComponent(){
    const arr =['홍길동', '이순신', '신사임당', '홍길자'];

    arr.map ((value, index) => {})

    // const newArr = arr.map((value, index) => {
    //     return value + index;
    // });
    //
    // console.log(newArr)
    
    //배열 렌더링시 변화를 감시하기 위해 key props를 전달해야함

    const newArr = arr.map((value, index) => {
        return <li key={index}>{value}</li>
    });


    return (
        <>
            <h1>IteratorComponent1 </h1>
            <h3>컴포넌트 반복 map 함수</h3>
            <ul>
                {newArr}
            </ul>
        </>
    )
}

export default IteratorComponent;