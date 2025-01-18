export const checkValidateData = (email, password, name) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);
  const isNameValid = nameRegex.test(name);

  if (!isEmailValid) return "Invalid email";
  if (!isPasswordValid) return "Invalid password";
  if (!isNameValid) return "Invalid name";

  return null;
};
