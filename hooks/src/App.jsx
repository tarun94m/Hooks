import States from './useState/UseState'
import St from './useState/UseState2'
import './App.css'
import Rs from './useReduce/UseReducer'
import Ue from './useEffect/UseEffect'
import Ur from './useRef/UseRef'
import Ule from './useLayoutEffect/UseLayoutEffect'
import Context from './useContext/Context'
import Um from './useMemo/UseMemo'
import UseEffectExamples from './useEffect/useEff'

function App() {

  return (
    <div>
       <States/>
      <St/>
      <Rs/>
      <Ue/>
      <Ur/>
      <Ule/>
      <Context/>
      <Um/>
      <UseEffectExamples/>
    </div>
  )
}

export default App
