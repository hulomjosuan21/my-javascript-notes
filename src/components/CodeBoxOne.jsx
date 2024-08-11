/* eslint-disable react/prop-types */
import './component_style.css'

const CodeBoxOne = ({title,code,description}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className='animateOnScroll BoxOne'>
      <h4>{title}</h4>

      <div className='code__wrapper'>
        <button className='copy-btn' onClick={handleCopy}><i className="fa-regular fa-clipboard"></i></button>
        <pre>
          <code>
            {code}
          </code>
        </pre>
      </div>

      <div className="code__description">
          <pre>
          <code>
            {description}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default CodeBoxOne
