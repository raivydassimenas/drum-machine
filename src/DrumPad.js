import { Button } from 'reactstrap';

function DrumPad(props) {

    return (
      <Button className="drum-pad" id={props.buttonId}>
        <audio className="clip" id={props.audioId} src={props.url} />
        {props.audioId}
      </Button>
    );
}

export default DrumPad;