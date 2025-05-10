import { Link } from "react-router-dom"
import FormRegister from "../components/Fragments/FormRegister"
import AuthLayout from "../components/Layouts/AuthLayouts"

const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister/>
            <p className="mt-5 text-center">
                Have an account? {" "} 
                <Link to="/login" className="text-blue-600 font-bold">
                    Log In
                </Link>
            </p>
        </AuthLayout>
    )
}

export default RegisterPage