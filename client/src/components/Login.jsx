import React from "react"
import { Link } from "react-router-dom"

export const Login = () => {
    return (
        <>
            Login...

            <form action="">
                <p>

                    <label htmlFor="">Email : </label>
                    <input type="email" name="" id="" required />

                </p>

                <p>

                    <label htmlFor="">Password : </label>
                    <input type="password" name="" id="" />
                </p>

                <p>
                    <button type="submit">Login</button>
                </p>

                <p>
                    <Link to='/signup'>
                        <button type="submit">Signup</button>
                    </Link>
                </p>

            </form>

        </>
    )
}