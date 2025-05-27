
function MyComponent({name,age = 0,addr = "경기도"}){

    // const {name, age} = a;
    return(
        <div>
            <p>마이컴포넌트</p>
            <p>이름은 {name}, 나이는 {age}, 주소는 {addr} 이다.</p>
            <img src="/vite.svg" alt="Vite logo"/>
        </div>
    )
}

export default MyComponent;