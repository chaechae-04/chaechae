---
id : 'test-programmers-32'
title: '[프로그래머스 | 베스트앨범] Swift'
date: '2025-01-30'
excerpt: '해시(Hash) Lv.3 [배스트앨범] 문제풀이(정답 포함) 글입니다.'
type: 'test'
---

## 문제

스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.<br>
* 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
* 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
* 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
<br>
노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.<br>
<br>

***

### 제한사항

* genres[i]는 고유번호가 i인 노래의 장르입니다.
* plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
* genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
* 장르 종류는 100개 미만입니다.
* 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
* 모든 장르는 재생된 횟수가 다릅니다.
<br>

***

## 입출력 예

|genres|plays|result|
|:-|:-|:-|
|["classic", "pop", "classic", "classic", "pop"]|[500, 600, 150, 800, 2500]|[4, 1, 3, 0]|

<br>

## 풀이 과정

코드 너무 중구난방이라 한번 손봐야할듯

~~~
import Foundation
func solution(_ genres:[String], _ plays:[Int]) -> [Int] {
    
    var answer: [Int] = []    
    var total_plays: [String:Int] = [:]
    var best: [String:[(play: Int, idx: Int)]] = [:]    
    let genres_s = Set(genres)
        
    for i in 0..<genres.count {
        total_plays[genres[i], default: 0] += plays[i]
        best[genres[i], default: []].append((plays[i], i))
    }
        
    var sorted_arr = ArraySlice(total_plays.sorted { $0.value > $1.value })
        
    for genre in genres_s {
        best[genre]?.sort { $0.play > $1.play }
    }
        
    while !sorted_arr.isEmpty {
        let g = sorted_arr.first!
        sorted_arr = sorted_arr.dropFirst()
            
        answer.append(best[g.key]![0].idx)
        if best[g.key]!.count >= 2 { answer.append(best[g.key]![1].idx) }
    }
        
    return answer
}
~~~