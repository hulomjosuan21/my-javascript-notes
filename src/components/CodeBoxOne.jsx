/* eslint-disable react/prop-types */
import './component_style.css'

const CodeBoxOne = ({note}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(note.code);
  };

  return (
    <div className='animateOnScroll BoxOne'>
      <h4>{note.title}</h4>

      <div className='code__wrapper'>
        <button className='copy-btn' onClick={handleCopy}><i className="fa-regular fa-clipboard"></i></button>
        <pre>
          <code>
            {note.code}
          </code>
        </pre>
      </div>

      <div className="code__description">
          <pre>
          <code>
            {note.description}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default CodeBoxOne
