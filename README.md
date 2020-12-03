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
- 컴포넌트 사용시 props 속성을 모두 가져온다.
- props는 각각 고유한 값을 가져야한다.
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
```

## state 사용하기
```
state가 필요하지 않은 경우 class형 컴포넌트는 필요없다.
대신 function형 컴포넌트를 사용하면 된다.

1. "props"는 동적 데이터를 다루지 못한다.

2. "state"는 동적 데이터를 다룰 때 사용한다

3. "state"를 사용하기 위해서는 클래스형 컴포넌트를 사용해야한다.

4. "state"는 객체 형테의 데이터이다.

5. 클래스형 컴포넌트가 될려면 리엑트가 제공하는 Component를 상속받아야 한다.
   상속받은 후 컴포넌트가 JSX를 반환해야하는데 클래스 형태이기 때문에 반환을 할 수 없어 render()함수를 사용해 리턴한다.

6. 리엑트는 render() 함수를 직접 실행시켜주기 때문에 우리가 실행하지 않아도 된다.

7. "state"를 직접 변경할 수 없다: 원래 리엑트는 "state"가 변경되면 render()를 다시 실행하여 변경된 "state"를 화면에 보여주지만 
                                 "state"를 직접 변경하면 render() 함수를 다시 실행해 주지 않음

8. setState() 함수를 사용하면 "state"를 변경할 수 있고. 바뀐 "state"의 데이터만 업데이트한다.
```

## 컴포넌트 생명주기 - life cycle method
```
1. constructor() - 생성자 | 제일먼저 실행됨
2. componentDidMount() - render() 다음으로 실행
3. 실행순서: constructor() -> render() -> componentDidMount() 

4. componentDidUpdate() - 화면 업데이트시 실행 
5. componentWillMount() - 컴포넌트 종료시 실행
```

## Date fetch

```
[ JavaScript로 data fetch하기 - 비추 ]

    // reder()이 실행된 다음 호출
    componentDidMount() {
        // 3초후 로딩 끝내기
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 3000);
    }

[ Axios로 data fetch하기 - 추천 ]

- 우리는 https://yts.mx/api 를 사용할것이다.
  -> 원래는 사이트 접속 후 List Movies의 https://yts.mx/api/v2/list_movies.json 를 사용해야하지만 불법사이트라 위치가 계속 변경됨
  -> 그래서 https://yts.mx/api/v2/list_movies.json 를 사용한다.

   [ 로딩방법 ]
   1. npm install axios (axios 다운로드)
   2. axios import - import axios from 'axios';
   3. componentDidMount() 안에서 axios.get() 호출

- 데이터 로딩시 시간이 필요하다면 async, await 키워드 사용
   getMovies = "async" () => {
      const movies = "await" axios.get('https://yts-proxy.now.sh/list_movies.json');
   }

   componentDidMount() { // 영화 데이터 로딩
      this.getMovies();
```

