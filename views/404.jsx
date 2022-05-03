const React = require('react')
const Default = require('./layouts/Default')

function error404() {
    return (
        <Default>
            <h3>Error 404!</h3>
            <h4>The link that you are looking for no longer exists.</h4>
        </Default>
    )
}

module.exports = error404