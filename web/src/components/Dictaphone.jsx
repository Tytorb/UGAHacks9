import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = (isOn) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  console.log(isOn.isOn);

  useEffect(() => {
    isOn.isOn
      ? SpeechRecognition.startListening({ continuous: true })
      : SpeechRecognition.stopListening();
  }, [isOn]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>

      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;
