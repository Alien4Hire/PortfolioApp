import React, { useRef } from 'react';

const html = `
    <html>
        <head>
            <meta charset="utf-8" />
            <title>Rubik's cube :: CSS 3D Transformations demo</title>
            <script src="js/oz.js"></script>
            <script src="js/css3.oz.js"></script>
            <script src="js/rubik.js"></script>
            <script src="js/quaternion.js"></script>
            <link rel="stylesheet" href="css/style.css" />
            <meta name="viewport" content="width=device-width" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
        </head>
        <body onload="new Rubik()" class="new-cube">
            <h1></h1>
        </body>
    </html>
`

const RubiksCube = () => {
    const iframe = useRef();

    return (
        <div>
            <iframe 
                title="cube"
                ref={iframe}
                sandbox="allow-scripts"
                srcDoc={html}
                frameBorder="0"
                className="iframe"
            />
        </div>
    )
}

export default RubiksCube;