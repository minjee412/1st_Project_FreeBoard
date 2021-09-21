import styled from '@emotion/styled';

export const Wrapper = styled.div`
width: 1200px;
	/* height: 1847px; */
	/* 화면 구성특성 상  길이가 늘어 날  수 있어, 따로 설정 하지 않는 것이 좋다. */
	border: 1px solid black;
	margin: 100px;
	padding-top: 80px;
	padding-bottom: 100px;
	padding-left: 102px;
	padding-right: 102px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: none;
	box-shadow: 0px 0px 10px gray;
`;
export const Title = styled.div`
	font-family: Arial, Helvetica, sans-serif;
	font-size: 36px;
	font-weight: bold;

	/* border: 1px solid black; */
`;

export const Error = styled.div`
	padding-top: 10px;
	font-size: 14px;
	color: red;
`

export const Writer_Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-top: 40px;

	/* border: 1px solid black; */
`;

export const Input_Wrapper = styled.div`
	padding-top: 40px;
	
	/* border: 1px solid blue; */
`;

export const Label = styled.div`
	padding-bottom: 16px;
	font-size: 16px;
	font-weight: 500;

	/* border: 1px solid black; */
`;

export const Writer = styled.input`
	width: 486px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
	width: 486px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Subject = styled.input`
	width: 996px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
	width: 996px;
	height: 480px;
	padding-left: 16px;
	padding: 14px;
	border: 1px solid #bdbdbd;
`;

export const Zipcode_Wrapper = styled.div`
	display: flex;
	flex-direction: row;

	/* border: 1px solid black; */
`;

export const Zipcode = styled.input`
	width: 77px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
	width: 124px;
	height: 52px;
	margin-left: 16px;
	background-color: black;
	cursor: pointer;
	color: white;
`;

export const Address = styled.input`
	width: 996px;
	height: 52px;
	margin-top: 16px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
	width: 996px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Image_Wrapper = styled.div`
	width: 996px;
	padding-top: 40px;

	/* border: 1px solid blue; */
`;

export const UploadButton = styled.button`
	width: 78px;
	height: 78px;
	background-color: #bdbdbd;
	margin-right: 24px;
	outline: none;
	border: none;
	cursor: pointer;	
	/* border: 1px solid green; */
`;

export const OptionWrapper = styled.div`
	width: 996px;
	padding-top: 40px;

	/* border: 1px solid black; */
`;

export const RadioButton = styled.input`
	cursor: pointer;
`;

export const RadioRabel = styled.label` //라벨이라는 타입도 있다는 걸 기억 하자 !
	margin-left: 8px;
	margin-right: 20px;
	font-weight: 500;
	cursor: pointer;
`;

export const Button_Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-top: 80px;

	/* border: 1px solid black; */
`;

export const SubmitButton = styled.button`
width: 179px;
	height: 52px;
	border: none;
	font-size: 16px;
	font-weight: 500;
	margin-left: 12px;
	margin-right: 12px;
	background-color: ${(props)=> props.isActive ? "#FFD600" : "grey"};
	cursor: pointer;
`;