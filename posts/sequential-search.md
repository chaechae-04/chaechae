---
id : 'linear-search'
title: '[알고리즘] 순차탐색'
date: '2024-12-27'
excerpt: '순차탐색 알고리즘에 관한 공부 글입니다.'
type: 'study'
---

## 순차탐색
데이터가 담겨있는 리스트를 앞에서부터 하나씩 비교해서 원하는 데이터를 찾는 방법

## 예제
### 문제
정수 List : numbers 가 주어질때, 정수 N 이 있다면 1, 없으면 -1을 출력

<br>

||예제 입력|예제 출력|
|:-:|:-|:-|
|1|5<br>7 4 3 5 4 2 1|1|
|2|9<br>1 2 3 4 5 6 7 8|-1|

<br>

```
def sequential_search(data_list, search_data):
    for index in range(len(data_list)):
        if (data_list[index] == search_data):
            return 1
    return -1

n = int(input())
numbers = list(map(int, input().split()))

print(sequential_search(numbers, n))
```

<br>

원하는 결과가 나오기 전까지 모든 경우의 수를 차례로 탐색하기 때문에 최악의 경우 시간복잡도는 O(n) 이 나올 수 있다.

<br>

## 관련 포스트

<ul>
    <li><a href="/pages/posts/brute-force" style="text-decoration-line: none; font-weight: bold">브루트포스 알고리즘 <<</a></li>
    <li><a href="/pages/posts/depth-first-search" style="text-decoration-line: none; font-weight: bold">깊이우선탐색 <<</a></li>
    <li><a href="/pages/posts/breadth-first-search" style="text-decoration-line: none; font-weight: bold">너비 우선 탐색 <<</a></li>
    <li><a href="/pages/posts/back-tracking" style="text-decoration-line: none; font-weight: bold">백트래킹 <<</a></li>
</ul>