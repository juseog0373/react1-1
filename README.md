# 김준석 202030207  

## 3월 20일 강의 내용
### 리액트의 장점
1. 빠른 업데이트와 렌더링 속도
    - 이것을 가능하게 하는 것이 Virtual DOM
    - DOM(Document Object Model)이란 XMl, HTML문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스
    - Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느려서 고안됨
    - DOM: 동기식, VDOM: 비동기식 렌더링  

    **비동기란?**  
    바뀐 부분만 찾아서 업데이트 한다
2. 컴포넌트 기반 구조
    - 리액트는 모든 페이지를 컴포넌트로 구성한다
    - 레고 블록을 조립하듯이 컴포넌트를 조립해서 웹사이트를 개발함
3. 재사용성
    - 반복적인 작업을 줄여주기 때문에 생상성을 높여줌
    - 유지보수가 용이
    - (주의) 재사용을 하려면 모듈의 의존성이 없어야함
4. 오픈소스
    - 메타에서 오픈소스 프로젝트로 관리하고 있음
5. 확장성
    - 리액트 네이티브라는 모바일 환경 UI 프레임워크를 사용하여 크로스플랫폼 모바일 앱을 만들 수 있음 

### 리액트의 단점
1. 방대한 학습량
2. 높은 상태 관리 복잡도

### 리액트 프로젝트 생성하기
```powershell
npx create-react-app [name]
```
### 리액트 디렉토리 구조
- public: 배포할 때 사용함(파비콘, 이미지, 로고 등)  
- App.js: 컴포넌트를 정의하는 파일(메인 컴포넌트), index.js에게 보냄
    ```js
    export default App;
    ```
    * export default가 있어야 컴포넌트인 것을 알 수 있다
- index.js: App.js에서 정의된 요소들을 html에 렌더링을 해주는 파일  

    ```js
    ReactDOM.createRoot(document.getElementById('root'));
    ```

## 3월 13일 강의 내용
### GitHub 사용법
1. github repository 생성
2. git config(user.name, user.email)
3. git staging, git commit, git push?   

#### Git Staging
변경된 수많은 파일 중 자신이 커밋(로컬 저장소)에 올리고 싶은 것들을 선택하는 과정이다.

#### Git Commit
스테이징 된 파일들을 로컬 저장소(.git)에 올려두는 것을 말한다.

#### Git Push   
로컬 저장소(.git)에 저장 되어 있는 커밋했던 파일들을 원격 저장소(github)에 올리는 것이다.

----

### 자바스크립트의 자료형
- var: 중복 선언 가능, 재할당 가능
- let: 중복 선언 불가능, 재할당 가능
- const: 중복 선언 불가능, 재할당 불가능
- Array type: 배열
- Object type: 객체를 다루를 자료형, key(키)와 value(값)으로 이루어진 집합  
(ex: JSON)   

### 자바스크립트의 연산자
- 대입, 산술, 대입+산술, 증감(postfix, prefix)
- 비교(관계), 동등/일치, 이진 논리(and, or), 삼항(조건부)   
### 💡 비교 연산자에서 '==' vs '==='
- ==: 값만 같으면 true
- ===: 값과 데이터 타입이 같으면 true


### 자바스크립트 함수 선언방법
일반적 함수 선언법
```js
function sum(a, b) {
    retrun a+b;
}
```
화살표 함수(익명함수)
```js
const multi = (a, b) => {
    return a*b;
}
```
----
### node.js 설치 후 버전 확인 방법
```zsh
node [-v]|[--version]
 npm
 npx
```