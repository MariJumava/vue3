export const isEmailValid = (email) => {
  if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  ) {
    return false;
  } else return true;
};

export const isNameLength = (value) => {
  if (value != null && value.length >= 2) {
    return false;
  } else return true;
};
