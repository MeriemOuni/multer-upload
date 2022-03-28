import { links } from 'express/lib/response';

const mongoose =require('mongoose');

const question = require('./config/question');
class question extends Component {

    state = {
        value: "",
        timeOut: false,
        round: 0,
        timer: 10,
        randomTense: "",
        wrongAnswer: "",
        wrongAnswers: []
    }


    componentDidMount() {
        this.startTimeOut()
    }

    startTimeOut = () => {
        this.timeout = setTimeout(() => {
            this.setState({ timeOut: true })
        }, 10000)


        this.interval = setInterval(() => {
            this.setState({ timer: this.state.timer - 1 })
        }, 1000)
    }


    componentDidUpdate() {
        if (this.state.timer === 0) {
            clearInterval(this.interval)
        }
    }
};
export default question;