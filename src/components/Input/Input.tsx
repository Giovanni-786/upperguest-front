import { Input } from '../ui/input'

interface IInputText {
  label: string
}

function InputText({ label }: IInputText) {
  return (
    <div>
      <span>{label}</span>
      <Input />
    </div>
  )
}

export default InputText
