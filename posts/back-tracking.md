---
id : 'back-tracking'
title: '[알고리즘] 백트래킹'
date: '2024-12-28'
excerpt: '백트래킹 알고리즘에 관한 공부 글입니다.'
type: 'study'
---

## 백트래킹
<ul>
    <li>재귀적으로 문제를 해결하되, 현재 제귀를 통해 확인중인 상태가 제한 조건에 위배가 되는지 판단하고, 해당 상태가 위배되는 경우 해당 상태를 제외하고 다음 단계로 넘어간다.</li>
    <li>해를 찾는 도중 해가 절대 될 수 없다고 판단되면, 되돌아가서 다시 해를 찾는다. (더이상 탐색할 필요가 없는 상태를 제외하는것을 "가지치기"라고 한다.)</li>
    <br>
    <li>백트래킹은 완전탐색기법인 <a href="/pages/posts/depth-first-search" style="text-decoration-line: none; font-weight: bold">DFS</a> , <a href="/pages/posts/breadth-first-search" style="text-decoration-line: none; font-weight: bold">BFS</a> 로 모두 구현이 가능하다.</li>
    <li>백트래킹의 가지치기 특성 상 BFS 보다는 DFS 로 구현하기 더 편하기 때문에 주로 DFS 를 사용한다.</li>
</ul>


<br>

## 관련 포스트

<ul>
    <li><a href="/pages/posts/brute-force" style="text-decoration-line: none; font-weight: bold">브루트포스 알고리즘 <<</a></li>
    <li><a href="/pages/posts/sequential-search" style="text-decoration-line: none; font-weight: bold">순차탐색 <<</a></li>
    <li><a href="/pages/posts/depth-first-search" style="text-decoration-line: none; font-weight: bold">깊이우선탐색 <<</a></li>
    <li><a href="/pages/posts/breadth-first-search" style="text-decoration-line: none; font-weight: bold">너비우선탐색 <<</a></li>
</ul>
