---
id : 'depth-first-search'
title: '[알고리즘] 깊이우선탐색(DFS, Depth First Search)'
date: '2024-12-27'
excerpt: '깊이우선탐색 알고리즘에 관한 공부 글입니다.'
type: 'study'
---

## 깊이우선탐색 (DFS, Depth First Search)
트리나 그래프를 탐색하는 기법중 하나로, 루트노드 (혹은 다른 임의의 노드)에서 시작하여 다음 분기로 넘어가기전에 해당 분기를 완벽하게 탐색하는 방법이다. <br>

### 탐색과정
<ol>
    <li>현재 노드를 방문한 것으로 표시</li>
    <li>방문표시가 안된 가장 인접한 정점 탐색</li>
    <li>방문할 정점이 없으면 이전 정점으로 백트래킹</li>
    <li>모든 정점을 방문할때까지 반복</li>
</ol>

<div class="markdown">
    <div class="img">
        <img src="/imgs/DFS/DFS_1.jpeg" alt="DFS img 1" />
        <div class="explanation text-center">
            2진 트리 구조
        </div>
    </div>
</div>

<br>

이와 같은 2진 트리를 DFS 방식으로 탐색한다면, 탐색 순서는

<br>

<div class="markdown">
    <div class="img">
        <img src="/imgs/DFS/DFS_2.jpeg" alt="DFS img 2" />
        <div class="explanation text-center">
            DFS 탐색 순서
        </div>
    </div>
</div>

<br>

가 된다. <br>
적어놓고 보니까 너무 어지럽긴 한데, 트리를 보면서 천천히 순서를 따라가보면 탐색방법은 단순하다. <br>
자식노드가 있다면 왼쪽의 자식노드로, 자식노드가 없다면 다시 부모노드로 돌아가고, 다시 자식노드가 있는지를 검사하는걸 반복한다.<br>

<br>

다른 예시로는 **미로 탐색**이 있다. <br>

**ex) 미로탐색 :** 막다른길이 나올때까지 전진하다가 막다른길이 나오면 다시 가장 가까운 갈림길로 돌아가서 다른길로 가는걸 출구가 나올때까지 반복 <br>

### 장점
<ul>
    <li>현재 순환중인 정점만 저장하는 스택 데이터 구조를 사용하기 때문에 BFS에 비해 메모리공간을 덜 차지한다.</li>
    <li>목표가 특정 정점에 최대한 빨리 도달하는 것일 때 유용하다.</li>
    <li>목표가 깊은 단계에 있을수록 유리하다.</li>
</ul>


### 단점
<ul>
    <li>순환 그래프일 경우 DFS가 무한 루프에 빠질 수 있다.</li>
    <li>찾은 해가 최단 경로라는 보장이 없다.</li>
</ul>

### 특징
<ul>
    <li>자기 자신을 호출하는 <b>순환 알고리즘 형태</b>를 가지고 있다.</li>
    <li><b>전위순환</b>을 포함한 다른 형태의 트리 순회는 모두 DFS의 한 종류이다.</li>
    <li>알고리즘을 구현할 때 어떤 노드를 방문했었는지 여부를 반드시 검사해야 한다. (검사하지 않을 경우 무한 루프에 빠질 수 있다.)</li>
</ul>

***

## 문제
트리 T 와 정수 N 이 주어질 때, N 이 T 에 있을경우 N 의 Level을, 없을경우 -1을 출력하라.

## 입력
첫번째 줄에 N을, 이후에는 트리 T의 구조가 주어진다.

## 출력
첫번째 줄에 N이 존재할 경우 N의 Level을, 존재하지 않을 경우 -1을 출력한다.

<br>

||에제 입력|예제 출력|
|:-:|:-|:-|
|1|8<br>0 1<br>0 2<br>1 3<br>1 4<br>2 5<br>2 6<br>3 7<br>4 8<br>5 9<br>7 10|3|
|2|1<br>0 1<br>0 2<br>1 3<br>1 4<br>2 5<br>2 6<br>3 7<br>4 8<br>5 9<br>7 10|1|
|3|11<br>0 1<br>0 2<br>1 3<br>1 4<br>2 5<br>2 6<br>3 7<br>4 8<br>5 9<br>7 10|-1|

<br>

```
# 깊이우선탐색 (DFS, Depth First Search)

# 깊이우선탐색 함수
def DFS(depth, visited, tree, search_data):
    
```

<br>

## 관련 포스트

<ul>
    <li><a href="/pages/posts/brute-force" style="text-decoration-line: none; font-weight: bold">브루트포스 알고리즘 <<</a></li>
    <li><a href="/pages/posts/sequential-search" style="text-decoration-line: none; font-weight: bold">순차탐색 <<</a></li>
    <li><a href="/pages/posts/breadth-first-search" style="text-decoration-line: none; font-weight: bold">너비우선탐색 <<</a></li>
    <li><a href="/pages/posts/back-tracking" style="text-decoration-line: none; font-weight: bold">백트래킹 <<</a></li>
</ul>

