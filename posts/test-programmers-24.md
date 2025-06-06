---
id : 'test-programmers-24'
title: '[프로그래머스 | [3차] 압축] Swift'
date: '2025-01-22'
excerpt: '2018 KAKAO BLIND RECRUITMENT (3차 2번 문제) [[3차] 압축] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

신입사원 어피치는 카카오톡으로 전송되는 메시지를 압축하여 전송 효율을 높이는 업무를 맡게 되었다. 메시지를 압축하더라도 전달되는 정보가 바뀌어서는 안 되므로, 압축 전의 정보를 완벽하게 복원 가능한 무손실 압축 알고리즘을 구현하기로 했다.<br>
어피치는 여러 압축 알고리즘 중에서 성능이 좋고 구현이 간단한 LZW(Lempel–Ziv–Welch) 압축을 구현하기로 했다. LZW 압축은 1983년 발표된 알고리즘으로, 이미지 파일 포맷인 GIF 등 다양한 응용에서 사용되었다.<br>
LZW 압축은 다음 과정을 거친다.<br>

1. 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
3. w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
4. 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
5. 단계 2로 돌아간다.

<br>
압축 알고리즘이 영문 대문자만 처리한다고 할 때, 사전은 다음과 같이 초기화된다. 사전의 색인 번호는 정수값으로 주어지며, 1부터 시작한다고 하자.<br>

|색인 번호|1|2|3|...|24|25|26|
|:-|:-|:-|:-|:-:|:-|:-|:-|
|단어|A|B|C|...|X|Y|Z|

<br>

예를 들어 입력으로 KAKAO가 들어온다고 하자.<br>

1. 현재 사전에는 KAKAO의 첫 글자 K는 등록되어 있으나, 두 번째 글자까지인 KA는 없으므로, 첫 글자 K에 해당하는 색인 번호 11을 출력하고, 다음 글자인 A를 포함한 KA를 사전에 27 번째로 등록한다.
2. 두 번째 글자 A는 사전에 있으나, 세 번째 글자까지인 AK는 사전에 없으므로, A의 색인 번호 1을 출력하고, AK를 사전에 28 번째로 등록한다.
3. 세 번째 글자에서 시작하는 KA가 사전에 있으므로, KA에 해당하는 색인 번호 27을 출력하고, 다음 글자 O를 포함한 KAO를 29 번째로 등록한다.
4. 마지막으로 처리되지 않은 글자 O에 해당하는 색인 번호 15를 출력한다.

<br>

|현재 입력(w)|다음 글자(c)|출력|사전 추가(w + c)|
|:-|:-|:-|:-|
|K|A|11|27: KA|
|A|K|1|28: AK|
|KA|O|27|29: KAO|
|O||15||

<br>

이 과정을 거쳐 다섯 글자의 문장 KAKAO가 4개의 색인 번호 [11, 1, 27, 15]로 압축된다.<br>
입력으로 TOBEORNOTTOBEORTOBEORNOT가 들어오면 다음과 같이 압축이 진행된다.<br>

|현재 입력(w)|다음 글자(c)|출력|사전 추가(w + c)|
|:-|:-|:-|:-|
|T|O|20|27: TO|
|O|B|15|28: OB|
|B|E|2|29: BE|
|E|O|5|30: EO|
|O|R|15|31: OR|
|R|N|18|32: RN|
|N|O|14|33: NO|
|O|T|15|34: OT|
|T|T|20|35: TT|
|TO|B|27|36: TOB|
|BE|O|29|37: BEO|
|OR|T|31|38: ORT|
|TOB|E|36|39: TOBE|
|EO|R|30|40: EOR|
|RN|O|32|41: RNO|
|OT||34||

<br>

***

### 제한사항

* 입력으로 영문 대문자로만 이뤄진 문자열 msg가 주어진다. msg의 길이는 1 글자 이상, 1000 글자 이하이다.
* 주어진 문자열을 압축한 후의 사전 색인 번호를 배열로 출력하라.

<br>

***

## 입출력 예

|msg|answer|
|:-|:-|
|KAKAO|[11, 1, 27, 15]|
|TOBEORNOTTOBEORTOBEORNOT|[20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, |30, 32, 34]|
|ABABABABABABABAB|[1, 2, 27, 29, 28, 31, 30]|

<br>

## 풀이 과정

사전에 있으면 end += 1<br>
사전에 없으면 answer.append(idx) , words.append(str)<br>
반복문 끝나고 마지막 남은 값도 출력해야하기 때문에 idx 계산 후 answer.append(idx) 로 마무리

~~~
func solution(_ msg:String) -> [Int] {
        
    var answer: [Int] = []
    var words: [String] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var idx: Int = 0
    let msg_c = msg.count
        
    var (start, end): (Int, Int) = (0, 1)
    var str: String = ""
        
    while end <= msg_c {        
        str = (Array(msg)[start..<end]).map { String($0) }.joined(separator: "")
            
        if words.contains(str) {
            idx = words.firstIndex(of: str)! + 1
            end += 1
            continue
        }            
        answer.append(idx)
        words.append(str)
        start = end - 1    
    }
        
    idx = words.firstIndex(of: str)!
    idx += 1
        
    answer.append(idx)
        
    return answer
}
~~~