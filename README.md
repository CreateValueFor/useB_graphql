# mini-NodeServer-Sequelize-TypeScript-GraphQL

기본 GraphQL로 세팅된 Express 서버 입니다.

### 서버 환경

- Sequelize
- Typescript
- GraphQL

## 코드 구성

- 시퀄라이즈를 이용한 MySQL DB 연동
- GraphQL 기본 세팅 ( 모델, 리졸버)

## 실행 방법

`npm install` : 프로젝트에 필요로 한 라이브러리 설치
`npm start` : Express 서버 실행

## 기타 사항
## 현재 반영되지 않고 있음 수정 필요!!
`.env` 파일을 생성하여 DB 정보(DB_NAME, DB_USER, DB_PASSWORD)를 입력하여 사용, 또는 `/server.ts` 내 DB 연동 부분에서 DB 정보를 입력하여 사용 가능.

## 패키지 설명
src 파일구조 
- controller - resolver에서 쓸 함수 모듈들이라고 생각하면 되는데 현재는 가독성을 위해 사용하지 않기로 결정

- models - mysql DB 정의 

- resolver - 각 query mutation에 어떤 활동을 할 것인지 정의 

- schema - graphql용 타입 선언 파일

schema.ts - graphql 에서 정의한 schema와 resolver를 Typescript환경에서 쓸 수 있도록 모아주는 역할

server.ts - 서버 기본 세팅 - 현재 MySQL  접근 키가 하드코딩되어있기 때문에 .env파일을 활용하여 분리 필요
