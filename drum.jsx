const sounds = [
  { key: 'Q', id: 'Heater-1', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { key: 'W', id: 'Heater-2', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { key: 'E', id: 'Heater-3', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { key: 'A', id: 'Heater-4', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { key: 'S', id: 'Clap', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { key: 'D', id: 'Open-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { key: 'Z', id: 'Kick-n-Hat', url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { key: 'X', id: 'Kick', url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { key: 'C', id: 'Closed-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
];

const DrumPad = ({ keyTrigger, id, url, handleDisplay }) => {
  const handleKeyPress = (event) => {
    if (event.key.toUpperCase() === keyTrigger) {
      playSound();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const playSound = () => {
    const audio = document.getElementById(keyTrigger);
    audio.currentTime = 0;
    audio.play();
    handleDisplay(id);
  };

  return (
    <div className="drum-pad" id={id} onClick={playSound}>
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={url}></audio>
    </div>
  );
};

const DrumMachine = () => {
  const [display, setDisplay] = React.useState('');

  const handleDisplay = (displayText) => {
    setDisplay(displayText);
  };

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="pad-container">
        {sounds.map((sound) => (
          <DrumPad
            key={sound.key}
            id={sound.id}
            url={sound.url}
            keyTrigger={sound.key}
            handleDisplay={handleDisplay}
          />
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<DrumMachine />, document.getElementById('drum-machine'));
