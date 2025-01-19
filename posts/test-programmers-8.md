---
id : 'test-programmers-8'
title: '[프로그래머스 | 기초 문제 풀기] Swift'
date: '2025-01-17'
excerpt: 'Swift 문법 공부를 위한 Lv.0 문제 풀이 노트입니다.'
type: 'test'
---

## 문제 목록

* __Lv.0 List__
    **1. 부분 문자열**
    **2. 공배수**
    **3. 부분 문자열인지 확인하기**
    **4. 배열의 원소 삭제하기**
    **5. 문자열로 변환**
    <br>
* __Lv.1 List__
    **1. 명예의 전당**

***

## 풀이 코드

~~~
// 부분 문자열

import Foundation

func solution(_ str1: String, _ str2: String) -> Int {
    return str2.contains(str1) ? 1 : 0
}

~~~

***

~~~
// 공배수

import Foundation

func solution(_ number:Int, _ n:Int, _ m:Int) -> Int {
    return (number % n == 0 && number % m == 0) ? 1 : 0
}
~~~

***

~~~
// 부분 문자열인지 확인하기

import Foundation

func solution(_ my_string:String, _ target:String) -> Int {
    return my_string.contains(target) ? 1 : 0
}
~~~

***

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

***

~~~
// 문자열로 변환

import Foundation

func solution(_ n:Int) -> String {
    return String(n)
}
~~~