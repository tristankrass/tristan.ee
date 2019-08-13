---
title: Java Streams
slug: java-streams
date_published: 1970-01-01T00:00:00.000Z
date_updated: 2019-03-17T17:41:28.000Z
draft: true
---

    public List<Integer> doubling(List<Integer> nums) {
      return nums.stream()
                  .map(num -> num * 2)
                  .collect(Collectors.toList()
                  );
    }
    
    

### ava Functional API

`list.replaceAll(*lambda*)` -- calls the lambda once for each item in the list, storing the result back into the list (or other type of collection). 
e.g. `nums.replaceAll(n -> n * 2);`

`list.removeIf(*lambda*)` -- calls the lambda once for each item in the collection, removing each item where the lambda returns true. 
e.g. `nums.removeIf(n -> n < 0);`

Simple Lambda Examples -- the data types are inferred from the context and from the type of the expression following the "->": 
`n -> n * 2`

`Hello`

`n -> n * 2`

-- takes Integer, returns Integer 
`n -> n < 0 && n >= -10` -- takes Integer, returns boolean 
`s -> s.length()`  -- takes String, returns Integer 
`s -> s.startsWith("hi")` -- takes String, returns boolean

The Java stream system provides more complicated lambda features. The stream calls do not modify the original list, returning a new data structure of the results. Note that the boolean logic of filter() is the opposite of removeIf().

List<Integer> nums = -something-;   nums = nums.stream()     .map(n -> n * 2)     .filter(n -> n >= 0)     .collect(Collectors.toList());
