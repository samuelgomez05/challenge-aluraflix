const Select = ({ categories, value, setValue }) => {
  return (
    <div className="text-white">
      <label className="mb-2 block" htmlFor="category">Categoría</label>
      <select 
        onChange={(e) => setValue(e.target.value)}
        id="category" 
        className="w-full rounded-md border-2 border-primary/50 bg-transparent p-3 outline-none transition-colors duration-300 focus:border-primary" 
        value={value} 
        required>
        <option value="" disabled defaultValue="" hidden>Selecciona una categoría</option>
        {
          categories.map((category, index) => <option key={index} className="bg-slate-900" value={category}>{category}</option>)
        }
      </select>
    </div>
  )
}

export default Select