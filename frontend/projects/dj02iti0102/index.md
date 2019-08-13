---
title: "Python & Django simple Blog 🐍"
path: "/projects/djangoblog"
date: "2018-12-10"
author: "Tristan Krass"
tech_stack: "Bulma, Django, Docker, postreSQL, JS, Python3.7"
cups_of_coffee: 298
githublink: "https://github.com/tristankrass/dj02iti0102"
projectlink: "https://iti0102.herokuapp.com/"
thumbnail: "python.webp"
projectPhoto: "django.webp"
---
This was my very first more serious project with django. The students received some boilerplate django which had bulma, template folder, some authentication and the apps were already given. From there wee had 10 assignements to complete.
1. Filter comments by post in admin
2. User can change name and avatar
3. User posts in profile view
4. Discord auth
5. Image posts
6. Possibility to reply to a comment
7. A button to generate content
8. Followers
9. Automatic avatar for GitHub users
10. Make a Merge Request

# Django Blog 🐍

---

As you can see from the list above, some of them were really easy to implement if you know django. For me the most challenging part was aadding an avatar to the user's profile. After I figured out how to do it though it was pretty easy actually. In django you have these things called "signals" which basically is used when some part of your app does something then it tells other parts of the application what it just did. For example if the user just signed up via github then we know that he or she has an avatar url associated with his account, now we can let now the other djjango app that is responsible for storing user images that we just received an image so that the app responsible for images can now add it to the user profile.

---

### What I learned? ###


I learned a lot mostly about django and the ORM(Object-relational mapping), which basically let's the user write SQL queries without writing single line of SQL. Then I learned about signals, which I touched above. Finally I went on and learned about Docker to setup the postrSQL, because django comes equipped with SQLlite3 which is nice for experimenting with django, but is not really suitable for production. I also successfully launched the app to digital ocean where I made a droplet using Ubuntu and then installed all the nessecary packages including docker.
