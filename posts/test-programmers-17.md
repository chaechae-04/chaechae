---
id : 'test-programmers-17'
title: '[프로그래머스 | 이중우선순위큐] Swift'
date: '2025-01-22'
excerpt: '힙(Heep) Lv.3 [이중우선순위큐] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.<br>
|명령여|수신 탑(높이)|
|:-|:-|
|I|숫자	큐에 주어진 숫자를 삽입합니다.|
|D 1|큐에서 최댓값을 삭제합니다.|
|D -1|큐에서 최솟값을 삭제합니다.|

<br>

이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.<br>
<br>

***

### 제한사항

* operations는 길이가 1 이상 1,000,000 이하인 문자열 배열입니다.
* operations의 원소는 큐가 수행할 연산을 나타냅니다.
    * 원소는 “명령어 데이터” 형식으로 주어집니다.- 최댓값/최솟값을 삭제하는 연산에서 최댓값/최솟값이 둘 이상인 경우, 하나만 삭제합니다.
    <br>
* 빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시합니다.
<br>

***

## 입출력 예

|operations|result|
|:-|:-|
|["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]|\[0,0]|
|["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]|[333, -45]|

<br>

## 풀이 과정

~~~
import Foundation

func solution(_ operations:[String]) -> [Int] {
        
    var answer: [Int] = []
        
    for operation in operations {
        let str = operation.split(separator: " ")
        if str[0].contains("I") {
            answer.append(Int(str[1]) ?? 0)
        } else {
            let target: Int = (str[1].contains("-1") ? answer.min() : answer.max()) ?? 0
            
            if let index = answer.firstIndex(of: target) {
                answer.remove(at: index)
            }
        }
    }
        
    return [answer.max() ?? 0, answer.min() ?? 0]
}
~~~