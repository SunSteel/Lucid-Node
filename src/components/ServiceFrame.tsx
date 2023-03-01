import Iframe from 'react-iframe'

function ServiceFrame(props: { url: any; }) {


    const css = `
iframe {
    display:block;
    width:100%;
}
`
    return (
        <>
        <style>{css}</style>
        <div className="navbar bg-base-100">
                <div className="navbar-start">

                </div>
                <div className="navbar-center">
                <input type="text" placeholder="Search or Enter URL" className="input input-bordered w-96 max-w-xs" />
                </div>
                <div className="navbar-end">

                </div>
                </div>
                <div className="hero min-h-screen bg-base-200">
                <Iframe url={props.url} width='100' height='100%' frameBorder={0} position='relative' />
                </div>

        </>
    )
}

export default ServiceFrame;