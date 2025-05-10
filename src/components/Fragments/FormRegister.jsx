import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormRegister = () => {
  return (
    <form action="">
          {/* fullname */}
          <InputForm
            label="Fullname"
            type="text"
            placeholder="inser here your name"
            name="fullname"
          />

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

          {/* password */}
          <InputForm
            label="Confirm Password"
            type="password"
            placeholder="*****"
            name="confirmPassword"
          />

          <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
  )
}

export default FormRegister