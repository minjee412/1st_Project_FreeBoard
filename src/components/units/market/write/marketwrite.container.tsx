import MarketWritePresenter from "./marketwrite.presenter";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./marketwrite.validation";
import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE, //이미지 2차
} from "./marketwrite.query";
import { FETCH_USED_ITEM } from "../detail/marketdetail.query";
import { useEffect, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductWriteContainer(props: any) {
  const router = useRouter();
  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  /////////////// 이미지 2차 //////////////////////
  const [uploadFile] = useMutation(UPLOAD_FILE);
  //////////////////////////////////////////////

  const [Lat, setLat] = useState("");
  const [Lng, setLng] = useState("");

  const [images, setImages] = useState([null, null, null]);

  const setImageFunc = (file: any, index: any) => {
    const aaa = [...images];
    aaa[index] = file;
    setImages(aaa);
  };

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
    console.log("data", data);
    try {
      // images; // [null, File, null]

      // 2-1 ///////////////////////////////////////////
      // const newImages = ["", "", ""];
      // if (images[0]) {
      //   const result = await uploadFile({
      //     variables: {
      //       file: images[0],
      //     },
      //   });
      //   newImages[0] = result.data.uploadFiile.url;
      // }

      // if (images[1]) {
      //   const result = await uploadFile({
      //     variables: {
      //       file: images[1],
      //     },
      //   });
      //   newImages[1] = result.data.uploadFiile.url;
      // }

      // if (images[2]) {
      //   const result = await uploadFile({
      //     variables: {
      //       file: images[2],
      //     },
      //   });
      //   newImages[2] = result.data.uploadFiile.url;
      // }
      // //////////////////////////////////////////////////////

      // // 2-2 //////////////////////////////////////////////
      // images.map(async (el, index) => {
      //   if (el) {
      //     const result = await uploadFile({
      //       variables: {
      //         file: el,
      //       },
      //     });
      //     newImages[index] = result.data.uploadFiile.url;
      //   }
      // });
      // /////////////////////////////////////////////////////

      // // 2-3 //////////////////////////////////////////////
      // const results = await Promise.all([
      //   uploadFile({ variables: { file: images[0] } }), uploadFile({ variables: { file: images[1] } }), uploadFile({ variables: { file: images[2] } })
      // ]); // [result, result, result] => [result1.data.uploadFile.url, result2.data.uploadFile.url, result3.data.uploadFile.url]
      // /////////////////////////////////////////////////////

      // // 2-4 //////////////////////////////////////////////
      // const results = await Promise.all([
      //   uploadFile({ variables: { file: images[0] } }), uploadFile({ variables: { file: images[1] } }), uploadFile({ variables: { file: images[2] } })
      // ]); // [result, result, result] => [result1.data.uploadFile.url, result2.data.uploadFile.url, result3.data.uploadFile.url]
      // /////////////////////////////////////////////////////

      // // 2-5의 설명 /////////////////////////////////////////
      // // images // [null, myFile, null]
      // images.map((el) => uploadFile({variables: {file: el}})) // [uploadFile({variables: {file: null}}, uploadFile({variables: {file: myFile}}, uploadFile({variables: {file: null}}]
      // /////////////////////////////////////////////////////

      // 2-5 //////////////////////////////////////////////
      const results = await Promise.all(
        images.map((el: any) =>
          el ? uploadFile({ variables: { file: el } }) : null
        )
      ); // [null, result, null]

      const newImages = results.map((el) => (el ? el.data.uploadFile.url : ""));

      // ["", "https://googleapis.com/~~", ""]
      /////////////////////////////////////////////////////

      // ////////////////////////////////////////// 이미지 2차 실습 ///////////////////////////////////
      // const uploadFiles = images // [File1, File2, ""]
      //필터 정렬 (좌측정렬 : 없으묜 빠지기때문에)
      //   .filter((el) => el) // [File1, File2]
      //   .map((el) => uploadFile({ variables: { file: el } })); // [ uploadFile({ variables: { file: File1 } }), uploadFile({ variables: { file: File2 } }) ]
      // const results = await Promise.all(uploadFiles); // await Promise.all([ uploadFile({ variables: { file: File1 } }), uploadFile({ variables: { file: File2 } }) ])
      // const myImages = results.map((el) => el?.data.uploadFile.url || ""); // ["강아지이미지.png", "고양이이미지.png"]
      // ///////////////////////////////////////////////////////////////////////////////////////////
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: newImages,
            useditemAddress: {
              lat: Lat,
              lng: Lng,
            },
          },
        },
      });
      alert("상품을 등록합니다");
      // console.log(data.createUseditem.tags);
      console.log(result.data.createUseditem);
      router.push(`/market/${result.data?.createUseditem._id}`);
      // console.log(result);
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
      tags?: string;
      // images?: string;
    }

    const myUpdatemarketInput: IMyUpdateMarketdInput = {};
    if (data.name) {
      myUpdatemarketInput.name = data.name;
    }
    if (data.remarks) myUpdatemarketInput.remarks = data.remarks;
    if (data.contents) myUpdatemarketInput.contents = data.contents;
    if (data.price) myUpdatemarketInput.price = Number(data.price);
    // if (data.tags) myUpdatemarketInput.tags = data.tags;

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

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=830cd65c89f818fa899bf1125babe987";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(37.468928266451854, 126.86775742684391), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        console.log(map);

        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // interface IMouseEvent {
        //   latLng: any;`````````````````````
        // }

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;
            // console.log(latlng);
            setLat(latlng.La);
            setLng(latlng.Ma);
            // console.log(latlng.La);
            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            // var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            // message += "경도는 " + latlng.getLng() + " 입니다";

            // var resultDiv = document.getElementById("clickLatlng");
            // resultDiv.innerHTML = message;
          }
        );
      });
    };
  }, []);

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
      Lat={Lat}
      Lng={Lng}
      setImageFunc={setImageFunc}
      setImages={setImages}
    />
  );
}
