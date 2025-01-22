---
id : 'test-programmers-19'
title: '[프로그래머스 | 파괴되지 않은 건물] Swift'
date: '2025-01-22'
excerpt: '2022 KAKAO BLIND RECRUITMENT (6번 문제) [파괴되지 않은 건물] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

**[본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]** <br>
N x M 크기의 행렬 모양의 게임 맵이 있습니다. 이 맵에는 내구도를 가진 건물이 각 칸마다 하나씩 있습니다. 적은 이 건물들을 공격하여 파괴하려고 합니다. 건물은 적의 공격을 받으면 내구도가 감소하고 내구도가 0이하가 되면 파괴됩니다. 반대로, 아군은 회복 스킬을 사용하여 건물들의 내구도를 높이려고 합니다.<br>
적의 공격과 아군의 회복 스킬은 항상 직사각형 모양입니다.<br>
건물의 내구도를 나타내는 2차원 정수 배열 board와 적의 공격 혹은 아군의 회복 스킬을 나타내는 2차원 정수 배열 skill이 매개변수로 주어집니다. 적의 공격 혹은 아군의 회복 스킬이 모두 끝난 뒤 파괴되지 않은 건물의 개수를 return하는 solution함수를 완성해 주세요.<br>
<br>

***

### 제한사항

* 1 ≤ board의 행의 길이 (= N) ≤ 1,000
* 1 ≤ board의 열의 길이 (= M) ≤ 1,000
* 1 ≤ board의 원소 (각 건물의 내구도) ≤ 1,000
* 1 ≤ skill의 행의 길이 ≤ 250,000
* skill의 열의 길이 = 6
* skill의 각 행은 [type, r1, c1, r2, c2, degree]형태를 가지고 있습니다.
    * type은 1 혹은 2입니다.
        * type이 1일 경우는 적의 공격을 의미합니다. 건물의 내구도를 낮춥니다.
        * type이 2일 경우는 아군의 회복 스킬을 의미합니다. 건물의 내구도를 높입니다.
    * (r1, c1)부터 (r2, c2)까지 직사각형 모양의 범위 안에 있는 건물의 내구도를 degree 만큼 낮추거나 높인다는 뜻입니다.
        * 0 ≤ r1 ≤ r2 < board의 행의 길이
        * 0 ≤ c1 ≤ c2 < board의 열의 길이
        * 1 ≤ degree ≤ 500
        * type이 1이면 degree만큼 건물의 내구도를 낮춥니다.
        * type이 2이면 degree만큼 건물의 내구도를 높입니다.
        <br>
* 건물은 파괴되었다가 회복 스킬을 받아 내구도가 1이상이 되면 파괴되지 않은 상태가 됩니다. 즉, 최종적으로 건물의 내구도가 1이상이면 파괴되지 않은 건물입니다.

#### 정확성 테스트 제한사항

* 1 ≤ board의 행의 길이 (= N) ≤ 100
* 1 ≤ board의 열의 길이 (= M) ≤ 100
* 1 ≤ board의 원소 (각 건물의 내구도) ≤ 100
* 1 ≤ skill의 행의 길이 ≤ 100
    * 1 ≤ degree ≤ 100
<br>

#### 효율성 테스트 제한사항

* 주어진 조건 외 추가 제한사항 없습니다.
<br>

***

## 입출력 예

|board|skill|result|
|:-|:-|:-|
|\[[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]]|\[[1,0,0,3,4,4],[1,2,0,2,3,2],[2,1,0,3,1,2],[1,0,1,3,3,1]]|10|
|\[[1,2,3],[4,5,6],[7,8,9]]|\[[1,1,1,2,2,4],[1,0,0,1,1,2],[2,2,0,2,0,100]]|6|

<br>

## 풀이 과정

**누적합** 사용

~~~
func solution(_ board:[[Int]], _ skill:[[Int]]) -> Int {
        
    var temp_board:[[Int]] = [[Int]](repeating: [Int](repeating: 0, count: board[0].count + 1), count: board.count + 1)
    var answer: Int = 0
        
    for skill_n in skill {
            
        let type = skill_n[0] == 1 ? -1 : 1
        let force = skill_n[5] * type
            
        temp_board[skill_n[1]][skill_n[2]] += force
        temp_board[skill_n[3] + 1][skill_n[2]] -= force
        temp_board[skill_n[1]][skill_n[4] + 1] -= force
        temp_board[skill_n[3] + 1][skill_n[4] + 1] += force
            
    }
        
    for row in 0..<temp_board.count {
        for col in 1..<temp_board[0].count {
            temp_board[row][col] += temp_board[row][col - 1]
        }
    }
        
    for col in 0..<temp_board[0].count {
        for row in 1..<temp_board.count {
            temp_board[row][col] += temp_board[row - 1][col]
        }
    }
        
    for row in 0..<board.count {
        for col in 0..<board[0].count {
            if board[row][col] + temp_board[row][col] > 0 { answer += 1 }
        }
    }
            
    return answer
}
~~~