import React from 'react'

export const LinkCard = ({ link }) => {
    return (
        <div>
            <h2>Link</h2>

            <p>Your link: <a href={link.to} target="_blank" rel="noopener noreferer">{link.to}</a></p>
            <p>From where: <a href={link.from} target="_blank" rel="noopener noreferer">{link.from}</a></p>
            <p>Quantity of clicks on link: <strong>{link.clicks}</strong></p>
            <p>Creation date: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </div>
    )
}