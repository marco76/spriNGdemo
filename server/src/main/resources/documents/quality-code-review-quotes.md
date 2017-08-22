# Reject pull requests with style

Sometimes during code review (you are doing it, true?) we see code that we don't like and it breaks clean code principles. To avoid an harsh commentary we can quote some recognized expert to 'kindly' ask for a change in the code. Even better some quotes are funny and could help other developers to improve their code.

If you have famous quotes that you would like to add you can send me them on GitHub.

## Comments
> Every time you write a comment, you should grimace and feel the failure of your ability of expression.

_Clean Code, Robert C. Martin_

## Too many parameters

> The ideal number of arguments for a function is zero (niladic). Next comes one (monadic), followed closely by two (dyadic). Three arguments (triadic) should be avoided where possible. More than three (polyadic) requires very special justification—and then shouldn’t be used anyway.

_Clean Code, Robert C. Martin_

## Too many static methods

> The use of static methods, in any context, is a perfect indicator of a bad programmer who has no idea what OOP is. There can be no excuse for a static method in any situation.

_Elegant Objects, Yegor Bugayenko_

## Field Dependency Injection (@Inject, @Autowired)

You will see this practice frequently, most of the developers still use the annotation @Autowired developing with Spring.
The recommended alternative is to use the injection via constructors.

> Field injections is just lipstick on the pig in that regard.,
  A field injected class won't survive one of my code reviews, the same as no untested code will.
  
  [Why field injection is evil](http://olivergierke.de/2013/11/why-field-injection-is-evil/), _Olivier Gierke_