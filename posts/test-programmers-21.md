---
id : 'test-programmers-21'
title: '[프로그래머스 | 행렬의 곱셈] Swift'
date: '2025-01-22'
excerpt: '연습문제 Lv.2 [행렬의 곱셈] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.<br>
<br>

***

### 제한사항

* 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
* 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
* 곱할 수 있는 배열만 주어집니다.
<br>

***

## 입출력 예

|arr1|arr2|result|
|:-|:-|:-|
|\[[1, 4], [3, 2], [4, 1]]|\[[3, 3], [3, 3]]|\[[15, 15], [15, 15], [15, 15]]|
|\[[2, 3, 2], [4, 2, 4], [3, 1, 4]]|\[[5, 4, 3], [2, 4, 1], [3, 1, 1]]|\[[22, 22, 11], [36, 28, 18], [29, 20, 14]]|

<br>

## 풀이 과정

~~~
import Foundation

 func solution(_ arr1:[[Int]], _ arr2:[[Int]]) -> [[Int]] {
        
    let arr1_row: Int = arr1.count
    let arr2_row: Int = arr2.count
    let arr2_col: Int = arr2[0].count
    var answer: [[Int]] = [[Int]](repeating: [Int](repeating: 0, count: arr2_col), count: arr1_row)
        
    for i in 0..<arr1_row {    
        for j in 0..<arr2_col {    
            var value: Int = 0    
            for k in 0..<arr2_row {    
                value += arr1[i][k] * arr2[k][j]        
            }
            answer[i][j] = value
        }
    }       
    return answer
}
~~~