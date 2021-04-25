import React, { Component } from 'react';

class WeekDropdown extends Component {
    /*constructor(props) {
        this.state = {

        }
    }*/
    render() {
        return (
            <React.Fragment>
                <form>
                    <select name="weeks" id="weeks">
                        <option value="1">Week 1</option>
                        <option value="2">Week 2</option>
                        <option value="3">Week 3</option>
                        <option value="4">Week 4</option>
                        <option value="5">Week 5</option>
                        <option value="6">Week 6</option>
                        <option value="7">Week 7</option>
                        <option value="8">Quarter-Finals</option>
                        <option value="9">Semi-Finals</option>
                        <option value="10">Championship Game</option>
                    </select>
                </form>
            </React.Fragment>
        )
    }
}

export default WeekDropdown;