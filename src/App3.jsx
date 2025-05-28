import EventComponent from "./component/EventComponent.jsx";
import EventComponentQ from "./component/EventComponentQ.jsx";
import EventComponent2 from "./component/EventComponent2.jsx";
import EventComponentQ2 from "./component/EventComponentQ2.jsx";

function App3() {
    return (
        <>
            <EventComponent2/>
            <hr/>
            <EventComponent/>
            <hr/>
            <h3>실습</h3>
            <EventComponentQ/>

            <h3 >실습 2</h3>
            <EventComponentQ2/>
        </>
    );
}

export default App3