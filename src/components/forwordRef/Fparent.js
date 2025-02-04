import { useRef } from "react"
import Fchild from "./Fchild"

const Fparent = ()=>{
    const childRef = useRef()


    return (
        <>
            <Fchild ref={childRef} />

            <button onClick={() => childRef.current.innerText = "good"}>Click me</button>
        
        </>
    )
}

export default Fparent