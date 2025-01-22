---
id : 'test-programmers-18'
title: '[프로그래머스 | 단어 변환] Swift'
date: '2025-01-22'
excerpt: 'DFS/BFS Lv.3 [단어 변환] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.<br>
<br>

1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
2. words에 있는 단어로만 변환할 수 있습니다.

<br>
예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.<br>
두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.<br>
<br>

***

### 제한사항

* 각 단어는 알파벳 소문자로만 이루어져 있습니다.
* 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
* words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
* begin과 target은 같지 않습니다.
* 변환할 수 없는 경우에는 0를 return 합니다.
<br>

***

## 입출력 예

|begin|target|words|result|
|:-|:-|:-|:-|
|"hit"|"cog"|["hot", "dot", "dog", "lot", "log", "cog"]|4|
|"hit"|"cog"|["hot", "dot", "dog", "lot", "log"]|0|

<br>

## 풀이 과정

~~~
import Foundation

var isVisited: [Bool] = []
var answer: Int = 51
    
func solution(_ begin:String, _ target:String, _ words:[String]) -> Int {
        
    if !words.contains(target) { return 0 }
        
    isVisited = [Bool](repeating: false, count: words.count)
        
    find(0, begin, target, words)
        
    return answer
}
    
func find(_ depth:Int, _ begin:String, _ target:String, _ words:[String]) {
        
    if begin == target { answer = answer > depth ? depth : answer }
    if depth == words.count { return }
        
    var stack: [String] = []
    let begin_arr = Array(begin)
        
    for idx in 0..<words.count {
            
        var str_equals = 0
            
        if !isVisited[idx] {
                
            let word_arr = Array(words[idx])
                
            for i in 0..<begin_arr.count {
                    
                if begin_arr[i] != word_arr[i] {
                    str_equals += 1
                }
            }
                
            if str_equals != 1 { continue }
                
            isVisited[idx] = true
            stack.append(words[idx])
                
        }
    }
        
    while !stack.isEmpty {
        let pop = stack.popLast()!
        find(depth + 1, pop, target, words)
    }
        
}
~~~