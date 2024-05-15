import { useEffect, useState } from 'react';

const AnswerButton = ({ option, timer, onAnswerSelected }) => {
  const [selected, setSelected] = useState(null); //gets the answer value
  const [btnStatus, setBtnStatus] = useState("none"); //changes btn design if selected

  //takes options, dislpay them
  //sets "selected status" considering the timer --> saved in global

  useEffect(() => {
    if (selected && timer > 0) {
      setBtnStatus("selected");
    }
  }, [timer, selected]);

  const handleAnswerChange = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
    onAnswerSelected(e.target.value)
  }

  //to allow just one selected button --> radio button
  return (
    <>
    <input 
        type="radio" 
        name="buttonGroup" 
        value={option} 
        id={option} 
        className={btnStatus} 
        onClick= {handleAnswerChange}
    />
    <label htmlFor={option} className='optionsLabel btn'>{option}</label>
    </>
  );
};

export default AnswerButton;