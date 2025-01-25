---
id : 'test-programmers-14'
title: '[프로그래머스 | 네트워크] Swift'
date: '2025-01-20'
excerpt: '(DFS/BFS) Lv.3 [네트워크] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.<br>
컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.<br>
<br>

***

### 제한사항

* 컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
* 각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
* i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
* computer[i][i]는 항상 1입니다.

<br>

***

## 입출력 예

|n|computers|result|
|3|[[1, 1, 0], [1, 1, 0], [0, 0, 1]]|2|
|3|[[1, 1, 0], [1, 1, 1], [0, 1, 1]]|1|

<br>

## 풀이 과정

var isVisited: \[Bool] = \[Bool]() 을 전역변수로 선언해 모든 탐색에 하나의 방문 조건만을 사용하고, dfs 호출 조건을 isVisited\[i] 로 사용해 한번 탐색 할 때 answer 를 +1 해주는식으로, 인접한 위치에 붙어있는 네트워크를 감지

~~~
import Foundation

var isVisited: [Bool] = [Bool]()
    
func solution(_ n:Int, _ computers:[[Int]]) -> Int {
        
    var answer: Int = 0
    isVisited = [Bool](repeating: true, count: computers.count)
        
    for i in 0..<computers.count {
        if isVisited[i] {
            dfs(computers, i)
            answer += 1
        }
    }
        
    return answer
}
    
func dfs(_ computers:[[Int]], _ i: Int) {
    isVisited[i] = false
    for idx in 0..<computers[i].count {
        if isVisited[idx] {
            if computers[i][idx] == 1 {
                dfs(computers, idx)
            }
        }
    }
}
~~~