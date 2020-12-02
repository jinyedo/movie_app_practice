# 준비

```
1. Node.js 설치
-> 설치했는지 확인하는 방법: node -v

2. npm 설치 확인: npm -v (Node.js를 설치하면 자동으로 npm 설치)
-> npm 업데이트 방법 : npm install -g npm

3. npx 설치: npm install npx -g

4. git 설치: https://git-scm.com/
-> 버전 확인: git --version

5. React App 만들기: npx create-react-app 파일명

6. pacage.json 17 - 18 라인 삭제
-> "test": "react-scripts test",
   "eject": "react-scripts eject"

7. yarn삭제 (yarn은 npm과 동일) 

8. npm start
```

# git에 등록하기

```
1. git init

2. github.con/new 접속 후 새로운 repository 생성
- react app 과 동일한 이름으로 생성 ex) movie_app_practice

3. 새로 만든 repository url을 복사 후
   git remote add origin 복사한 url
   ex) git remote add origin https://github.com/jinyedo/movie_app_practice.git

4. 파일 변경시 업데이트하기
git add .
git commit -m "변경 이름"
git push origin master
```

# 불필요 파일 삭제하기

```
1. scr >
    - App.js 
    - index.js
빼고 모두 삭제

2. index.js 수정

    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';

    ReactDOM.render(<App />, document.getElementById('root'));

3. App.js 수정

    import React from 'react';

    function App() {
    return <div className="App" />;
    }

    export default App;
```
---
# 노트

## 컴포넌트 만들기
```
※ conponent는 HTML을 반환하는 함수이다.
※ React Application은 한 번에 하나의 컴포넌트만 렌더링 할 수 있다.
   -> 오류 - ReactDOM.render(<App /><Potato />, document.getElementById('root'));

1. Potato.js 파일 만들기 (파일명은 자유)

2. 기본구조 만들기

    import React from 'react'

    function Potato() {
        return(
            <h1>I Love Potato</h1>
        );
    }

    export default Potato;

3. 사용할 곳에 임포트후 사용하기 ex) App.js에 사용

    import React from 'react';
    import Potato from './Potato'; // import 하기

    function App() {
    return (
        <div>
        <h1>Hello</h1>
        <Potato /> // 사용하기
        </div>
    );
    }

    export default App;
```

## array.map() 사용하여 배열 만들기
```
const food = ['kimchi', 'ramen', 'samgiopsal', 'chukumi', 'doncasu'];

food.map(function(current) {
return current + "♥";
})

=> ['kimchi♥', 'ramen♥', 'samgiopsal♥', 'chukumi♥', 'doncasu♥']
```

## props 사용하기
```
- props는 동적 데이터이다.
- props는 컴포넌트의 인자(argument)로 넘어간다.
- Food 컴포넌트 사용시 props 속성을 모두 가져온다.
- props는 각각 고유한 값을
```

## props가 잘 넘어왔는지 확인하는 방법
```
1. props types 설치하기: npm i prop-types
   prop-types는 내가 전달받은 props가 원하는 props인지 확인해 준다. 
   ex) 프롭스 값을 잘못 보내거나 다른 파일에 있을 때 이것들을 확인해준다.

2. 임폴트 하기: import PropTypes from 'prop-types';

3. props가 올바른 값으로 넘어갔는지 확인
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  
  // isRequired를 삭제하면 값이 안들어가도 오류가 발생하지 않는다.
  // isRequired가 없으면 필수값이 아니다.
  rating: PropTypes.number
}

