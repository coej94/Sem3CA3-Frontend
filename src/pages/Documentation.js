import React, {Component} from 'react';

var Documentation = () => {
    return(
        <div>
            <h1>CA3 Documentation</h1>
            <h3>Thomas Staal, Christian Øst-Jacobsen and Mads Ibsen</h3>
            <h3>Password Hashing:</h3>
            <p>This CA has a security part; Password Hashing. When we put users down in the database, we don't want to
            their passwords in plaintext. If our web app gets hacked and all our users password are leaked, our users
            are in big trouble, because our website is propably not place they use this password. Here password hashing
            with salt is a solution. With password hashing we encrypt the password using a hashing algoritm. To add some
            extra security we also adds some "salt" - a secret word, so hackers are not able to crack our hashed password
            with a simple dictionary. So now we have the hashed passwords stored in the database, with some salt added.
            When the user is writing a password to log in, this password is also hashed with salt and compared to the stored password.
            </p>
            <h3>Backend:</h3>
            <p></p>
            <h3>React:</h3>
            <p></p>
            <h3>Participation and opinions:</h3>
            <p></p>
            Conclusion:
            <br/>
            <h3>Conclusion</h3>
            <p>This has been at tough project even though it was a Light version. For us, it's been more like a
            learning process and not a CA. We have ended up with an incomplete solution. You can navigate around on the
            and the userRoles are added to the different taps on the website, so the only role who is able see and use the "add books" tap
            is the user role. Same with the Admin role, who is the only kind of user who is able to see the "edit user" tap. (incomplete feature)
            The only feature we succeeded with was the "add user" feature. It works down through all the different layers of the front-end and backend.
            </p>

            <h3>Feedback</h3>
            <p>This module has not been perfect.</p>
        </div>
    )
}

export default Documentation