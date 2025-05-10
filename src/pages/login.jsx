import FormLogin from "../components/Fragments/FormLogin"
import AuthLayout from "../components/Layouts/AuthLayouts"

const LoginPage = () => {
    return (
        <AuthLayout title="Log In" type="login">
            <FormLogin/>
        </AuthLayout>
    )
}

export default LoginPage