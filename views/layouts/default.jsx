const React = require('react')

function Default(html) {
    return (
        <hmtl>
            <head>
                <title>Default</title>
            </head>
            <body>
                <h1>HTML Rendered!</h1>
                <div classsName="container">
                    {html.children}
                </div>
            </body>
        </hmtl>
    )
}

module.exports = Default