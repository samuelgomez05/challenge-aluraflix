const Input = ({ type, placeholder, required, label, id, value, setValue }) => {
  return (
    <div className="text-white">
      <label className="mb-2 block" htmlFor={id}>{label}</label>
      <input 
        onChange={(e) => setValue(e.target.value)}
        id={id} 
        className="w-full rounded-md border-2 border-primary/50 bg-transparent p-3 outline-none transition-colors duration-300 focus:border-primary" 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        required={required} />
    </div>
  )
}

export default Input