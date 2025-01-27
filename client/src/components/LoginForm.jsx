
const LoginForm = () => {
    return (
        <div class="d-flex flex-column mb-3 col-md-4 gap-3">
            <h2>Sign In</h2>
            <input type="text" class="form-control" placeholder="Email"/>
            <input type="text" class="form-control" placeholder="Password"/>
            <div class="d-flex align-items-center justify-content-end" style={{height: "min-content"}}>
                <input type="checkbox" />
                <p class="mb-0 ms-2">Show password</p>
            </div>
            <button className="btn btn-primary col-md-3 align-self-end">Confirm</button>
        </div>
    );
}

export default LoginForm;
