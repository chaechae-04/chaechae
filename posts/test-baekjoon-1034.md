---
id : 'test-baekjoon-1034'
title: '[백준 | 1034] Python'
date: '2025-01-01'
excerpt: 'Gold IV [1034], 램프 문제풀이 글입니다. 아직 푸는중임'
type: 'test'
---

## 문제
지민이는 각 칸마다 (1x1크기의 정사각형) 램프가 들어있는 정사각형 모양의 탁자를 샀다. 모든 랜프는 켜져있거나 꺼져있다. 각 열의 아래에는 스위치가 하나씩 달려있는데, 이 스위치를 누를 때마다 그 열에 있는 램프의 상태가 바뀐다. (켜져있는 램프는 꺼지고, 꺼져있는 램프는 켜진다) <br>
만약 어떤 행에 있는 램프가 모두 켜져있을 때, 그 행이 켜져있다고 말한다. 지민이는 스위치를 K번 누를 것이다. 서로 다른 스위치 K개를 누르지 않아도 된다. 지민이는 스위치를 K번 눌러서 켜져있는 행을 최대로 하려고 한다. <br>
지민이의 탁자에 있는 램프의 상태와 K가 주어졌을 때, 스위치를 K번 누른 후에 켜져있는 행의 최댓값을 구하는 프로그램을 작성하시오. <br>

## 입력
첫째 줄에 N과 M이 주어진다. N은 행의 개수이고, M은 열의 개수이다. N과 M은 50보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에는 램프의 상태가 주어진다. 1이 켜져있는 상태이고, 0이 꺼져있는 상태이다. 마지막 줄에는 K가 주어진다. K는 1,000보다 작거나 같은 자연수 또는 0이다.<br>

## 출력
첫째 줄에 문제의 정답을 출력한다.<br>

## 알고리즘 분류
<a href="/pages/posts/brute-force" style="text-decoration-line: none; font-weight: bold">브루트포스 알고리즘</a>, <a href="/pages/posts/ad-hoc" style="text-decoration-line: none; font-weight: bold">애드 훅</a><br>

||예제 입력|예제 출력|
|:-:|:-|:-|
|1|3 2<br>01<br>10<br>10<br>1|2|
|2|1 6<br>101010<br>2|0|
|3|2 2<br>00<br>11<br>999|0|
|4|5 1<br>0<br>1<br>0<br>1<br>0<br>1000|2|
|5|14 3<br>011<br>101<br>001<br>000<br>111<br>001<br>101<br>111<br>110<br>000<br>111<br>010<br>110<br>001<br>6|4|
|6|5 2<br>01<br>10<br>01<br>01<br>10<br>1|3|

## 풀이 과정

<div class="markdown">
    <div class="col">
        <div class="my-0">

    # dfs 함수
    def dfs(Matrix, depth) :

        global answer

        # 최대 깊이가 k 까지 가면 행 계산
        if depth == k :
            result = 0

        for i in range(col) :
            result += 1 if sum(Matrix[i]) == row else 0
        
        return result

    # 열 변경
    for i in range(row) :
        new_matrix = Matrix

        for j in range(col) :
            new_matrix[j][i] = 1 if new_matrix[j][i] == 0 else 0
        
        # dfs 호출
        answer = dfs(new_matrix, depth + 1) 

    # 입력
    col, row = map(int, input().split())
    m = [list(map(int, input())) for _ in range(col)]
    k = int(input())
    answer = 0

    # 함수 호출
    answer = dfs(m, 0)

    # 출력
    print(answer)
\
        </div>
        <div class="explanation text-center">
            초기 코드 구성
        </div>
        <div>
            왜 안되지..
        </div>
    </div>
</div>