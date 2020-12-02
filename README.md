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