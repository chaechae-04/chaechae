---
id : 'test-programmers-34'
title: '[프로그래머스 | 쿼드압축 후 개수 새기] Swift'
date: '2025-02-01'
excerpt: '월간 코드 챌린지 시즌1 [쿼드압축 후 개수 새기] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

0과 1로 이루어진 2n x 2n 크기의 2차원 정수 배열 arr이 있습니다. 당신은 이 arr을 쿼드 트리와 같은 방식으로 압축하고자 합니다. 구체적인 방식은 다음과 같습니다.<br>
1. 당신이 압축하고자 하는 특정 영역을 S라고 정의합니다.
2. 만약 S 내부에 있는 모든 수가 같은 값이라면, S를 해당 수 하나로 압축시킵니다.
3. 그렇지 않다면, S를 정확히 4개의 균일한 정사각형 영역(입출력 예를 참고해주시기 바랍니다.)으로 쪼갠 뒤, 각 정사각형 영역에 대해 같은 방식의 압축을 시도합니다.
<br>

arr이 매개변수로 주어집니다. 위와 같은 방식으로 arr을 압축했을 때, 배열에 최종적으로 남는 0의 개수와 1의 개수를 배열에 담아서 return 하도록 solution 함수를 완성해주세요.<br>
<br>

***

### 제한사항

* arr의 행의 개수는 1 이상 1024 이하이며, 2의 거듭 제곱수 형태를 하고 있습니다. 즉, arr의 행의 개수는 1, 2, 4, 8, ..., 1024 중 하나입니다.
    * arr의 각 행의 길이는 arr의 행의 개수와 같습니다. 즉, arr은 정사각형 배열입니다.
    * arr의 각 행에 있는 모든 값은 0 또는 1 입니다.
    <br>

***

## 입출력 예

|arr|result|
|:-|:-|
|\[[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]|[4,9]|
|\[[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]]\[10,15]|

<br>

## 풀이 과정

~~~
import Foundation

func solution(_ arr:[[Int]]) -> [Int] {
    
    var (num1, num2): (Int, Int) = (0, 0)
    var arr_cnt: Int = arr.count
    var stack: [[Int]] = [[0, arr_cnt, 0, arr_cnt]]
    
    while !stack.isEmpty {
        let pop: [Int] = stack.popLast()!
        let target_value: Int = arr[pop[0]][pop[2]]
        var isFound: Bool = false
        
        for row in pop[0]..<pop[1] {
            for col in pop[2]..<pop[3] {
                if target_value == arr[row][col] { continue }
                isFound = true
                break
            }
            if isFound { break }
        }
        
        if isFound {
            
            if pop[1] - pop[0] == 1 { break }
            
            stack.append([pop[0], (pop[0] + pop[1]) / 2, pop[2], (pop[2] + pop[3]) / 2])
            stack.append([pop[0], (pop[0] + pop[1]) / 2, (pop[2] + pop[3]) / 2, pop[3]])
            stack.append([(pop[0] + pop[1]) / 2, pop[1], (pop[2] + pop[3]) / 2, pop[3]])
            stack.append([(pop[0] + pop[1]) / 2, pop[1], pop[2], (pop[2] + pop[3]) / 2])
            
        } else if target_value == 0 {
            num1 += 1   
        } else if target_value == 1 {
            num2 += 1
        }
        
    }
    
    return [num1, num2]
}
~~~