---
id : 'test-programmers-12'
title: '[프로그래머스 | 뒤에 있는 큰 수 찾기] Swift'
date: '2025-01-20'
excerpt: '연습문제 Lv.2 [뒤에 있는 큰 수 찾기] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

정수로 이루어진 배열 numbers가 있습니다. 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 합니다.<br>
정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.<br>
<br>

***

### 제한사항

* 4 ≤ numbers의 길이 ≤ 1,000,000
    * 1 ≤ numbers[i] ≤ 1,000,000
    <br>

***

## 입출력 예

|numbers|result|
|:-|:-|
|[2, 3, 3, 5]|[3, 5, 5, -1]|
|[9, 1, 5, 3, 6, 2]|[-1, 5, 6, 6, -1, -1]|

<br>

## 풀이 과정

stack 에 현재 반복문의 변수(idx) 를 저장하고, numbers\[stack.last!] 에 해당하는 값이 numbers\[idx] 보다 작다면, index 라는 상수에 stack.popLast()! 를 해주고, answer\[index] 에 numbers\[idx]를 반환<br>
stack 을 사용해서 O(n) 의 시간복잡도(반복문 한번)로 문제를 해결할 수 있었다.<br>
이 방법을 생각해내기 전에는 이중 반복문으로 코드를 작성해 O(n^2)의 시간복잡도를 가지게 되었고, 그로 인해 시간초과가 떴다.

~~~
import Foundation

func solution(_ numbers:[Int]) -> [Int] {
     
    var answer: [Int] = [Int](repeating: -1, count: numbers.count)
    var stack: [Int] = [0]
        
    for idx in 1..<numbers.count {
            
        while !stack.isEmpty && numbers[stack.last!] < numbers[idx] {
            let index = stack.popLast()!
            answer[index] = numbers[idx]
        }
            
        stack.append(idx)
    }
        
    return answer
}
~~~