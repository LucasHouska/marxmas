import { useState } from 'react';
import './App.css';

function App() {

  const [string, setString] = useState('')
  const [showOn, setShowOn] = useState(false)
  const [showGreen, setShowGreen] = useState(false)
  const [showSpikes, setShowSpikes] = useState(false)
  const [showI, setShowI] = useState(false)
  const [showSit, setShowSit] = useState(false)
  const [showSpreading, setShowSpreading] = useState(false)
  const [showChristmas, setShowChristmas] = useState(false)
  const [showSpirit, setShowSpirit] = useState(false)
  const [showForThe, setShowForThe] = useState(false)
  const [showFamily, setShowFamily] = useState(false)
  const [showThat, setShowThat] = useState(false)
  const [showStays, setShowStays] = useState(false)
  const [showFit, setShowFit] = useState(false)
  const [showX, setShowX] = useState(false)
  const [showMarks, setShowMarks] = useState(false)
  const [showThe, setShowThe] = useState(false)
  const [showSpot, setShowSpot] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()

    if (string === '@92') {
      setShowOn(true)
    } else if (string === '*74') {
      setShowGreen(true)
    }
    else if (string === '$16') {
      setShowSpikes(true)
    }
    else if (string === '$03') {
      setShowI(true)
    }
    else if (string === '?49') {
      setShowSit(true)
    }
    else if (string === '*90') {
      setShowSpreading(true)
    }
    else if (string === '@90') {
      setShowChristmas(true)
    }
    else if (string === '*16') {
      setShowSpirit(true)
    }
    else if (string === '$18') {
      setShowForThe(true)
    }
    else if (string === '?39') {
      setShowFamily(true)
    }
    else if (string === '$09') {
      setShowThat(true)
    }
    else if (string === '?04') {
      setShowStays(true)
    }
    else if (string === '$90') {
      setShowFit(true)
    }
    else if (string === '*49') {
      setShowX(true)
    }
    else if (string === '@10') {
      setShowMarks(true)
    }
    else if (string === '*39') {
      setShowThe(true)
    }
    else if (string === '$91') {
      setShowSpot(true)
    }
    else {
      setString('')
    }

    setString('')
  }


  return (
    <div className="App">
      <form className='form' onSubmit={handleSubmit}>
        <label id='label'>* # #</label>
        <input id='input' value={string} onChange={event => { setString(event.target.value) }} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <div id='image'>

      </div>

      <div id='secret'>
        {showOn ? <span className='word'>On </span> : null}
        {showGreen ? <span className='word'>green </span> : null}
        {showSpikes ? <span className='word'>spikes </span> : null}
        {showI ? <span className='word'>I </span> : null}
        {showSit ? <span className='word'>sit </span> : null}
        {showSpreading ? <span className='word'>spreading </span> : null}
        {showChristmas ? <span className='word'>Christmas </span> : null}
        {showSpirit ? <span className='word'>spirit </span> : null}
        {showForThe ? <span className='word'>for the </span> : null}
        {showFamily ? <span className='word'>family </span> : null}
        {showThat ? <span className='word'>that </span> : null}
        {showStays ? <span className='word'>stays </span> : null}
        {showFit ? <span className='word'>fit </span> : null}
        {showX ? <span className='word'>X </span> : null}
        {showMarks ? <span className='word'>marks </span> : null}
        {showThe ? <span className='word'>the </span> : null}
        {showSpot ? <span className='word'>spot </span> : null}

      </div>
    </div>
  );
}

export default App;
