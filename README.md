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

## 리액트 라우터(React Router) -> react-router-dom
```
새로운 페이지를 로드하지 않고 
하나의 페이지 안에서 필요한 데이터만 가져오는 형태를 가집니다. 
사용자가 회원가입 버튼을 눌렀을 때, 회원가입에 대한 데이터 자료를 렌더링하는 방식입니다.

1. npm install react-router-dom

2. import 하기 - import { HashRouter, Route } from 'react-router-dom';
   (HashRouter 말고도 다른 라우터 들도 있다.)

3. 사용하기
ex)
    Route에는 2가지 props가 필요
    1. 렌더링할 스크린 = path
    2. 어떤것을 할지 = component
    <HashRouter>
        // /about로 가면 {About}를 실행
        <Route path="/about" component={About} />
    </HashRouter>


※주의사항 - React는 지나간 url을 모두 보여준다.

- /about 로 접속시 "<h1>About</h1>" 만 보여주지만

- /home/introduction로 접속하면 지나온 /home의 "<h1>Home</h1>" 와
  /home/introduction의 "<h1>introduction</h1>이 겹쳐보인다.

- /home 으로만 접속시 "<h1>Home</h1>" 만 보임

    <HashRouter>
        <Route path="/home"><h1>Home</h1></Route>

        <Route path="/home/introduction"><h1>introduction</h1></Route>

        <Route path="/about"><h1>About</h1></Route>
    </HashRouter>

[ 해결방법 ]
exact={true} Props 추가하기
- exact={true} 를 추가하면 오직 해당 url일때만 랜더링 해준다.

    <HashRouter>
        <Route path="/home" exact={true} ><h1>Home</h1></Route>

        <Route path="/home/introduction"><h1>introduction</h1></Route>

        <Route path="/about"><h1>About</h1></Route>
    </HashRouter>

```

## Navigation 만들기
```
- <a> 태그로 만들면 클릭시마다 전체 페이지가 새로고침된다. (문제발생)
ex) 
    <a href='/'>Home</a>
    <a href='/about'>About</a>


- 그래서 <a> 태그 대신 Link 사용
1. import 하기 - import { Link } from 'react-router-dom';

2. 사용하기
ex)
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>

※주의사항 - Router 밖에서 Link를 사용할 수 없다.
ex)
    <Navigation /> - 오류발생
    <HashRouter>
        // 여기에 있어야함
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
    </HashRouter>
```

## route props
```
- Router 안의 Route 들은 기본적으로 pops를 갖는다.
```

## 만든 코드 cloud에 올리기
```
1. ph-pages 다운로드: npm i gh-pages (만든 웹사이트를 gitnub의 github page 도메인에 나타나게 해준다.)

2. build 파일 다운로드 - rpm run build

3. package.json 파일 수정

    {
    "name": "movie_app_practice",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@testing-library/jest-dom": "^5.11.6",
        "@testing-library/react": "^11.2.2",
        "@testing-library/user-event": "^12.3.0",
        "axios": "^0.21.0",
        "gh-pages": "^3.1.0",
        "prop-types": "^15.7.2",
        "react": "^17.0.1",
        "react-dom": "^17.0.1",
        "react-scripts": "4.0.1",
        "web-vitals": "^0.2.4"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",

        // 여기 2줄 추가
        "deploy": "gh-pages -d build", 
        "predeploy": "npm run build"

    },
    "eslintConfig": {
        "extends": [
        "react-app",
        "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
        ],
        "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
        ]
    },
    "homepage": "https://jinyedo.github.io/movie_app_practice/" // 여기 추가
    }

4. npm run deploy

    deploy를 호출할때마다

    npm은 predeploy를 먼저 호출시킨다. -> predeploy는 npm run build 를 실행
    build는 build script를 호출 
    script는 우리에게 folder(build) 를 준다. 그후 predeploy는 종료

    그리고 나서 남은 deploy는 gh-pages를 호출하고
    build 폴더를 업로드한다.

5. 업데이트가 있을때 마다 npm run deploy를 실행
```
