import InputNumber, { InputNumberProps } from '../InputNumber'

interface Props extends InputNumberProps {
  max?: number
  onIncrease?: (value: number) => void
  onDecrease?: (value: number) => void
  onType?: (value: number) => void
  classNameWrapper?: string
}
export default function QuantityController({
  max,
  onIncrease,
  onDecrease,
  onType,
  classNameWrapper = 'ml-10',
  value,
  ...rest
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let _value = Number(event.target.value)
    if (max !== undefined && _value > max) {
      _value = max
    } else if (_value < 1) {
      _value = 1
    }
    onType && onType(_value)
  }
  const handleIncrease = () => {
    let _value = Number(value) + 1
    if (max !== undefined && _value > max) {
      _value = max
    }
    onIncrease && onIncrease(_value)
  }
  const handleDecrease = () => {
    let _value = Number(value) - 1
    if (_value < 1) {
      _value = 1
    }
    onDecrease && onDecrease(_value)
  }
  return (
    <div className={'flex items-center' + classNameWrapper}>
      <button
        onClick={handleDecrease}
        className='flex w-8 h-8 border-gray-300 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-4 h-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
        </svg>
      </button>
      <InputNumber
        value={value}
        classNameError='hidden'
        classNameInput='h-8  w-14 border-t border-b border-gray-300 p-1 text-center outline-none'
        onChange={handleChange}
        {...rest}
      />
      <button
        onClick={handleIncrease}
        className='flex w-8 h-8 border-gray-300 items-center justify-center rounded-r-sm border border-gray-300 text-gray-600'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-4 h-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
        </svg>
      </button>
    </div>
  )
}
