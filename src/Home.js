import Dashboard from "./Dashboard";

const Home = () => {
    return (
        <div id="HomePage">
            <h1>HOMEPAGE</h1>
            <button id="myBtn">Open Modal</button>
            <div id="myModal" class="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        </div>
    )
}


export default Home;