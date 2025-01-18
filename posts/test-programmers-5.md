---
id : 'test-programmers-5'
title: '[프로그래머스 | 단속카메라] Java'
date: '2025-01-16'
excerpt: '2023 Lv.3 [단속카메라] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

~~~
import java.util.Arrays;
import java.util.Comparator;

class Solution {
    public int solution(int[][] routes) {
        int answer = 1;

        Arrays.sort(routes, Comparator.comparingInt(a -> a[1]));

        int lastCamera = routes[0][1];

        for (int i = 0; i < routes.length; i++) {
            if (routes[i][0] > lastCamera) {
                answer++;
                lastCamera = routes[i][1];
            }
        }

        return answer;
    }
}
~~~