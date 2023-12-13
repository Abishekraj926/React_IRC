import './Signup.css';
function Signup()
{
    return(
        <div class="box1">
		<form autocomplete="off">
			<h2>Sign up</h2>
			<div class="inputBox1">
				<input type="text" required="required"/>
				<span>Userame</span>
				<i></i>
			</div>
			<div class="inputBox1">
				<input type="email" required="required"/>
				<span>Email</span>
				<i></i>
			</div>
			<div class="inputBox1">
				<input type="password" minLength="8" required="required"/>
				<span>Password</span>
				<i></i>
			</div>
            <input type="submit" value="Signup"/>
			
		</form>
	        </div>
    )
}
export default Signup;