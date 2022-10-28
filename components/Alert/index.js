import { useEffect } from "react";
const Alert = (props) => {
  const {className, type, text, show, close } = props;
  useEffect(()=>{
  setTimeout(() => {
    close()
  }, 1200);
  },[show])
  return (
    <>{show ? <>
    <div className={`alert ${type === 'warning' ? 'alert--warning' : 'alert--success'} ${className}`}>
      <span className="alert__txt">{text}</span>
      <button className="alert__btn" onClick={close} type="button"></button>
    </div>
    </>: <></>}
  </>
  )
}

export default Alert;