"use client"

import { Button } from "@mui/material"
import { useEffect, useState } from "react"


// global variable
let name = "amit"
export default function Home() {
  // local varibale
  let name1 = "gaurav"

  const [name2, setName] = useState("Rahul");
  useEffect(() => {
    console.log(`Page load successfully ${name2} `)
  }, [])

  function handleClick() {
    console.log("test")
    let x = prompt("Please Enter your name?")
    console.log(x)
    setName(x)
  }
  return (
    <>
      <h1>Global variable {name}</h1>
      <h1>Local Variable {name1}</h1>
      <h1>State Variable {name2}</h1>
      <Button variant="contained" onClick={handleClick}>Enter your name</Button>
    </>
  )
}
