//auth service with fake data

const fakeValidationObj = {
  email: 'admin@admin.com',
  password: '12345678',
};

const authorize = (
  { email, password },
  authReduxFunc,
  wrongEmailReduxFunc,
  wrongPassReduxFunc
) => {
  if (
    email === fakeValidationObj.email &&
    password === fakeValidationObj.password
  ) {
    authReduxFunc(true);
    wrongEmailReduxFunc(false);
    wrongPassReduxFunc(false);
    return true;
  } else if (
    email != fakeValidationObj.email &&
    password != fakeValidationObj.password
  ) {
    authReduxFunc(false);
    wrongEmailReduxFunc(true);
    wrongPassReduxFunc(true);
  } else if (
    email != fakeValidationObj.email &&
    password === fakeValidationObj.password
  ) {
    authReduxFunc(false);
    wrongEmailReduxFunc(true);
    wrongPassReduxFunc(false);
  } else {
    authReduxFunc(false);
    wrongEmailReduxFunc(false);
    wrongPassReduxFunc(true);
  }

  return false;
};

export default authorize;
