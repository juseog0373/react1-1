# 김준석 202030207  


## 5월 1일 강의 내용
### 훅의 규칙
- 무조건 최상위 레벨에서만 호출해야 함
    - 반복문이나 조건문 또는 중첩된 함수들 안에서 호출하면 안됨
    -컴포넌트가 렌더링될 때마다 매번 같은 순서로 호출되어야 함
- 리액트 함수 컴포넌트에서만 훅을 호출해야 함
    - 훅은 리액트 함수 컴포넌트에서 호출하거나 직접 만든 커스텀 훅에서만 호출할 수 있음

### 이벤트 핸들링
#### 이벤트 처리하기
- DOM에서 클릭 이벤트 처리하는 예제 코드
```js
<button onClick="activate()">
    Activate
</button>
```
- React에서 클릭 이벤트 처리하는 예제 코드
```jsx
<button onClick={activate}>
    Activate
</button>
```
어떤 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 **이벤트 핸들러**라 한다.
## 4월 17일 강의 내용
### 훅
- 훅이란
    - 리액트의 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 것
- useState()
    - state를 사용하기 위한 훅
    - 함수 컴포넌트에서는 기본적으로 state라는 것을 제공하지 않음
    - 사용법
        ```jsx
        const [변수명, set함수명] = useState(초깃값);
        ```
- useEffect()
    - 사이드 이펙트를 수행하기 위한 훅
    - 사이드 이펙트란 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업
    - useEffect() 훅만으로 클래스 컴포넌트의 생명주기 함수들과 동일한 기능을 수행할 수 있음
    - 사용법
        ```jsx
        useEffect(이펙트 함수, 의존성 배열)
        // 의존성 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행
        // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행
        ``` 
- useMemo()
    - Memorized value를 리턴하는 훅
    - 연산량이 높은 작업이 매번 렌더링될 때마다 반복되는 것을 피하기 위해 사용
    - 렌더링이 일어나는 동안 실행되므로 렌더링이 일어나는 동안 실행돼서는 안될 작업을 useMemo()에 넣으면 안됨
- useRef()
    - 레퍼런스를 사용하기 위한 훅
    - *레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미
    - 매번 렌더링될 때마다 항상 같은 레퍼런스 객체를 반환

## 4월 3일 강의 내용
### Props
- 리액트 컴포넌트의 속성
- 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체  

### Props의 특징
- 읽기 전용
- props는 바꿀 수 없고, 같은 props가 들어오면 항상 같은 엘리먼트를 리턴해야 한다.

### Props 사용법
- 키-값 쌍의 형태로 컴포넌트에 props를 넣을 수 있다
- 문자열 외에 정수, 변수, 그리고 다른 컴포넌트 등이 들어갈 경우 중괄호를 사용하여 감싸줘야 한다

### 컴포넌트의 종류
- 함수 컴포넌트
```jsx
function Welcome(props) {
    return <h1>안녕, {props.name} </h1>
}
```
- 클래스 컴포넌트
```jsx
class Welcome extends React.Component {
    render() {
        return <h1>안녕, {this.props.name}</h1>
    }
}
```
### 컴포넌트 네이밍 규칙
컴포넌트의 이름은 항상 대문자로 시작해야한다.
```jsx
// HTML div 태그로 인식
const element = <div/>
// Welcome이라는 리액트 컴포넌트로 인식
const element = <Welcome name='리액트'/> 
```

### 컴포넌트 합성
- 여러개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것
- 리액트에서는 컴포넌트안에 또 다른 컴포넌트를 사용할 수 있기때문에 복잡한 화면을 여러개의 컴포넌트로 나누어 구현이 가능하다

### 컴포넌트 추출
- 복잡한 컴포넌트를 쪼개서 여러개의 컴포넌트로 나누는 것
- 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것
- 기능 단위로 구분하는 것이 좋고, 나중에 곧바로 재사용이 가능한 형태로 추출함

## State란
- 리액트 컴포넌트의 상태를 의미한다
- 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미한다
- 정확히는 리액트 컴포넌트의 **변경가능한 데이터**를 의미한다
- State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 한다

## State의 특징
- 리액트만의 특별한 형태가 아니라 자바스크립트 객체이다
- 직접적인 변경이 불가능하다
- state를 변경하고자할때 setState() 함수를 이용해야 한다

## 컴포넌트의 생명주기
1. constructor가 실행되면서 컴포넌트 생성
2. 생성 직후 compenentDidMount() 함수 호출
3. 컴포넌트가 소멸하기 전까지 여러번 랜더링 함
4. 렌더링이 끝나면 compenetDidUpdate() 함수 호출
5. 컴포넌트가 언마운트(종료) 되면 componentWillUnmount() 함수 호출

## 3월 27일 강의 내용
### JSX란?
JS + XML(HTML)을 합친 자바스크립트 확장문법이다.

### JSX의 역할
- JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환함.
- React가 createElement함수를 사용하여 자동으로 자바스크립트로 변환해줌.
- JSX는 가독성을 높여주는 역할.

### JSX의 장점
- XSS, Injection Attack 방어 가능
- 긴 줄에 자바스크립트 코드를 간결하게 줄일 수 있음.

### JSX 코드 작성해보기
```jsx
export default function Book(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
            <h1>{`이 책의 페이지 수는 ${props.numOfPage} 입니다. `}</h1>
        </div>
    )
}
```
```jsx
export default function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={400} />
            <Book name="처음 만난 AWS" numOfPage={500} />
            <Book name="처음 만난 리액트" numOfPage={600} />
        </div>
    )
}
```
```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Book /> */}
    <Library />
  </React.StrictMode>
);
```
### 엘리먼트의 정의
- 엘리먼트는 리액트 앱을 구성하는 요소
- 웹 사이트에서 DOM 엘리먼트이며, HTML 요소를 의미함

### 리액트 엘리먼트 vs DOM 엘리먼트
- 리액트 엘리먼트는 Virtual DOM 형태이다
- DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무겁다
- 리액트 엘리먼트는 변화한 부분만 갖고 있어 가볍다  

### 엘리먼트의 생김새
- 리액트 엘리먼트는 자바스크립트 객체 형태로 존재
- 컴포넌트, 속성 및 모든 자식들을 포함하는 일반 JS 객체

### 엘리먼트의 특징
- 리액트 엘리먼트의 가장 큰 특징은 **불변성**
- 한번 생성된 엘리먼트의 자식, 속성(attr)을 바꿀 수 없다

### Root DOM node
```html
<div id="root"></div>
```
```jsx
const element = <h1>안녕, 리액트</h1>
ReactDOM.render(element, docutment.getElementById('root'))
```

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