import MarketWritePresenter from "./marketwrite.presenter";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./marketwrite.validation";
import { CREATE_USED_ITEM } from "./marketwrite.query";

export default function ProductWriteContainer(props) {
  const router = useRouter();
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  async function onClickSubmit(data) {
    console.log({ ...data });
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
          },
        },
      });
      alert("상품을 등록합니다");
      console.log(result.data.createUseditem._id);
      // console.log(result.data.createUseditem._id);
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <MarketWritePresenter
      handleSubmit={handleSubmit}
      register={register}
      onClickSubmit={onClickSubmit}
      formState={formState}
    />
  );
}
