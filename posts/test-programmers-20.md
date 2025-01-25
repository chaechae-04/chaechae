---
id : 'test-programmers-20'
title: '[프로그래머스 | 가장 먼 노드] Swift'
date: '2025-01-22'
excerpt: '그래프 Lv.3 [가장 먼 노드] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.<br>
노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.<br>
<br>

***

### 제한사항

* 노드의 개수 n은 2 이상 20,000 이하입니다.
* 간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
* vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.
<br>

***

## 입출력 예

|n|vertex|return|
|:-|:-|:-|
|6|\[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]|3|

<br>

## 풀이 과정

**사용한 알고리즘** <br>
DFS(실패) -> Dijkstra(실패) -> BFS(해결)

~~~
func solution(_ n:Int, _ edge:[[Int]]) -> Int {
        
    var graph: [[Int]] = [[Int]](repeating: [], count: n)
    var distances: [Int] = [Int](repeating: -1, count: n)
            
    // 그래프 생성
    for e in edge {
        let (from, to) = (e[0] - 1, e[1] - 1)
        // 양뱡향으로 그래프 추가
        graph[from].append(to)
        graph[to].append(from)
    }
        
    // queue 생성
    var queue = ArraySlice<Int>([])
        
    // 시작 노드 : 0
    queue.append(0)
    // 시작 노드 최단거리 = 0
    distances[0] = 0
        
    while !queue.isEmpty {
            
        // queue 꺼내기 (현재 노드 index)
        if let value = queue.first {
            
            // queue 슬라이싱
            queue = queue.dropFirst()
                
            // 인접한 노드 전부 탐색
            for i in graph[value] {
                
                // 아직 한번도 방문하지 않은경우
                if distances[i] != -1 { continue }
                
                // queue에 추가
                queue.append(i)
                // 최단거리 갱신
                distances[i] = distances[value] + 1
                
            }
        }
    }
        
    // 가장 큰 값을 가진 갯수
    let maximum = distances.max()!
    return distances.filter { $0 == maximum }.count
}
~~~
