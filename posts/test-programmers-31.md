---
id : 'test-programmers-31'
title: '[프로그래머스 | 여행경로] Swift'
date: '2025-01-27'
excerpt: 'DFS/BFS Lv.3 [여행경로] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.<br>
항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.<br>
<br>

***

### 제한사항

* 모든 공항은 알파벳 대문자 3글자로 이루어집니다.
* 주어진 공항 수는 3개 이상 10,000개 이하입니다.
* tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
* 주어진 항공권은 모두 사용해야 합니다.
* 만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
* 모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.

<br>

***

## 입출력 예

|tickets|result|
|:-|:-|
|\[["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]|["ICN", "JFK", "HND", "IAD"]|
|\[["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]|["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]|

<br>

## 풀이 과정

~~~
import Foundation

func solution(_ tickets:[[String]]) -> [String] {        
    var dict = [String:[(destination:String,index:Int)]]()
    var answer = [String]()
    let max_cnt: Int = tickets.count
        
    for (index, ticket) in tickets.enumerated() {
        dict[ticket[0], default: []].append((ticket[1], index))
        dict[ticket[0]]?.sort { $0.0 < $1.0 }
    }
        
    func dfs(_ depth: Int, _ current: String, _ path: [String], _ isVisited: inout [Bool]) {
            
        var new_path: [String] = path
        new_path.append(current)
            
        if depth == max_cnt + 1 {
            if answer.isEmpty || new_path.joined() < answer.joined() {
                answer = new_path
            }
        } else {
            if let destinations = dict[current] {
                for (next, index) in destinations {
                    if !isVisited[index] {
                        isVisited[index] = true
                        dfs(depth + 1, next, new_path, &isVisited)
                        isVisited[index] = false
                    }
                }
            }
        }
    }
    var isVisited = Array(repeating: false, count: max_cnt)
    dfs(1, "ICN", [], &isVisited)
        
    return answer
}
~~~