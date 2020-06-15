import React, { useEffect } from 'react'
function NavBar({open}) {
    useEffect(() => {
        var element = document.getElementsByClassName("type")[0]
      if (open)
        {
            //document.getElementsByClassName("type")[0].style.visibility = "visible";
            element.classList.add("sidebar");
        }
        else{
            //document.getElementsByClassName("type")[0].style.visibility = "hidden";
            element.classList.remove("sidebar");
        }

    }, [open])
    
    return (
        <>
            <ul className="type">
                <li>Techology</li>
                <li>Science</li>
                <li>Sports</li>
                <li>Health</li>
                <li>Entertainment</li>
                <li>Business</li>
            </ul>
        </>
    )
}

export default NavBar
