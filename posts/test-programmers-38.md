---
id : 'test-programmers-38'
title: '[프로그래머스 | 큰 수 만들기] Swift'
date: '2025-02-02'
excerpt: '탐욕법(Greedy) Lv.2 [마법의 엘리베이터] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.
예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.<br>
문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.<br>
<br>

***

### 제한사항

* number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
* k는 1 이상 number의 자릿수 미만인 자연수입니다.
<br>

***

## 입출력 예

|number|k|result|
|:-|:-|:-|
|"1924"|2|"94"|
|"1231234"|3|"3234"|
|"4177252841"|4|"775841"|

<br>

## 풀이 과정

~~~
import Foundation

func solution(_ number:String, _ k:Int) -> String {
    
    var stack: [Character] = []
    let arr = Array(number)
    var count = k
    
    for i in 0..<arr.count {
        while count > 0 && !stack.isEmpty && stack.last! < arr[i] {
            stack.removeLast()
            count -= 1
        }
        stack.append(arr[i])
    }
    
    return String(stack[0..<(arr.count - k)])
}
~~~

