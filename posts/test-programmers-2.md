---
id : 'test-programmers-2'
title: '[프로그래머스 개인정보 수집 유효기간] Java'
date: '2025-01-15'
excerpt: 'Lv.1 [개인정보 수집 유효기간] 문제풀이 글입니다. 아직 푸는중임'
type: 'test'
---

## 문제
고객의 약관 동의를 얻어서 수집된 1~n번으로 분류되는 개인정보 n개가 있습니다. 약관 종류는 여러 가지 있으며 각 약관마다 개인정보 보관 유효기간이 정해져 있습니다. 당신은 각 개인정보가 어떤 약관으로 수집됐는지 알고 있습니다. 수집된 개인정보는 유효기간 전까지만 보관 가능하며, 유효기간이 지났다면 반드시 파기해야 합니다.<br>

예를 들어, A라는 약관의 유효기간이 12 달이고, 2021년 1월 5일에 수집된 개인정보가 A약관으로 수집되었다면 해당 개인정보는 2022년 1월 4일까지 보관 가능하며 2022년 1월 5일부터 파기해야 할 개인정보입니다.
당신은 오늘 날짜로 파기해야 할 개인정보 번호들을 구하려 합니다. <br>

**모든 달은 28일까지 있다고 가정합니다.** <br>

다음은 오늘 날짜가 2022.05.19일 때의 예시입니다. <br>

|약관 종류|유효기간|&nbsp;&nbsp;|번호|개인정보 수집 일자|약관 종류|
|:-|:-|:-:|:-|:-|:-|
|A|6달|&nbsp;&nbsp;|1|2021.05.02|A|
|B|12달|&nbsp;&nbsp;|2|2021.07.01|B|
|C|3달|&nbsp;&nbsp;|3|2022.02.19|C|
|||&nbsp;&nbsp;|4|2022.02.20|C|

<br>

* 첫 번째 개인정보는 A약관에 의해 2021년 11월 1일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.
* 두 번째 개인정보는 B약관에 의해 2022년 6월 28일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.
* 세 번째 개인정보는 C약관에 의해 2022년 5월 18일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.
* 네 번째 개인정보는 C약관에 의해 2022년 5월 19일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.

<br>

따라서 파기해야 할 개인정보 번호는 [1, 3]입니다.

<br>

오늘 날짜를 의미하는 문자열 today, 약관의 유효기간을 담은 1차원 문자열 배열 terms와 수집된 개인정보의 정보를 담은 1차원 문자열 배열 privacies가 매개변수로 주어집니다. 이때 파기해야 할 개인정보의 번호를 오름차순으로 1차원 정수 배열에 담아 return 하도록 solution 함수를 완성해 주세요.

<br>

***

### 제한사항

* today는 "YYYY.MM.DD" 형태로 오늘 날짜를 나타냅니다.
<br>

* 1 ≤ terms의 길이 ≤ 20
    * terms의 원소는 "약관 종류 유효기간" 형태의 약관 종류와 유효기간을 공백 하나로 구분한 문자열입니다.
    * 약관 종류는 A~Z중 알파벳 대문자 하나이며, terms 배열에서 약관 종류는 중복되지 않습니다.
    * 유효기간은 개인정보를 보관할 수 있는 달 수를 나타내는 정수이며, 1 이상 100 이하입니다.
<br>

* 1 ≤ privacies의 길이 ≤ 100
    * privacies[i]는 i+1번 개인정보의 수집 일자와 약관 종류를 나타냅니다.
    * privacies의 원소는 "날짜 약관 종류" 형태의 날짜와 약관 종류를 공백 하나로 구분한 문자열입니다.
    * 날짜는 "YYYY.MM.DD" 형태의 개인정보가 수집된 날짜를 나타내며, today 이전의 날짜만 주어집니다.
    * privacies의 약관 종류는 항상 terms에 나타난 약관 종류만 주어집니다.
<br>

* today와 privacies에 등장하는 날짜의 YYYY는 연도, MM은 월, DD는 일을 나타내며 점(.) 하나로 구분되어 있습니다.
    * 2000 ≤ YYYY ≤ 2022
    * 1 ≤ MM ≤ 12
    * MM이 한 자릿수인 경우 앞에 0이 붙습니다.
    * 1 ≤ DD ≤ 28
    * DD가 한 자릿수인 경우 앞에 0이 붙습니다.
<br>

* 파기해야 할 개인정보가 하나 이상 존재하는 입력만 주어집니다.
<br>
***

## 입출력 예

|today|terms|privacies|result|
|:-:|:-|:-|:-:|
|"2022.05.19|["A 6",<br> "B 12",<br> "C 3"]|["2021.05.02 A",<br> "2021.07.01 B",<br> "2022.02.19 C",<br> "2022.02.20 C"]|[1, 3]|
|"2020.01.01"|["Z 3",<br> "D 5"]|["2019.01.01 D",<br> "2019.11.15 Z",<br> "2019.08.02 D",<br> "2019.07.01 D",<br> "2018.12.28 Z"]|[1, 4, 5]|

## 풀이 과정

모든 달은 28일 까지만 있다고 가정했다는 것에 집중을 했다. 우선 현재 날짜 today 를 "." 을 기준으로 나누어 년도에는 (today[0] * 12 * 28) 을, 월에는 (today[1] * 28) 을 해서
년도와 월을 일 기준으로 바꾸고 전부 더한다. <br>
그 이후 개인정보의 날짜들을 " " 을 기준으로 나누어 privacy[0] 은 날짜를, privacy[1] 은 term 을 나타내게 한 뒤, terms 를 " " 을 기준을 나누어 privacy[1].contentEquals(terms[0]) 으로 조건식을 만든다. <br>
이 조건식을 통과하면 terms[1] 에도 * 28 을 해 일수로 바꾸고, privacy[0] 또한 today 를 바꾼것과 동일하게 일수로 바꾼 뒤, (terms[1] * 12) + ((privacy[0][0] * 12 * 28) + (privacy[0][1] * 28) + pricacy[0][2]) 를 해 개인정보 보호가 이루어지는 일수를 계산한다. <br>
마지막으로 개인정보 보관이 이루어지는 일수가 today의 일수보다 작다면 파기해야 할 정보, 크다면 아직 보관해야 할 정보로 분류가 가능하기 때문에, 파기해야 할 정보일 경우에만 answer 에 append 해준다. <br>

```
class Solution {
    public int[] solution(String today, String[] terms, String[] privacies) {
        int[] answer = {};

        int count = 1;
        int day = dayStringToDay(today);

        for (String s : privacies) {
            if (func(day, terms, s)) {
                answer = append(answer, count);
            }
            count++;
        }

        return answer;
    }

    private boolean func(int today, String[] terms, String privacy) {
        String[] dayTerm = privacy.split(" ");
        int day = dayStringToDay(dayTerm[0]);


        for (String s : terms) {
            if (dayTerm[1].contentEquals(s.split(" ")[0])) {
                int n = Integer.parseInt(s.split(" ")[1]) * 28;
                if (today >= day + n) {
                    return true;
                }
            }
        }

        return false;
    }

    private int dayStringToDay(String today) {
        String[] dayString = today.split("\\.");
        return (Integer.parseInt(dayString[0]) * 12 * 28) + (Integer.parseInt(dayString[1]) * 28) + Integer.parseInt(dayString[2]);
    }

    private int[] append(int[] arr, int val) {
        int[] result = new int[arr.length + 1];

        System.arraycopy(arr, 0, result, 0, arr.length);
        result[arr.length] = val;

        return result;
    }
}
```