import React from 'react'
import './Notification.css'

function Message() {
    return (
        <div>
            <article class="message is-small">
                <div class="message-header">
                    <p>New message</p>
                    <button class="delete is-small" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                </div>
            </article>

            <article class="message is-small">
                <div class="message-header">
                    <p>New message</p>
                    <button class="delete is-small" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                </div>
            </article>

            <article class="message is-small">
                <div class="message-header">
                    <p>New message</p>
                    <button class="delete is-small" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                </div>
            </article>
        </div>
    )
}

export default Message
