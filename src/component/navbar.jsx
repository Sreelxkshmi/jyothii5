import './navbar.css';
function Nav(){
    return (
        <div style={{backgroundColor:"lavender"}}>

        <div style={{color:"darkgreen"}}>
        <div class="container">
            <div class="content">
                <h1>Register</h1>
                <h2>username</h2>
                <div class="box1">
                    <input type="username" placeholder="Enter your name"/>
                </div>
                <h2>email</h2>
                <div class="box2">
                    <input type="email" placeholder="Enter your email"/>
                </div>
                <h2>password</h2>
                <div class="box3">
                    <input type="password" placeholder="Enter your password"/>
                </div>
                <h2>repassword</h2>
                <div class="box4">
                    <input type="repassword" placeholder="Enter your password again"/>
                </div>
                <div class="button">
                    <button>Sign in</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default Nav;