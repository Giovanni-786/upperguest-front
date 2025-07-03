import InputText from '@/components/Input/Input'
import { inputsRegister } from '@/constants/inputsRegister'

function Register() {
  return (
    <article className="mt-2 flex w-full flex-col justify-start gap-3.5 p-8 ">
      <div>
        <h2 className="text-2xl">Cadastro</h2>
      </div>
      <div className="w-full flex-col">
        {inputsRegister.map((input) => {
          return (
            <div className="mt-4" key={input.label}>
              <InputText label={input.label} />
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default Register
