import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(1, "최소 1자리 이상 입니다.")
    .max(50, "최대 50자리 까지 입니다.")
    .required("반드시 입력해야 하는 필수 사항 입니다."),

  remarks: yup
    .string()
    .min(1, "최소 1자리 이상 입니다.")
    .max(50, "최대 50자리 까지 입니다.")
    .required("반드시 입력해야 하는 필수 사항 입니다."),

  contents: yup
    .string()
    .min(1, "최소 1자리 이상 입니다.")
    .max(200, "최대 200자리 까지 입니다.")
    .required("반드시 입력해야 하는 필수 사항 입니다."),

  price: yup
    .string()
    .min(1, "최소 1자리 이상 입니다.")
    .required("반드시 입력해야 하는 필수 사항 입니다."),
});
