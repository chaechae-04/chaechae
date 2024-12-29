---
id : 'study-breadth-first-search'
title: '[알고리즘] 너비우선탐색(BFS, Breadth First Search)'
date: '2024-12-28'
excerpt: '너비우선탐색 알고리즘에 관한 공부 글입니다.'
type: 'study'
---

## 너비우선탐색 (BFS, Breadth First Search)
루트노드 (혹은 다른 임의의 노드)에서 시작해서 인접한 노드를 먼저 탐색하는 방법<br>

<ul>
    <li>시작 정점에서 가까운 정점을 먼저 방문하고 멀리 떨어져 있는 정점을 방문하는 순회방법</li>
    <li>두 노드 사이의 최단 경로 혹은 임의의 경로를 찾고싶을 때 이 방법을 선택한다.</li>
</ul>

### 탐색과정
<ol> i = 1
    <li>깊이가 i 인 모든 노드를 방문한다.</li>
    <li>깊이가 i + 1 인 모든 노드를 방문한다.</li>
    <li>모든 노드를 방문할 때 까지 2단계 과정을 반복한다.</li>
</ol>

<br>

### 장점
<ul>
    <li>답이 되는 경로가 여러개인 경우에도 최단경로임을 보장한다.</li>
    <li>최단경로가 존재한다면, 어느 한 경로가 무한히 깊어진다 해도 최단 경로를 반드시 찾을 수 있다.</li>
    <li>노드의 수가 적고 깊이가 얕은 해가 존재할 때 유리하다.</li>
</ul>

### 단점
<ul>
    <li>재귀호출을 사용하는 <a href="/pages/posts/depth-first-search" style="text-decoration-line: none; font-weight: bold">DFS</a>와 달리 큐(Queue)를 이용해 다음에 탐색할 노드를 저장하기 때문에 노드의 수가 많을수록 필요없는 노드들을 저장해야한다. (더 큰 저장공간 필요)</li>
    <li>노드의 수가 늘어나면 탐색해야 하는 노드가 많아지기 때문에 비효율적이다.</li>
</ul>

### 특징
<ul>
    <li>직관적이지 않은 면이 있다.</li>
    <li>BFS는 재귀적으로 동작하지 않는다.</li>
    <li>알고리즘을 구현할 때 어떤 노드를 방문했는지 반드시 검사해야 한다. (검사하지 않을 경우 무한 루프에 빠질 수 있다.)</li>
    <li>BFS는 방문한 노드들을 차례로 저장한 후 꺼낼 수 있는 자료구조인 큐(Queue)를 사용한다.(선입선출(FIFO)원칙으로 탐색한다.)</li>
    <li>'Prim', 'Dijkstra' 알고리즘과 유사하다.</li>
</ul>

***

## 문제
정점이 정수 1~9 인 그래프 G 가 주어질 때, 1 에서 9 까지의 최단거리를 출력하라.

## 입력
각 줄에 그래프의 연결을 입력한다. (0 0 이 입력되면 종료)

## 출력
첫번째 줄에 1 에서 9 까지의 최단거리를 출력한다.

||예제 입력|예제출력|
|:-:|:-|:-|
|1|1 3<br>1 5<br>2 4<br>3 4<br>3 8<br>4 6<br>4 7<br>5 7<br>6 8<br>7 9<br>0 0|3|
|2|1 4<br>1 6<br>2 3<br>2 4<br>2 6<br>3 5<br>5 7<br>6 7<br>7 8<br>8 9<br>0 0|4|

<br>

```
# 너비우선탐색 (BFS, Breadth First Search)

# 너비우선탐색
def bfs(start, target, graph):
    # (현재 정점, 거리)
    queue = [(start, 0)]
    visited = set([start])

    while queue:
        # 리스트의 첫 번째 요소 꺼내기 (제거)
        node, distance = queue.pop(0)

        # 목적지 도착
        if (node == target):
            return distance
        
        # 다음 깊이 탐색
        for neighbor in graph[node]:
            if (neighbor not in visited):
                visited.add(neighbor)
                queue.append((neighbor, distance + 1))

    # 전체 탐색 후 결과가 없다면 -1
    return -1

# 그래프 생성
graph = {}
for i in range(1, 10):
    graph[i] = []

# 그래프 입력
while True:
    u, v = map(int, input().split())
    if (u == 0 and v == 0):
        break

    graph[u].append(v)
    graph[v].append(u)

print(bfs(1, 9, graph))
```

<br>

모든 정점을 한 번씩 방문하고, 각 정점에 연결된 간선을 검사하기 떄문에 시간 복잡도는 O(v + e) 이다. /* v : 정점의 수 , e : 간선의 수 */ <br>
인접 행렬을 사용할 경우 O(v^2) 로도 표현될 수 있다.

<br>

## 관련 포스트

<ul>
    <li><a href="/pages/posts/brute-force" style="text-decoration-line: none; font-weight: bold">브루트포스 알고리즘 <<</a></li>
    <li><a href="/pages/posts/sequential-search" style="text-decoration-line: none; font-weight: bold">순차탐색 <<</a></li>
    <li><a href="/pages/posts/depth-first-search" style="text-decoration-line: none; font-weight: bold">깊이우선탐색 <<</a></li>
    <li><a href="/pages/posts/back-tracking" style="text-decoration-line: none; font-weight: bold">백트래킹 <<</a></li>
</ul>
