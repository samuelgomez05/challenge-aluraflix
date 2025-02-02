const Textarea = ({ value, setValue }) => {
  return (
    <div className="text-white">
      <label className="mb-2 block" htmlFor="description">Descripción</label>
      <textarea 
        onChange={(e) => setValue(e.target.value)}
        id="description" 
        className="h-36 w-full resize-none overflow-y-auto rounded-md border-2 border-primary/50 bg-transparent p-3 outline-none transition-colors duration-300 focus:border-primary" 
        placeholder="Ingresa la descripción del video (Opcional)" 
        value={value}></textarea>
    </div>
  )
}

export default Textarea