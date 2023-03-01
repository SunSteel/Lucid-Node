import React from "react";

function SearchHero() {
    return (
        <>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold">Search</h1>
            <p className="py-6">Enter your query in the box below.</p>
            <div className="inputArea space-x-2 text-center">
            <input type="text" id="searchBox"  placeholder="Search or Enter URL" className="input input-bordered w-96 max-w-xs" />
            <button className="btn btn-active btn-ghost w-20" id="searchButton">Go</button>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default SearchHero;