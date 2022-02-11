import './App.css';
import DrumPad from './DrumPad';
import {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';

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

    const [currentSound, setCurrentSound] = useState({title: "No sound"});

    useEffect(() => {
        setCurrentSound({title: "No sound"});
        window.addEventListener('keypress', handlePress);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('keypress', handlePress);
            window.removeEventListener('click', handleClick);
        }
    }, []);

    useEffect(() => {
        playSound();
    }, [currentSound]);

    const playSound = () => {
        if (currentSound.title !== "No sound")
            document.getElementById(currentSound.key).play();
    }

    const handleClick = (e) => {
        const soundItemArray = soundItems.filter(soundItem => soundItem.title === e.target.id);
        const soundItem = soundItemArray.length === 0 ? {title: "No sound"} : soundItemArray[0];
        setCurrentSound(soundItem);
    }

    const handlePress = (e) => {
        const soundItemArray = soundItems.filter(soundItem => soundItem.key.charCodeAt(0) + 32 === e.charCode);
        const soundItem = soundItemArray.length === 0 ? {title: "No sound"} : soundItemArray[0];
        setCurrentSound(soundItem);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col id="buttons" xs="9">
                        <div>
                            {soundItems.slice(0, 3).map((soundItem, soundItemIdx) => <DrumPad key={soundItemIdx}
                                                                                              audioId={soundItem.key}
                                                                                              buttonId={soundItem.title}
                                                                                              url={soundItem.url}/>)}
                        </div>
                        <div>
                            {soundItems.slice(3, 6).map((soundItem, soundItemIdx) => <DrumPad key={soundItemIdx}
                                                                                              audioId={soundItem.key}
                                                                                              buttonId={soundItem.title}
                                                                                              url={soundItem.url}/>)}
                        </div>
                        <div>
                            {soundItems.slice(6, 9).map((soundItem, soundItemIdx) => <DrumPad key={soundItemIdx}
                                                                                              audioId={soundItem.key}
                                                                                              buttonId={soundItem.title}
                                                                                              url={soundItem.url}/>)}
                        </div>
                    </Col>
                    <Col id="display" xs="3">
                        <p>{currentSound.title}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
