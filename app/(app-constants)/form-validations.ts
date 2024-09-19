export const FORM_REGEX_VALIDATORS = {
  textOnly: {
    regex:
      /^(?=.*[A-Za-z\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF])[A-Za-z\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF\s.]+$/g,
    message: "Enter Text Only",
  },
  numbersOnly: {
    regex: /^[0-9]*$/g,
    message: "Enter Numbers Only",
  },
  password: {
    regex: /^.{4,12}$/g,
    message: "Password must be between 4 and 12 characters",
  },
  otpNumber: {
    regex: /^[0-9]{7}$/,
    message: "Enter a valid 7-digit OTP",
  },
  email: {
    regex: /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})$/g,
    message: "Enter a valid email address",
  },
  eoriRegex: {
    regex: /^[A-Za-z]{2}[A-Za-z0-9]{1,15}$/,
    message:
      "Enter a valid EORI number with a minimum length of 3, maximum length of 17, and the first two characters as letters",
  },
  alphanumeric20Regex: {
    regex: /^[A-Za-z0-9]{20}$/,
    message: "Enter a valid 20-character alphanumeric code",
  },
  dunsNumberRegex: {
    regex: /^\d{9}$/,
    message: "Enter a valid 9-digit D-U-N-S number",
  },
  numericWithPlusRegex: {
    regex: /^[+]?\d+(\.\d+)?$/,
    message: "Enter a valid numeric value (optional plus sign allowed)",
  },
  url: {
    regex: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/g,
    message: "Enter a valid URL",
  },
  complexPassword: {
    regex:
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$&+,:;=?@#|'<>.^*()%!-]).{8,}$/,
    message:
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character, and must be at least 8 characters long",
  },
};
