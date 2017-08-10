# Spring, Angular, Cloud : How to build a professional application step by step
  
The goal of this website is to collect good practices and code fragments used during the development of projects developed using Spring Boot 2.0 (Java) and Angular (\>=2).

It's like a programming books but it's live and it's working.

Most of the projects are technically similar and when I change project or client I have to search again the solution for the same problems.
StackOverflow and similar are useful but it can take time to find the solution that is good in quality (and not simply a workaround), up-to-date and works with your libraries.

## Topics and architecture?

Topics are:
- Development
- Tools
- Testing
- Coding
- Deployment
- Delivery
- Documentation
- Code quality

![alt text](http://molteni.io/images/architecture.png)


Central topics are code quality and code delivery.
Usually in a project the biggest costs are directly related to the complexity in every phase of the process.
The complexity becomes high maintenance costs and limited adaptability.

## Simplicity and Continuous integration

The goal of this example is show a way to reduce the complexity in the lifecycle of software development.
We will privilege the simplicity over the powerfulness of the components (e.g. docker vs kubernetes, bootstrap vs material design, IntelliJ vs. Eclipse).

The result will be a software development process that will allow to build, validate and deploy the software automatically.
Our goal is an architecture that can be easily by a small team of developers and with a low entry barrier the developers than in the future will take the relay.

## Which technologies

The technologies used are the following:
- GitHub ([https://github.com/marco76/spriNGdemo](https://github.com/marco76/spriNGdemo))
- Spring Boot 2.0 beta (last available version)
- Angular 5.0 beta (last available version)
- Jenkins 2.0 ([Visible here](http://springdemo.io:8081/job/spring-demo-pipeline/))
- SonarQube ([Visible here](http://springdemo.io:9000/dashboard?id=spring-ng-demo%3Aparent%3Acandidate))
- Docker Hub ([Here][https://hub.docker.com/r/javaee/springdemo/])
- Docker Cloud, Swarm, Compose
- IntelliJ and VisualStudio Code
- Swagger
- Bootstrap 4 and PrimeNG


## Why Spring and Angular?
Simply because at the moment these are the 2 technologies that I use more often where I work and they and, currently, they are the most demanded on the market.
For an example of Angular with Java EE 8 and Bootstrap you can visit my other demo: [javademo.io](http://javademo.io "javademo.io").

It would be possible to recreate the same example using Java EE and React using Netbeans? Without doubt the technologies are similar the choice depends on the context of the development.

##  Why not blogging it?
On the long term the content of a blog can be thrown away, it make no sense to update the articles and it’s very hard to maintain the consistency.
The only advantage of a blog is that is very good for SEO. JS frameworks are not SEO friendly.

Why I should talk about the productivity of Java and JS Frameworks using a PHP or Ruby framework?
I see a lot of presentations that reveal the secret of the code productivity but rarely they shows running code that is not simple as hello world or extremely complicated and not reproducibly by anyone else. 

You can find my personal blog here: [javaee.ch](http://javaee.ch)

## Can I contribute?
Sure, the content is available on GitHub. If you see a better solution or errors you can send a Pull Request.
The documentation (as this page) is written in MarkDown and easily editable.