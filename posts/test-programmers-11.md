---
id : 'test-programmers-11'
title: '[프로그래머스 | 프로세스] Swift'
date: '2025-01-20'
excerpt: '스택/큐 Lv.2 [프로세스] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다. 이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.<br>
~~~
1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
  3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
~~~
<br>
예를 들어 프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고, 우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행하게 됩니다.<br>
현재 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities와, 몇 번째로 실행되는지 알고싶은 프로세스의 위치를 알려주는 location이 매개변수로 주어질 때, 해당 프로세스가 몇 번째로 실행되는지 return 하도록 solution 함수를 작성해주세요.<br>
<br>

***

### 제한사항

* priorities의 길이는 1 이상 100 이하입니다.
    * priorities의 원소는 1 이상 9 이하의 정수입니다.
    * priorities의 원소는 우선순위를 나타내며 숫자가 클 수록 우선순위가 높습니다.
    <br>
* location은 0 이상 (대기 큐에 있는 프로세스 수 - 1) 이하의 값을 가집니다.
    * priorities의 가장 앞에 있으면 0, 두 번째에 있으면 1 … 과 같이 표현합니다.
    <br>
<br>

## 입출력 예

|priorities|location|result|
|:-|:-|:-|
|[2, 1, 3, 2]|2|1|
|[1, 1, 9, 1, 1, 1]|0|5|

<br>

## 풀이 과정

queue 형식으로 구현 할 때 removeFirst() 함수를 사용하기보다는<br>
~~~
let deque = queue.first!<br>
queue = queue.dropFirst()<br>
~~~
로 구현한다면 시간 복잡도가 O(n) 에서 O(1) 이 된다.<br>
removeFirst() 는 가장 앞의 값을 꺼내고, 모든 값의 인덱스를 -1 하는 과정을 거치지만,<br>
dropFirst() 는 가장 앞의 값을 꺼내고, 해더의 포인터값을 +1 하는 형식이다.<br>
문제 풀기 전에 알았으면 좋았을듯

~~~
import Foundation

func solution(_ priorities:[Int], _ location:Int) -> Int {
        
    var queue: [Int] = priorities
    var target: Int = location
    var count: Int = 0
        
    while true {
        let maximum = queue.max() ?? 0
        if target == 0, maximum == queue[0] { return count + 1 }
            
        if maximum == queue[0] {
            count += 1
            queue.removeFirst()
        } else {
            let head: Int = queue[0]
            queue.removeFirst()
            queue.append(head)
        }
            
        if target == 0 {
            target = queue.count - 1
        } else {
            target -= 1
        }
    }
}
~~~