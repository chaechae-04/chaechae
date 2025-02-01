---
id : 'test-programmers-35'
title: '[프로그래머스 | 삼각 달팽이] Swift'
date: '2025-02-01'
excerpt: '월간 코드 챌린지 시즌1 [삼각 달팽이] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

정수 n이 매개변수로 주어집니다. 다음 그림과 같이 밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후, 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록 solution 함수를 완성해주세요.<br>
<br>

***

### 제한사항

* n 은 1 이상 1,000 이하입니다.

<br>

***

## 입출력 예

|n|result|
|:-|:-|
|4|\[1,2,9,3,10,8,4,5,6,7]|
|5|\[1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]|
|6|\[1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]|

<br>

## 풀이 과정

삼각형 진행 방향<br>
answer[0][0] -> [1][0] -> [2][0] ... [n][0] // row + 1<br>
answer[n][0] -> [n][1] -> [n][2] ... [n][n] // col + 1<br>
answer[n][n] -> [n - 1][n - 1] -> [n - 2][n - 2] ... [0][0] // row - 1 , col - 1<br>

~~~
import Foundation

func solution(_ n:Int) -> [Int] {
    
    var answer: [[Int]] = []
    
    for i in 1...n {
        answer.append([Int](repeating: 0, count: i))
    }
    
    var target: Int = 1
    var row = -1
    var col = 0
    var cur = n
    
    while cur > 0 {
        
        for _ in 0..<cur {
            row += 1
            answer[row][col] = target
            target += 1
        }
        
        cur -= 1
        if cur == 0 { break }
        
        for _ in 0..<cur {
            col += 1
            answer[row][col] = target
            target += 1
        }
        
        cur -= 1
        if cur == 0 { break }
        
        for _ in 0..<cur {
            row -= 1
            col -= 1
            answer[row][col] = target
            target += 1
        }
        
        cur -= 1
        if cur == 0 { break }
        
    }
    
    return answer.flatMap { $0 }
}
~~~