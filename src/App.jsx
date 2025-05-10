import React from "react";

const Button = (props) => {

  const { children = "...", variant = "bg-black"} = props

  return (
    <button 
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  )
}

function App() {
  return (
    <div className='flex justify-center bg-blue-400 min-h-screen items-center'>
      <div className="flex space-x-4">
        <Button variant="bg-red-700">Log In</Button>
        <Button variant="bg-slate-700">Register</Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App
