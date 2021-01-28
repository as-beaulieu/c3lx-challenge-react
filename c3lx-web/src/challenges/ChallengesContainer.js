import React from 'react'
import ChallengesApi from "./ChallengesApi";

class ChallengesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            challenges: []
        }
    }

    componentDidMount = async () => {
        await ChallengesApi.get("http://locahost:8080/challenges").then(response => {
            console.log(response)
            this.setState({
                ...this.state,
                challenges: response.data
            })
        }).catch( error => {
            console.log(error)
        })
    };

    render() {
        const { challenges } = this.state;
        return (
            <div>
                <h2>Challenges</h2>
                <p>{challenges}</p>
            </div>
        )
    }
}

export default ChallengesContainer