import React, { Component } from "react";
import { render } from "react-dom";

import HomePage from "./homepage";
import RoomJoinPage from "./RoomJoin";
import CreateRoomPage from "./CreateRoom";


export default class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="center">
                <HomePage/>
            </div>
        );
    }

}

const appDiv = document.getElementById("App");
render(<App />, appDiv);