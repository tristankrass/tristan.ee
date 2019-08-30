---
title: "Functional Programming in Java"
path: "/blog/functional-programming-in-j"
slug: "functional-programming-in-j"
date_published: 2019-04-01T13:38:00.000Z
date_updated: 2019-04-01T13:38:00.000Z
tags: java
excerpt: Some examples of functional programming in java.  Definitely a topic to learn.
---

 You might be surprised or even confused by the title of this post because you might know that the java is first and foremost a object orientated programming language. You are right, but java has some really cool features built into the standard library. I will be showing you some of the awesome things you can do with lambdas and streams in java. 

One of the most used methods in any programming language is using the sum functionality. Above is an example how to sum up all the **absolute values** of the elements in the list. 

    // This stream will sum all the numbers in the list.
    List<Integer> values = Arrays.asList(1, 2, 3, 4);
    
    // When using imperative method for solving this
    int sum = 0;
    for (Integer value: values) {
        sum += Math.abs(value);
    }
    
    values.stream()
      .mapToInt(Math::abs)
      .sum();
    
    // You can also use reduce method
    values.stream()
      .map(Math::abs) // Same as .map(x -> Math.abs(x))
      .reduce(0, (a, b) -> a + b); // Same as .reduce(0, Integer::sum);
    
    

 Next up I will show you how to find all the prime numbers in the given range.  First up we will make a predicate which is class in java. Predicate returns a boolean value -> true or false. We want to check if the number given to it can only be divided by itself and number 1.

    Predicate<Integer> isPrime = number -> number > 1 &&
        IntStream.range(2, number).noneMatch(index -> number % index == 0);
    
    // Now we will loop over and collect all the prime values to the list.
    IntStream.range(start, end)
        .boxed()  // We need this to use filter method
        .filter(isPrime)
        .collect(Collectors.toList());
        
    // Doing the same thing using imperative style
    List<Integer> primes = new ArrayList<>();
        for (int i = start; i < end; i++) {
            boolean isPrime = true;
            for (int j = 2; j < i; j++) {
                if (i % j == 0) {
                    isPrime = false;
                    break;
                }
        }
    
        if (isPrime && i > 1) {
            primes.add(i);
        }
    }
    
    

  Java also has lambdas built into the language and I think they look even cleaner than using the Stream API. 

    // Run String.toLowerCase() on every single string in list 
    // Similar to .map() when using stream
    public List<String> lower(List<String> strings) {
      strings.replaceAll(s -> s.toLowerCase());
      return strings;
    }
    
    
    // Example how to modify a list of number so the list 
    // only contains positive numbers.
    public List<Integer> noNeg(List<Integer> nums) {
      nums.removeIf(n -> n < 0);
      return nums;
    }
    
    

  I would always opt for the stream api or lambdas if possible, but the downside is that we can only use these Classes on Lists. If you are interested in learning more about functional programming I  would also recommend doing some exercises in   [codingbat](https://codingbat.com/java/Functional-1).




