import React from "react"

export default function Button()
{
    return(
        <div>
            <div className="button--mailin">
            <button className="email"><i class="fa fa-envelope"></i>Email</button>        
            <button className = "in"><i class="fa fa-linkedin"></i>LinkedIn</button>
            </div>
        </div>
    )
}