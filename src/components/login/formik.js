import * as Yup from 'yup';
import authorize from '../../services/auth_service';

const formikProps = (authFunc, wrongEmailFunc, wrongPassFunc) => {
  return {
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Η διεύθυνση Email δεν είναι έγκυρη')
        .required('Το πεδίο δεν μπορεί να είναι κενό'),
      password: Yup.string()
        .min(8, 'Το password θα πρέπει να περιέχει τουλάχιστον 8 χαρακτήρες')
        .required('Το πεδίο δεν μπορεί να είναι κενό'),
    }),
    onSubmit(values) {
      authorize(values, authFunc, wrongEmailFunc, wrongPassFunc);
    },
    validateOnChange: false,
    validateOnBlur: false,
  };
};

export default formikProps;
