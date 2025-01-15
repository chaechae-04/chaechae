---
id : 'test-baekjoon-1027'
title: '[백준 | 1027] Python'
date: '2024-12-24'
excerpt: 'Gold IV [1027], 고층 건물 문제풀이(정답포함) 글입니다.'
type: 'test'
---

## 문제
세준시에는 고층 빌딩이 많다. 세준시의 서민 김지민은 가장 많은 고층 빌딩이 보이는 고층 빌딩을 찾으려고 한다.<br>
빌딩은 총 N개가 있는데, 빌딩은 선분으로 나타낸다. i번째 빌딩 (1부터 시작)은 (i,0)부터 (i,높이)의선분으로 나타낼 수 있다.<br>
고층 빌딩 A에서 다른 고층 빌딩 B가 볼 수 있는 빌딩이 되려면, 두 지붕을 잇는 선분이 A와 B를 제외한 다른 고층 빌딩을 지나거나 접하지 않아야 한다.<br>
가장 많은 고층 빌딩이 보이는 빌딩을 구하고, 거기서 보이는 빌딩의 수를 출력하는 프로그램을 작성하시오.<br>

## 입력
첫째 줄에 빌딩의 수 N이 주어진다. N은 50보다 작거나 같은 자연수이다. 둘째 줄에 1번 빌딩부터 그 높이가 주어진다.<br>
높이는 1,000,000,000보다 작거나 같은 자연수이다.<br>

## 출력
첫째 줄에 문제의 정답을 출력한다.<br>

## 알고리즘 분류
수학, <a href="/pages/posts/brute-force" style="text-decoration-line: none; font-weight: bold">브루트포스 알고리즘</a>, 기하학<br>

||예제 입력|예제 출력|
|:-:|:-|:-|
|1|15<br>1 5 3 2 6 3 2 6 4 2 5 7 3 1 5|7|
|2|1<br>10|0|
|3|4<br>5 5 5 5|2|
|4|5<br>1 2 7 3 2|4|
|5|10<br>1000000000 999999999 999999998 999999997 999999996 1 2 3 4 5|6|

## 풀이 과정
<div class="markdown">
    <div class="img">
        <img src="/imgs/20241224-2/img1.jpeg" alt="chart" />
        <div class="explanation text-center">
            Test case 1 Chart
        </div>
    </div>
</div>
<br>
탐색하고자 하는 index i 를 기준으로 왼쪽과 오른쪽을 탐색한다.<br>

왼쪽은 각 건물을 이은 선분의 **기울기가 작을때** 보이고, 오른쪽은 **기울기가 클때** 보인다.<br>

바로 옆 건물 2개는 **기울기와 상관없이** 보인다.<br>
기울기 = i height - A height / i to A Length <br>

#### 왼쪽
i 가 11이라고 가정했을 때<br>
i - 2 번째 index 를 a, i - 1 번째 index 를 b 라고 한다.<br>
a 와 b 의 기울기를 각각 비교
| a (index 9) | vs | b (index 10) |
|:-:|:-:|:-:|
|i height - a height <br> --------------------- <br> i index - a index|\|<br>\|<br>\||i height - b height <br> --------------------- <br> i index - b index|
|7 - 2 <br> -------- <br> 11 - 9|\|<br>\|<br>\||7 - 5 <br> -------- <br> 11 - 10|
|2.5|\||2|

a (index 9) 가 b (index 10) 보다 기울기가 크기 때문에 기준 건물인 i (index 11) 에서 a 는 보이지 않는다.<br>
이후로 a = a - 1 (9 - 1 => 8), b = b - 1 (10 - 1 => 9) 으로 인덱스의 0까지 계속해서 비교한다.<br>
| a (index 8) | vs | b (index 9) |
|:-:|:-:|:-:|
|7 - 4 <br> -------- <br> 11 - 8|\|<br>\|<br>\||7 - 2 <br> -------- <br> 11 - 9|
|1|\||2.5|

이 경우엔 a (index 8) 가 b (index 9) 보다 기울기가 작기 때문에 기준 건물인 i (index 11) 에서 a 는 보인다.<br>

#### 오른쪽
i 가 11이라고 가정했을 때<br>
i + 2 번째 index 를 a, i + 1 번째 index 를 b 라고 한다.<br>
a 와 b 의 기울기를 각각 비교
| a (index 12) | vs | b (index 13) |
|:-:|:-:|:-:|
|i height - a height <br> --------------------- <br> i index - a index|\|<br>\|<br>\||i height - b height <br> --------------------- <br> i index - b index|
|7 - 3<br>-------- <br> 11 - 12|\|<br>\|<br>\||7 - 1<br>-------- <br> 11 - 13|
|-4|\||-3|

b (index 13) 가 a (index 12) 보다 기울기가 크기 때문에 기준 건물인 i (index 11) 에서 b 는 보인다.<br>
이후로 a = a + 1 (13 + 1 => 14), b = b + 1 (12 + 1 => 13) 으로 인덱스의 마지막까지 계속해서 비교한다.<br>

## 2024/12/27 [문제해결]
<br>
A 와 B 를 각각 구해서 하니까 바로 옆 건물과 비교하게 되었다.<br>
그래서 왼쪽을 구할 때에는 건물이 보이는 경우의 수에서 가장 작은 기울기를 min_slope 에 저장 후 A 의 기울기를 구해 비교하는식으로 만들고, <br>
오른쪽을 구할 때에는 건물이 보이는 경우의 수에서 가장 큰 기울기를 max_slope 에 저장 후 A 의 기울기를 구해 비교하는식으로 만들었다. <br>

그렇게 통과한 최종 코드이다.

```
# 고층 건물
# 정답 O
# 알고리즘 분류 : 수학, 브루트포스 알고리즘, 기하학

# 기울기를 구하는 공식
# A height - B height / A to B Length

# Solution

# 기울기 구하는 함수 (i_index, i_height, n_index, n_height)
def slope(i_x, i_y, n_x, n_y) :
    return (i_y - n_y) / (i_x - n_x)

n = int(input())
buildings = list(map(int, input().split()))
answer = 0

for i_x, i_y in enumerate(buildings) :

    # 왼쪽 기울기 가장 작은 값
    # 오른쪽 기울기 가장 큰 값
    min_slope = None
    max_slope = None

    # 보이는 건물 수
    value = 0

    # 왼쪽 탐색 (i_x 의 한칸 왼쪽부터 처음까지)
    for a_x in range(i_x - 1, -1, -1) :
        
        # a 번째 왼쪽 건물까지의 기울기
        a_slope = slope(i_x, i_y, a_x, buildings[a_x])

        # min_slope == None : 바로 왼쪽 건물은 항상 보임
        if (min_slope == None or a_slope < min_slope) :
            value += 1
            min_slope = a_slope

    # 오른쪽 탐색 (i_x 의 한칸 오른쪽부터 마지막까지)
    for a_x in range(i_x + 1, n) :

        # a 번째 오른쪽 건물까지의 기울기
        a_slope = slope(i_x, i_y, a_x, buildings[a_x])

        # max_slope == None : 바로 오른쪽 건물은 항상 보임
        if (max_slope == None or a_slope > max_slope) :
            value += 1
            max_slope = a_slope

    # 가장 건물이 많이 보이는 횟수 답변에 저장
    answer = max(value, answer)

print(answer)
```

구하는 코드를 잘못 구성해서 푸는데 2일이나 걸렸다.. 덕분에 다음부터 비슷한 문제가 나오면 바로 풀듯