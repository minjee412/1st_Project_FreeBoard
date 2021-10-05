import OpenapiUI from "./openapi.presenter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiContainer() {
  const [catImage, setCatImage] = useState<string[]>([]);

  useEffect(() => {
    const getImg = async () => {
      // [1, 1, 1, 1, 1, 1, 1, 1, 1]
      new Array(9).fill(1).map(async (_) => {
        const result: any = await axios.get(
          "https://api.thecatapi.com/v1/images/search"
        );
        setCatImage((prev) => [...prev, result.data[0].url]);
      });
    };
    getImg();
  }, []);
  return <OpenapiUI catImage={catImage} />;
}
