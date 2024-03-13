# 김준석 202030207  

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