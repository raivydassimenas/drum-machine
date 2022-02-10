import './App.css';
import DrumPad from './DrumPad';
import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

const soundItems = [
    {
        title: "Chord1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
        key: "Q"
    },
    {
        title: "Chord2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
        key: "W"
    },
    {
        title: "Chord3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
        key: "E"
    },
    {
        title: "GiveUs",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
        key: "A"
    },
    {
        title: "DryOhh",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
        key: "S"
    },
    {
        title: "BldH1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
        key: "D"
    },
    {
        title: "PunchyKick1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
        key: "Z",
    },
    {
        title: "SideStick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
        key: "X"
    },
    {
        title: "BrkSnr",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
        key: "C"
    }
];

function App() {

    const [currentSound, setCurrentSound] = useState('My sound')


    const playSound = () => {
        const audioId = soundItems.filter(item => currentSound === item.title)[0].key;
        document.getElementById(audioId).play();
    }

    const handleClick = (e) => {
        const title = e.target.id;
        setCurrentSound(title);
        playSound();
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col id="buttons" xs="6">
                        {soundItems.map((soundItem, soundItemIdx) => <DrumPad key={soundItemIdx} handleClick={handleClick}
                                                                              audioId={soundItem.key}
                                                                              buttonId={soundItem.title}
                                                                              url={soundItem.url}/>)}
                    </Col>
                    <Col id="display" xs="6">
                        <p>{currentSound}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
