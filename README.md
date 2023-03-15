# 따라하며 배우는 리액트 A-Z 강의

## 1. To Do 앱 만들기
(https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8/dashboard)

------------

1. Drag and Drop
  + DragDropContext 안에 Droppable (Drop 가능한 공간) Draggable (Drag 가능한 요소)를 넣음
  + DragDropContext 의 onDragEnd 속성을 통해 Drag and Drop 이후 Event를 줄 수 있음

2. React.memo
  + 렌더링 최적화 가능
  + React.memo( 컴포넌트 선언부 ) 시, 다음 렌더링이 일어날 때 컴포넌트의 props가 같다면 리렌더링하지 않음

3. React.useCallback
  + 함수 생성 최적화 Hook
  + useCallback( 함수, 인수 리스트 ) 시, 인수 리스트의 값이 바뀔 때만 함수가 생성, 따라서 prop로 함수를 받는 자식 컴포넌트의 렌더링 최적화

4. React.useMemo
  + 함수 결과값 최적화 Hook
  + useMemo( 함수, 인수 리스트 ) 시, 인수 리스트의 값이 바뀔 때만 함수 결과값 계산
