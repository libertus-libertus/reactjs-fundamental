import { Link } from "react-router-dom"
import FormLogin from "../components/Fragments/FormLogin"
import AuthLayout from "../components/Layouts/AuthLayouts"

const LoginPage = () => {
    return (
        <AuthLayout title="Log In">
            <FormLogin/>
            <p className="mt-5 text-center">
                Don't have an account? {" "}
                <Link to="/register" className="text-blue-600 font-bold">
                    Register
                </Link>
            </p>
        </AuthLayout>
    )
}

export default LoginPage