import { useState } from "react";


const StatForm = () => {
    const [email, setEmail] = useState(null)
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(email)
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
    
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input type="text" name='name' />
                <br />
                <input
                onChange={handleEmailChange}
                type="text" name='email' required />
                <br />
                <input type="text" name='phone' />
                <br />
                <button>submit</button>
            </form>
        </div>
    );
};

export default StatForm;