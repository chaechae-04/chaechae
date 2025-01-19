---
id : 'test-programmers-15'
title: '[프로그래머스 | 섬 연결하기] Swift'
date: '2025-01-20'
excerpt: '탐욕법(Greedy) Lv.3 [섬 연결하기] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

n개의 섬 사이에 다리를 건설하는 비용(costs)이 주어질 때, 최소의 비용으로 모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용을 return 하도록 solution을 완성하세요.<br>
다리를 여러 번 건너더라도, 도달할 수만 있으면 통행 가능하다고 봅니다. 예를 들어 A 섬과 B 섬 사이에 다리가 있고, B 섬과 C 섬 사이에 다리가 있으면 A 섬과 C 섬은 서로 통행 가능합니다.<br>
<br>

***

### 제한사항

* 섬의 개수 n은 1 이상 100 이하입니다.
* costs의 길이는 ((n-1) * n) / 2이하입니다.
* 임의의 i에 대해, costs[i][0] 와 costs[i] [1]에는 다리가 연결되는 두 섬의 번호가 들어있고, costs[i] [2]에는 이 두 섬을 연결하는 다리를 건설할 때 드는 비용입니다.
* 같은 연결은 두 번 주어지지 않습니다. 또한 순서가 바뀌더라도 같은 연결로 봅니다. 즉 0과 1 사이를 연결하는 비용이 주어졌을 때, 1과 0의 비용이 주어지지 않습니다.
* 모든 섬 사이의 다리 건설 비용이 주어지지 않습니다. 이 경우, 두 섬 사이의 건설이 불가능한 것으로 봅니다.
* 연결할 수 없는 섬은 주어지지 않습니다.
<br>

***

## 입출력 예

|n|costs|result|
|:-|:-|:-|
|4|\[[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]|4|

<br>

## 풀이 과정

prim 알고리즘 사용 <br>
<br>

~~~
import Foundation

func solution(_ n:Int, _ costs:[[Int]]) -> Int {
            
    var answer: Int = 0
    var connected = Set<Int>([0])
        
    while connected.count < n {
        var minCost = Int.max
        var nextEdge = [-1, -1, -1]
            
        for edge in costs {
            let (a, b, cost) = (edge[0], edge[1], edge[2])
                
            if (connected.contains(a) && !connected.contains(b)) || (connected.contains(b) && !(connected.contains(a))) {
                if cost < minCost {
                    minCost = cost
                    nextEdge = edge
                }
            }
        }
            
        connected.insert(nextEdge[0])
        connected.insert(nextEdge[1])
        answer += nextEdge[2]
    }
            
    return answer
}
~~~