import "../yellowButton/yellowButton.scss"

const YellowSubmitButtonForm = ({ btn_text }) => {
  return (
    <button type="submit" role="button" className="yello_btn">
      <span className="button-content">{btn_text} </span>
    </button>
  );
};
export default YellowSubmitButtonForm;
