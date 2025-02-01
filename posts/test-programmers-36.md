---
id : 'test-programmers-36'
title: '[프로그래머스 | 공 이동 시뮬레이션] Swift'
date: '2025-02-02'
excerpt: '월간 코드 챌린지 시즌3 [공 이동 시뮬레이션] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

n행 m열의 격자가 있습니다. 격자의 각 행은 0, 1, ..., n-1번의 번호, 그리고 각 열은 0, 1, ..., m-1번의 번호가 순서대로 매겨져 있습니다. 당신은 이 격자에 공을 하나 두고, 그 공에 다음과 같은 쿼리들을 날리고자 합니다.<br>
* 열 번호가 감소하는 방향으로 dx칸 이동하는 쿼리 (query(0, dx))
* 열 번호가 증가하는 방향으로 dx칸 이동하는 쿼리 (query(1, dx))
* 행 번호가 감소하는 방향으로 dx칸 이동하는 쿼리 (query(2, dx))
* 행 번호가 증가하는 방향으로 dx칸 이동하는 쿼리 (query(3, dx))
<br>
단, 공은 격자 바깥으로 이동할 수 없으며, 목적지가 격자 바깥인 경우 공은 이동하다가 더 이상 이동할 수 없을 때 멈추게 됩니다. 예를 들어, 5행 × 4열 크기의 격자 내의 공이 3행 2열에 있을 때 query(3, 10) 쿼리를 받은 경우 공은 4행 2열에서 멈추게 됩니다. (격자의 크기가 5행 × 4열이므로, 0~4번 행과 0~3번 열로 격자가 구성되기 때문입니다.)<br>
격자의 행의 개수 n, 열의 개수 m, 정수 x와 y, 그리고 쿼리들의 목록을 나타내는 2차원 정수 배열 queries가 매개변수로 주어집니다. n × m개의 가능한 시작점에 대해서 해당 시작점에 공을 두고 queries 내의 쿼리들을 순서대로 시뮬레이션했을 때, x행 y열에 도착하는 시작점의 개수를 return 하도록 solution 함수를 완성해주세요.<br>
<br>

***

### 제한사항

* 1 ≤ n ≤ 109
* 1 ≤ m ≤ 109
* 0 ≤ x < n
* 0 ≤ y < m
* 1 ≤ queries의 행의 개수 ≤ 200,000
    * queries의 각 행은 [command,dx] 두 정수로 이루어져 있습니다.
    * 0 ≤ command ≤ 3
    * 1 ≤ dx ≤ 109
    * 이는 query(command, dx)를 의미합니다.
    <br>

***

## 입출력 예

|n|m|x|y|queries|result|
|:-|:-|:-|:-|:-|:-|
|2|2|0|0|\[[2,1],[0,1],[1,1],[0,1],[2,1]]|4|
|2|5|0|1|\[[3,1],[2,2],[1,1],[2,3],[0,1],[2,1]]|2|

<br>

## 풀이 과정

개 쌉 어렵네 진짜

~~~
import Foundation

func solution(_ n:Int, _ m:Int, _ x:Int, _ y:Int, _ queries:[[Int]]) -> Int64 {
    var answer: Int64 = 0
    var stack = queries
    // x1 , y1 : square left top position
    // x2 , y2 : square right bottom position
    var (x1, y1, x2, y2) = (x, y, x, y)
    
    while !stack.isEmpty {
        let pop = stack.popLast()!
        let (dir, dist) = (pop[0], pop[1])
        
        switch dir {
            case 0: // left
                if y1 == 0 {
                    y2 += dist
                } else {
                    y1 += dist
                    y2 += dist
                }
            case 1: // right
                if y2 == m - 1 {
                    y1 -= dist
                } else {
                    y1 -= dist
                    y2 -= dist
                }
            case 2: // top
                if x1 == 0 {
                    x2 += dist
                } else {
                    x1 += dist
                    x2 += dist
                }
            case 3: // bottom
                if x2 == n - 1 {
                    x1 -= dist
                } else {
                    x1 -= dist
                    x2 -= dist
                }
            default: 
                break
        }
        
        if x1 >= n || x2 < 0 || y1 >= m || y2 < 0 { return 0 }
        
        x1 = max(x1, 0)
        y1 = max(y1, 0)
        x2 = min(x2, n - 1)
        y2 = min(y2, m - 1)
    }
    
    let size = (x2 - x1 + 1) * (y2 - y1 + 1)
    
    return Int64(size)
}
~~~