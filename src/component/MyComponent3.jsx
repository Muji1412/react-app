import React from "react";

class MyComponent3 extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: '홍길동'
        }
    }


    render() {
        let {nick, age} = this.props;
        return(
            <>
                <h3>클래스형 컴포넌트 {nick}, {age}</h3>
                <h3>현재 state: {this.state.count}</h3>
                {/*오브젝트로 들어가서 count:this.state.count + 1 해줘야함*/}
                <button type="button" onClick={()=>this.setState({count: this.state.count + 1})}>추가</button>
            </>
        )
    }
}

export default MyComponent3;