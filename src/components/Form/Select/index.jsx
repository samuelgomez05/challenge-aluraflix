const Select = ({ categories }) => {
  return (
    <div className="text-white">
      <label className="mb-2 block" htmlFor="category">Categoría</label>
      <select id="category" className="w-full rounded-md border-2 border-primary/50 bg-transparent p-3 outline-none transition-colors duration-300 focus:border-primary" required>
        <option value="" disabled defaultValue="" hidden selected>Selecciona una categoría</option>
        {
          categories.map((category, index) => <option key={index} className="bg-slate-900" value={category}>{category}</option>)
        }
      </select>
    </div>
  )
}

export default Select