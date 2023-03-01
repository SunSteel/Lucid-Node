import React from "react";
import Data from "./bypass.json";

function BypassCard() {
    return (
        <>


        
        <div className="bypassDiv1 bg-base-200">
        <div className="bypassDiv flex flex-row flex-wrap pt-6 py-6">
            {Data.map((bypass => {
                return (
                    <>
                <input type="checkbox" id={bypass.title} className="modal-toggle" />
                <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">{bypass.title}</h3>
                    <p className="py-4">{bypass.instructions}</p>
                    <div className="mockup-code">
                    <pre><code>{bypass.code}</code></pre>
                    </div>
                    <div className="modal-action">
                    <label htmlFor={bypass.title} className="btn">Close</label>
                    </div>
                </div>
                </div>
                <div key={bypass.title}></div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={bypass.image} alt={bypass.title} width="350" height="350" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bypass.title}</h2>
                    <p>{bypass.description}</p>
                    <div className="card-actions justify-end">
                    <label className="btn btn-primary" htmlFor={bypass.title}>View</label>
                    </div>
                </div>
                </div>
                    </>
                )
            }))}
        </div>
        </div>
        </>
    )
}

export default BypassCard;