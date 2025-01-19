---
id : 'test-programmers-8'
title: '[프로그래머스 | 기초 문제 풀기] Swift'
date: '2025-01-17'
excerpt: 'Swift 문법 공부를 위한 Programmers[Lv.0 ~ 1] 문제 풀이 노트입니다.'
type: 'test'
---

## 문제 목록

* __Lv.0 List__
    1. __부분 문자열__
    2. __공배수__
    3. __부분 문자열인지 확인하기__
    4. __배열의 원소 삭제하기__
    5. __문자열로 변환__
    <br>
* __Lv.1 List__
    1. __명예의 전당__
    2. __추억 점수__
    3. __기사단원의 무기__
    4. __2016년__
    5. __과일 장수__

***

## 풀이 코드

### Lv.0

~~~
// 부분 문자열

import Foundation

func solution(_ str1: String, _ str2: String) -> Int {
    return str2.contains(str1) ? 1 : 0
}

~~~

<br>

~~~
// 공배수

import Foundation

func solution(_ number:Int, _ n:Int, _ m:Int) -> Int {
    return (number % n == 0 && number % m == 0) ? 1 : 0
}
~~~

<br>

~~~
// 부분 문자열인지 확인하기

import Foundation

func solution(_ my_string:String, _ target:String) -> Int {
    return my_string.contains(target) ? 1 : 0
}
~~~

<br>

~~~
// 배열의 원소 삭제하기

import Foundation

func solution(_ arr:[Int], _ delete_list:[Int]) -> [Int] {
        
    var num_list = arr
        
    for num in delete_list {
        if num_list.contains(num), let index = num_list.firstIndex(of: num) {
            num_list.remove(at: index)
        }
    }
        
    return num_list
}
~~~

<br>

~~~
// 문자열로 변환

import Foundation

func solution(_ n:Int) -> String {
    return String(n)
}
~~~

***

### Lv.1

~~~
// 명예의 전당

import Foundation

func solution(_ k:Int, _ score:[Int]) -> [Int] {
        
    var arr: [Int] = []
    var answer: [Int] = []
        
    for n in score {
        if arr.count < k {
            arr.append(n)
            answer.append(arr.min() ?? 0)
        } else {
            var min_num = arr.min() ?? 0
                
            if min_num < n, let index = arr.firstIndex(of: min_num) {
                arr.remove(at: index)
                arr.append(n)
            }
            min_num = arr.min() ?? 0
            answer.append(min_num)
        }
    }
    return answer
}
~~~

<br>

~~~
// 추억 점수

import Foundation

func solution(_ name:[String], _ yearning:[Int], _ photo:[[String]]) -> [Int] {
        
    var answer: [Int] = []
    var result: Int
        
    for strArr in photo {
        result = 0
        for str in strArr {
            if name.contains(str), let index = name.firstIndex(of: str) {
                result += yearning[index]
            }
        }
        answer.append(result)
    }
        
    return answer
}
~~~

<br>

~~~
// 기사단원의 무기

import Foundation

func solution(_ number:Int, _ limit:Int, _ power:Int) -> Int {
        
    var answer: Int = 0
        
    for idx in 1...number {
        answer += divisor(idx) > limit ? power : divisor(idx)
    }
        
    return answer
}
    
func divisor(_ number:Int) -> Int {
        
    var divisor_set = Set<Int>()
        
    for num in 1...Int(sqrt(Double(number))) {
        if (Int(number) % num == 0) {
            divisor_set.insert(num)
            divisor_set.insert(number / num)
        }
    }
        
    return divisor_set.count
}
~~~

<br>

~~~
// 2016년

func solution(_ a:Int, _ b:Int) -> String {
    let days: [Int] = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let weekdayString: [String] = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
        
    var totalDays: Int = (b - 1) + 5
        
    for i in 0..<(a - 1) {
        totalDays += days[i]
    }
        
    return weekdayString[totalDays % 7]
}
~~~

<br>

~~~
// 과일 장수

import Foundation

func solution(_ k:Int, _ m:Int, _ score:[Int]) -> Int {
        
    var answer: Int = 0
    let descending: [Int] = score.sorted(by: >)
    let d_count = descending.count
        
    for idx in 0..<(d_count / m) + (d_count % m == 0 ? 0 : 1) {
            
        if (idx + 1) * m > d_count { break }
            
        answer += (descending[idx * m..<(idx + 1) * m].min() ?? 0) * m
                
    }
        
    return answer
}
~~~