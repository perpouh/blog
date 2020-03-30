# [Python]Codewarsで遊んだ記録
最終更新日:2019年08月23日

  
設計待ちで暇だったので、[Codewars](https://www.codewars.com)というサイトで遊んできました。  
左上の換気扇みたいなのは何モチーフなのだろう。空腹なのでタルトタタンにも見える。  
  
### お題  
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.  
数字をスペースで区切った文字列が引数として渡されます。そのうちで一番大きい値と小さい値を返してください。  
  
Example:  
  
```
high_and_low("1 2 3 4 5")  # return "5 1"
high_and_low("1 2 -3 4 5") # return "5 -3"
high_and_low("1 9 3 4 -5") # return "9 -5"
```  
  
<details><summary>回答</summary>  
  
```python
def high_and_low(numbers):
  list = [int(i) for i in numbers.split(" ")]
  return str(max(list)) + " " + str(min(list))
```  
</details>  
  
コメント：文字列を配列にして数字として比べてまた文字列にして返すとか誰だこんな設計したの  
  
### お題  
Given a year, return the century it is in.  
引数として西暦を渡すので、それが何世紀であるかを返してください。  
  
Input , Output Examples ::  
  
```
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
```  
  
<details><summary>回答</summary>  
  
```python
def century(year):
    century = year // 100
    if ( year % 100 != 0 ): century += 1
    return century
```  
</details>  
  
コメント：99足してから100で割ってる人めっちゃ頭いいな……  
  
### お題  
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).  
数字のリストが与えられるので、重複しない数字の組み合わせで一番小さいものを返してください。  
  
Explanation:  
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications  
  
```
minValue({5, 7, 5, 9, 7})  ==> return (579)
```  
  
<details><summary>回答</summary>  
  
```python
def min_value(digits):
  ret = sorted(list(set(digits)))
  return int("".join([str(i) for i in ret]))
```  
</details>  
  
コメント：短く書けばカッコイイの発作が出た  
  
### お題  
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.  
最小4つの正の整数の配列を指定して、2つの最小の正の数の合計を返す関数を作成します。 浮動小数点数または正でない整数は渡されません。  
  
For example, when an array is passed like `[19, 5, 42, 2, 77]`, the output should be `7`.  
  
<details><summary>回答</summary>  
  
```python
def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers)[0:2])
```  
</details>  
  
コメント：あんまり楽しくなかった  
  
### お題  
Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.  
3つの整数値a、b、cを受け入れるメソッドを実装します。このメソッドは、指定された長さの辺で三角形を構築できる場合はtrueを返し、それ以外の場合はfalseを返します。  
  
(In this case, all triangles must have surface greater than 0 to be accepted).  
（この場合、すべての三角形の表面は0より大きい必要があります）。  
  
<details><summary>回答</summary>  
  
```python
def is_triangle(a, b, c):
  sum = a + b;
  diff = max([a,b]) - min([a,b])
  return diff < c < sum
```  
  
#### 解説  
斜辺CがA+Bより長い場合、∠ABの値が180°になってしまい、三角形として成立しない。  
斜辺CがAとBの差より短い場合、∠ABの値が0°になってしまい、こちらも三角形として成立しない。  
</details>  
  
コメント：クイズっぽくて楽しかった  
  
### お題  
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.  
このカタの目標は、1つのリストを別のリストから減算して結果を返す差分関数を実装することです。  
  
It should remove all values from list a, which are present in list b.  
リストbにあるすべての値をリストaから削除する必要があります。  
  
<details><summary>回答</summary>  
  
```python
def array_diff(a, b):
    return [i for i in a if i not in b]
```  
</details>  
  
コメント：diffを双方向だと勘違いして、あまりに答えが合わないので無駄に悩んでしまった。早とちりの癖は直さなくては……。  
  
<details><summary>双方向に比較したコード</summary>  
  
```python
def array_diff(a, b):
	c = [i for i in a if i not in b]
	return c.extend([i for i in b if i not in a])
```  
</details>  
  
### お題  
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.  
このカタでは、負でない整数と文字列のリストを取得し、フィルタリングされた文字列を含む新しいリストを返す関数を作成します。  
  
なんかGoogle翻訳微妙いな。filltered outだから文字列弾いてねという話です。  
  
<details><summary>回答</summary>  
  
```python
def filter_list(l):
  return [i for i in l if type(i) == int]
```  
</details>  
  
コメント：リスト内包表記たのしい  
  
### お題  
In this kata, you must create a digital root function.  
  
A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.  
  
Here's how it works:  
  
```
digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2
```  
  
<details><summary>回答</summary>  
  
```python
def digital_root(n):
  s = sum([int(i) for i in list(str(n))])
  if s < 10: return s
  return digital_root(s)
```  
</details>  
  
コメント：後置if無くてびっくりした  
  
ちなみにフォーラムで一番支持されている回答。  
  
```python
def digital_root(n):
    return n if n < 10 else digital_root(sum(map(int,str(n))))
```  
  
**あれっ後置if……？**  
さっき `return s if s < 10` って書いたときは怒られたのになぜ？？？？:thinking_face:  
と思って書き直したら通った。else無きゃだめってことか。  
  
```python
def digital_root(n):
  s = sum([int(i) for i in list(str(n))])
  return s if s < 10 else digital_root(s)
```  
  
details仕事してないんじゃが。じゃがー。  
