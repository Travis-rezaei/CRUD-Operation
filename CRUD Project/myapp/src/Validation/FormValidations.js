 const FormValidations = {
  ValidName: /^(?=.*[a-z])(?!.* ).{2,12}$/,
  ValidEmail: /^(?=.*[a-z])(?=.*@)(?!.* ).{8,30}$/,
  ValidPhone: /^(?=.*[0-9])(?!.*[a-z])(?!.* ).{11,11}$/,
};

export default FormValidations;
