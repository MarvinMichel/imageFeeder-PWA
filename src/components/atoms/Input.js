function Input(text, type, name) {
  return `
    <label>
      <input type=${type} name=${name} id=${name} placeholder=" ">
      <div>${text}</div>
    </label>
  `
}

export default Input