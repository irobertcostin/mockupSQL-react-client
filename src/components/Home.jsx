import Header from "./Header"
import Lyst from "./Lyst"



export default function Home(){


    return(
        <>
            <Header/>
            <div className="w-full p-24">
                <Lyst/>
            </div>
        </>
    )}