import Toast from "react-native-toast-message";

const successToast = (text1: string, text2: string) => {
  Toast.show({
    type: 'success',
    text1: text1,
    text2: text2
  });
}

const errorToast = (text1: string, text2: string) => {
  Toast.show({
    type: 'error',
    text1: text1,
    text2: text2,
  });
}

export const ToastMessage = { successToast, errorToast };