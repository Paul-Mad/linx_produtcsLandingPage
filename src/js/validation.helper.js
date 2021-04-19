// ------------- CPF VALIDATION--------------------------------

//code from Receita Federal
export const validateCpf = (cpf) => ***REMOVED***
  cpf = cpf.replace(/[^\d]+/g, "");

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  let soma = 0,
    resto;
  for (let i = 1; i <= 9; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) return false;
  soma = 0;
  for (let i = 1; i <= 10; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) return false;
  return cpf;
***REMOVED***

// set mask to the cpf-input
const cpfMask = IMask(document.getElementById("cpf-input"), ***REMOVED***
  mask: "000.000.000-00",
});

//-----------------EMAIL-VALIDATION------------------

export const ValidateEmail = (email) => ***REMOVED***
  const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`***REMOVED***|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(emailFormat)) ***REMOVED***
    return email;
  } else ***REMOVED***
    return false;
  }
***REMOVED***
