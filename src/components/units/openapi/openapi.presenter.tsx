import { CatImg, Wrapper } from "./openapi.styles";

interface IOpenapiListUIProps {
  catImage: string[];
}

export default function OpenapiUI(props: IOpenapiListUIProps) {
  return (
    <Wrapper>
      <div>
        {props.catImage.map((el, index) => (
          <>
            <CatImg key={el} src={el} />
            {(index + 1) % 3 === 0 && <br />}
          </>
        ))}
      </div>
    </Wrapper>
  );
}
