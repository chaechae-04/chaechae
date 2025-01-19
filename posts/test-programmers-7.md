---
id : 'test-programmers-7'
title: '[프로그래머스 | 가장 큰 수] Java'
date: '2025-01-17'
excerpt: '정렬 문제 Lv.2 [가장 큰 수] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.<br>
예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.<br>
0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.<br>
<br>

***

### 제한사항

* numbers의 길이는 1 이상 100,000 이하입니다.
* numbers의 원소는 0 이상 1,000 이하입니다.
* 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

<br>

***

## 입출력 예

|numbers|return|
|:-|:-|
|[6, 10, 2]|"6210"|
|[3, 30, 34, 5, 9]|"9534330"|

## 풀이 과정

~~~
import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public String solution(int[] numbers) {

        String answer = Arrays.stream(numbers)
                .mapToObj(String::valueOf)
                .sorted((a, b) -> {
                    String ab = a + b;
                    String ba = b + a;
                    return ba.compareTo(ab);
                })
                .collect(Collectors.joining());

        return answer.charAt(0) == '0' ? "0" : answer;
    }
}
~~~