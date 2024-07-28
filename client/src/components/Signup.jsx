import React from "react"
import { Link } from "react-router-dom"

export const Signup = () => {

    const handleRegister = (value) => {
        console.log(value)
    }

    return (
        <>
            Signup...

            <form action="">

                <p>

                    <label htmlFor="">Name : </label>
                    <input type="text" />

                </p>

                <p>

                    <label htmlFor="">Email : </label>
                    <input type="email" name="" id="" required />

                </p>

                <p>

                    <label htmlFor="">Password : </label>
                    <input type="password" name="" id="" />
                </p>

                <p>
                    <button onClick={handleRegister} type="submit">Signup</button>
                </p>

                <p>
                    <Link to='/login'>
                        <button type="submit" >Login</button>
                    </Link>
                </p>
            </form>

        </>
    )
}

