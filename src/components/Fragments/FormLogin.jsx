import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormLogin = () => {
  return (
    <form action="">
          {/* email */}
          <InputForm
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            name="email"
          />

          {/* password */}
          <InputForm
            label="Password"
            type="password"
            placeholder="*****"
            name="password"
          />

          <Button classname="bg-blue-600 w-full">Log In</Button>
        </form>
  )
}

export default FormLogin