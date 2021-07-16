# [원티드 프리온보딩코스 사전과제]

### 과제 내용
- 원티드GNB(Global Navigation Bar) 구현

### 구현 목록

- 반응형 (구현완료) - 3개의 크기로 구분해서 (MobileSize, MiddleSize, BigSize) 웹 반응형 제작
- 메뉴 - 원티드 사이트에 있는 리스트들을 직접 하드코딩하여 최대한 비슷하게 제작
- 메인 컨텐츠 - 메뉴 영역 이외(dim 처리된 부분) 첫번 째 특정 기업의 사진 컨테이너 제외 구현하지 않음
- 폰트 - 원티드에서 사용한 'icomoon' 폰트를 다운로드하여 css style에 적용 (하지만, 원티드 icomoon style과 본인이 다운받은 icomoon style이 다름. 다운된 폰트 구현에 포커스를 맞춤)

### 사용한 라이브러리
- React-Responsive
- 해당 라이브러리 사용이유: 반응형 웹을 제작할 때 React-Responsive 라이브러리에는 useMediaQuery라는 훅을 사용할 수 있음. useMediaQuery는 width에따라서 true 혹은 false값을 반환시켜주고 조건부 렌더링을 사용하여서 더 편하고 깔끔하게 반응형을 제작할 수 있어서 사용하였습니다.
- 전통적인 @media 방법으로도 구현 가능합니다.
- ![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/65102820/126004761-ecca9922-94c8-408f-b26e-99cb4cefea9c.gif)
