---
id : 'test-programmers-1'
title: '[프로그래머스 | 광물 캐기] Java'
date: '2025-01-13'
excerpt: '연습문제 Lv.2 [광물 캐기] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제
마인은 곡괭이로 광산에서 광석을 캐려고 합니다. 마인은 다이아몬드 곡괭이, 철 곡괭이, 돌 곡괭이를 각각 0개에서 5개까지 가지고 있으며, 곡괭이로 광물을 캘 때는 피로도가 소모됩니다. 각 곡괭이로 광물을 캘 때의 피로도는 아래 표와 같습니다. <br>

||dia|iron|stone|
|:-|:-:|:-:|:-:|
|dia|1|1|1|
|iron|5|1|1|
|stone|25|5|1|

<br>
예를 들어, 철 곡괭이는 다이아몬드를 캘 때 피로도 5가 소모되며, 철과 돌을 캘때는 피로도가 1씩 소모됩니다. 각 곡괭이는 종류에 상관없이 광물 5개를 캔 후에는 더 이상 사용할 수 없습니다.
마인은 다음과 같은 규칙을 지키면서 최소한의 피로도로 광물을 캐려고 합니다.<br>

* 사용할 수 있는 곡괭이중 아무거나 하나를 선택해 광물을 캡니다.
* 한 번 사용하기 시작한 곡괭이는 사용할 수 없을 때까지 사용합니다.
* 광물은 주어진 순서대로만 캘 수 있습니다.
* 광산에 있는 모든 광물을 캐거나, 더 사용할 곡괭이가 없을 때까지 광물을 캡니다.
<br>

즉, 곡괭이를 하나 선택해서 광물 5개를 연속으로 캐고, 다음 곡괭이를 선택해서 광물 5개를 연속으로 캐는 과정을 반복하며, 더 사용할 곡괭이가 없거나 광산에 있는 모든 광물을 캘 때까지 과정을 반복하면 됩니다.
마인이 갖고 있는 곡괭이의 개수를 나타내는 정수 배열 **picks**와 광물들의 순서를 나타내는 문자열 배열 **minerals**가 매개변수로 주어질 때, 마인이 작업을 끝내기까지 필요한 최소한의 피로도를 return 하는 solution 함수를 완성해주세요.

***

### 제한사항

* picks는 [dia, iron, stone]과 같은 구조로 이루어져 있습니다.
    - 0 ≤ dia, iron, stone ≤ 5
    - dia는 다이아몬드 곡괭이의 수를 의미합니다.
    - iron은 철 곡괭이의 수를 의미합니다.
    - stone은 돌 곡괭이의 수를 의미합니다.
    - 곡괭이는 최소 1개 이상 가지고 있습니다.
    <br>

* 5 ≤ minerals의 길이 ≤ 50
    - minerals는 다음 3개의 문자열로 이루어져 있으며 각각의 의미는 다음과 같습니다.
    - diamond : 다이아몬드
    - iron : 철
    - stone : 돌
    <br>

***

## 입출력 예

|picks|minerals|result|
|:-|:-|:-|
|[1, 3, 2]|["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]|12|
|[0, 1, 1]|["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"]|50|

## 풀이 과정

처음에 문제를 보고, 곡괭이를 사용하면 5개의 광물을 캘 때 까지 바꿀 수 없다는 특징을 이용해 풀기로 했다. <br>
곡괭이를 바꿀 수 없기 때문에 광물 집합 **minerals** 를 5개씩 묶어 각각 diaPick, ironPick,stonePick 으로 캘 때 피로도를 저장하고, 광물마다 사용하는 피로도가 다른 stonePick 을 기준으로 배열을 정렬해 캐야하는 묶음을 역순으로 계산하여 피로도를 추가하는 식으로 풀기로 했다.

```
import java.util.Arrays;

class Solution {
    public int solution(int[] picks, String[] minerals) {

        int value = minerals.length / 5 + (minerals.length % 5 == 0 ? 0 : 1);

        int answer = 0;

        int[][] mining = new int[value][3];
        int n = picks[0] + picks[1] + picks[2];
        int count = Math.min(value, n);

        for (int i = 0; i < count; i++) {
            mining[i][0] = 0;
            mining[i][1] = 0;
            mining[i][2] = 0;
            for (int j = i * 5; j < i * 5 + 5; j++) {
                if (minerals.length == j) break;
                mining[i][0] += 1;
                mining[i][1] += minerals[j].contentEquals("diamond") ? 5 : 1;
                mining[i][2] += minerals[j].contentEquals("diamond") ? 25 : minerals[j].contentEquals("iron") ? 5 : 1;
            }
        }

        Arrays.sort(mining, 0, count, (a, b) -> {
            if (a[2] != b[2]) {
                return a[2] - b[2];
            }
            return 0;
        });

        while (count != 0) {

            if (picks[0] != 0) {
                answer += mining[count - 1][0];
                picks[0]--;
            } else if (picks[1] != 0) {
                answer += mining[count - 1][1];
                picks[1]--;
            } else if (picks[2] != 0) {
                answer += mining[count - 1][2];
                picks[2]--;
            }

            count--;
        }

        return answer;
    }
}
```

