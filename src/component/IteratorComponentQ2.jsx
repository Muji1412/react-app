import {useState} from "react";


function IteratorComponentQ2(){

    const [search, setSearch] = useState('');

    //1 - select는 컴포넌트반복으로 option태그를 생성합니다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];

    //2 - 아래 데이터는 state로 관리하고 화면에 li태그로 반복해주세요 .
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];

    const [list, setList] = useState(data);

    const selectArr = select.map((value, index) =>{
        return <option value={value} key = {index}>{value}</option>
    })

    const listData = data.map((value, index) =>{
        return <li key={index} value={value.type} id={value.id}>{value.type}-{value.teacher}</li>
    })

    const [result, setResult] = useState('');

    const filtering = e =>{

        console.log(e)
        console.log(list)

        const filteredList = list.filter(item => {
            return item.type === e;
        });
        setResult(filteredList)
        console.log(filteredList)
    }

    const clickHandler = () =>{
            filtering(search)
    }

    // const resultData = result.map((value, index) =>{
    //     return <li key={index} value={value.type} id={value.id}>{value.type}-{value.teacher}</li>
    // })






    // 3. select태그 change되면 data에서 filtering
    // 4. 검색을 누르면 검색 키워드를 통해 data에서 필터링

    return (
        <>
            <input type={"text"} value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button type={"button"} onClick={clickHandler}>검색</button>
            <br/>
            <select onChange={(e) => filtering(e.target.value)}>
                {selectArr}
            </select>

            <div>
                {resultData}

            </div>

            <ul >
                {listData}
            </ul>
        </>
    )
}

export default IteratorComponentQ2;