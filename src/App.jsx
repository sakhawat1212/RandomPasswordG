
import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [CharacterAllowed, setcharacterAllowed] = useState(false);
  const [password, setpassword] = useState ("");
  
  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 

    if (numberAllowed) str+= "0123456789"
    if (CharacterAllowed) str+= "!@$%&{}"

    for (let i=1; i<=length; i++){

      let char = Math.floor(Math.random() * str.length)

      pass += str.charAt(char)
    }

    setpassword(pass)




  }, [length, numberAllowed, CharacterAllowed])

  useEffect (() => {
    passwordGenerator()
  }, [length, numberAllowed, CharacterAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg
      px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-4xl text-center text-white my-3">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text" 
          value={password} 
          className="outline-none w-full 
          py-1 px-3"
          placeholder="password" 
          readOnly
           />

          <button className="outline-none bg-blue-700 text-white 
          px-3 py-0.5 shrink-0 ">copy</button>

        </div>

        <div className="flex items-center gap-x-1">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setlength(e.target.value)}}
            />
            <label>length :{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            checked={numberAllowed}
            onChange={(e) => {setnumberAllowed(e.target.checked)}}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            checked={CharacterAllowed}
            onChange={(e) => {setcharacterAllowed(e.target.checked)}}
            />
            <label>Characters</label>
          </div>
        </div>
        <button onClick={passwordGenerator} className="mt-4 bg-blue-500 
        text-white py-2 px-4 rounded">Generate Password</button>
      </div>
    
    </>
  );
}
export default App;