import React from "react";

function SettingsHero() {
    return (
        <>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold">Options</h1>
            <p className="py-6">Pick your preferences with the proxy in this space.</p>

            <div className="divider">Proxy Select</div>
            <select className="select w-full max-w-xs" id="proxySelect">
            <option selected>UltraViolet</option>
            <option>Dynamic Interception Proxy</option>
            </select>
            <div className="divider">Cloaking</div>
            <select className="select w-full max-w-xs" id="cloakingSelect">
            <option selected>Plain</option>
            <option>About:Blank</option>
            </select>

            
            <div className="divider">Theme</div>
            <select className="select w-full max-w-xs" id="themeSelect">
            <option selected>Luxury</option>
            <option>Light</option>
            <option>Cupcake</option>
            <option>Bumblebee</option>
            <option>Emerald</option>
            <option>Corporate</option>
            <option>Synthwave</option>
            <option>Retro</option>
            <option>Cyberpunk</option>
            <option>Valentine</option>
            <option>Halloween</option>
            <option>Garden</option>
            <option>Forest</option>
            <option>Aqua</option>
            <option>Lofi</option>
            <option>Pastel</option>
            <option>Fantasy</option>
            <option>Emerald</option>
            <option>Black</option>
            <option>Dracula</option>
            <option>Cmyk</option>
            <option>Autumn</option>
            <option>Buisness</option>
            <option>Acid</option>
            <option>Lemonade</option>
            <option>Night</option>
            <option>Coffee</option>
            <option>Winter</option>
            
            </select>
            </div>
            
        </div>
        </div>
        </>
    )
}

export default SettingsHero;