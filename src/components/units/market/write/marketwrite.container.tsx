import MarketWritePresenter from "./marketwrite.presenter";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./marketwrite.validation";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./marketwrite.query";
import { FETCH_USED_ITEM } from "../detail/marketdetail.query";

export default function ProductWriteContainer(props: any) {
  const router = useRouter();
  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  function onChangeContents(value: any) {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // register에 등록하지 안혹, 강제로 값을 넣어주는 기능

    console.log(value);

    trigger("contents");
    // onChange 됐는지, react-hook-form에 알려주는 기능
  }

  async function onClickSubmit(data: any) {
    // console.log({ ...data });
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
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (err: any) {
      alert(err.message);
    }
  }

  async function onClickUpdate(data: any) {
    // console.log(router.query.useditemId);
    if (!data.name && false && !data.remarks && !data.contents && !data.price) {
      alert("수정된 내용이 없습니다.");
      return;
    }

    interface IMyUpdateMarketdInput {
      name?: string;
      remarks?: string;
      contents?: string;
      price?: number;
    }

    const myUpdatemarketInput: IMyUpdateMarketdInput = {};
    if (data.name) {
      myUpdatemarketInput.name = data.name;
    }
    if (data.remarks) myUpdatemarketInput.remarks = data.remarks;
    if (data.contents) myUpdatemarketInput.contents = data.contents;
    if (data.price) myUpdatemarketInput.price = Number(data.price);

    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,
          updateUseditemInput: myUpdatemarketInput,
        },
      });
      console.log(result);
      // router.push(`/market/${router.query.useditemId}`);
      router.push(`/market/${router.query.useditemId}`);
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <MarketWritePresenter
      data={data}
      handleSubmit={handleSubmit}
      register={register}
      onClickSubmit={onClickSubmit}
      formState={formState}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      onChangeContents={onChangeContents}
    />
  );
}
