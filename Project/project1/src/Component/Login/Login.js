import { Link } from 'react-router-dom';
import './Login.css';

function Login()
{
    return(
        <div class="box">
			<span class="borderLine"></span>
		<form autocomplete="off">
			<h2>Sign in</h2>
			<div class="inputBox">
				<input type="text" required="required"/>
				<span>Userame</span>
				<i></i>
			</div>
			<div class="inputBox">
				<input type="password" required="required"/>
				<span>Password</span>
				<i></i>
			</div>
			<div class="links">
				<Link to='/Signup'>Signup</Link>
			</div>
			<input type="submit" value="Sign in"/>
		</form>
	</div>
    )
}
export default Login;