import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Body from "./component/Footer";

function Zero(){
    return <div>제주청귤 아이스티 녹차</div>;
}

function App(){
    return (
        <div className = "App">
            <Header />
            <Body>
                <Zero />
            </Body>
            <Footer />
        </div>
    );
}

export default App;