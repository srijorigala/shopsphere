export const isRequired = (...fields) => {
  return fields.every((field) => field.trim() !== "")
}

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isValidPasswordLength = (password, minLength = 6) => {
  return password.length >= minLength
}

export const doPasswordsMatch = (password, confirmPassword) => {
  return password === confirmPassword
}