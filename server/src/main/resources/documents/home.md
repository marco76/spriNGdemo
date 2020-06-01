<div style="background-color: #e7f3fe;
       border-left: 6px solid #2196F3;
       margin-bottom: 15px;
                                                     padding: 4px 12px;">I reactivated the project/site after 3 years. A lot changed, some updates will come soon. :)
                                                     <br> Still using Angular 5.x :O, soon migrating to Java 14, Spring latest, Angular 9</div>

# Java, Spring, Angular, Cloud : How to build a professional application step by step

This website is like a programming book but it's live and it's working.

I'm trying to collect the good practices and code fragments frequently used during the development of a professional application.

These good practices are used in a real work application ... this website.
If the solutions proposed don't work (anymore), this website will simply disappear.

## How much time do you spend searching on technical forums?

Most of the projects are technically similar and when I change project or client I have to search again and again the solution for the same problems.

StackOverflow and similar are fundamental in the daily life of a developer but it can take time to filter hundred of answers and find the solution that is good in quality (and not simply a workaround), up-to-date and works with your libraries.

My goal is to reduce the time spent looking for common technical problems (e.g. 'Why when I refresh the page I get a Whitelabel error?') to improve the quality of the modern applications.

## Topics and architecture

Topics of this website are:

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
Our goal is an architecture that can be easily maintaned by a small team of developers and with a low entry barrier the developers than in the future will take the relay.

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
- Angular Material


## Why Spring and Angular?

Simply because at the moment these are the 2 technologies that I use more often where I work and they are currently on demand.
The goal of this website is to be useful to real projects.

Java EE is a great technology too. I created an example of integration of Angular with Java EE 8 and Bootstrap that you can visit here: [javademo.io](http://javademo.io "javademo.io").

## A blog is not enough??

On the long term the content of a blog can be thrown away, it make no sense to update the articles and it’s very hard to maintain the consistency.
The only advantage of a blog is that is very good for SEO. JS frameworks are not SEO friendly.

Besides, why I should write about the productivity of Java and JS Frameworks using a PHP or Ruby framework like many bloggers do? _Java has a great productivity and my goal is to show it_.

But sure, I have a 'ruby based' blog too migrated from a WordPress one:

 [javaee.ch](http://javaee.ch)

## Why 'good practices'? can I contribute with something better?

'Good practices' because I continue to learn and discover better ones.

Probably you know a 'better practice'.If you see a better solution or errors you can send a Pull Request, the project is available on GitHub.

The documentation (as this page) is written in MarkDown and easily editable.

## A lot is still missing to build a complete solution ...

Well, this is a free time project. If you can contribute to fill the gap you are welcome.
