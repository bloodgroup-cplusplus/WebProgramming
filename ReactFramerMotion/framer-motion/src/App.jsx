import {motion} from 'framer-motion'
function App() {

  return (
    <div>
      <motion.button
        whileHover={{scale:1.1}}
       className='save-button' 
       onClick={()=>null}
      >Launch Button</motion.button>

   </div>
  )
}

export default App
