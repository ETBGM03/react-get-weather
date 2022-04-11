export const valdiateForm = ({city}) => {
  let errorsForm = {};

  if (!city) errorsForm.city = "Nombre ciudad es requerido";

  return errorsForm;
};
