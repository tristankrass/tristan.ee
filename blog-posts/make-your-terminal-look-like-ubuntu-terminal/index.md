---
title: Make your terminal look like Ubuntu terminal
slug: make-your-terminal-look-like-ubuntu-terminal
date_published: 2019-04-18T14:48:00.000Z
date_updated:   2019-04-18T06:44:01.000Z
tags: shell
---

Before moving on to the tutorial I suggest downloading Iterm2
[https://www.iterm2.com/], this gives you more oppurtunity to customise your
prompt and also I did not find a way to make the regular terminal that comes
with mac to look exactly like Ubuntu.

  If you are a developer you know that many of you day to day actions require
using terminal. For example using version control system is best done through
terminal, even though there are pretty promising GUI programs out there, they
don't replace the good old terminal. So knowing your way around terminal is
essential when you want to be pragmatic developer. So spending much time with
Ubuntu operating system in one of my university classes, I really started to
like the default Ubuntu terminal. I use Mac, and it uses the same shell  as
Ubuntu - bash ( Born again shell) so I went ahead and configured my terminal to
look the same as default Ubuntu terminal. Following the steps given in this
article will hopefully get you the same result.

  Prerequisites:

 * You should know your way around terminal.
 * You know how to edit files using text editor like nano or vim.

All the bash related files are saved in a file called .bashrc or  in .
bash_profile. The dot before the files indicates that the file is hidden. Both
files can be found be in your home directory, which you go to by typing:

cd


Next type 

ls -alt

This shows you all the files in your home directory. We are mainly intrested in
bash_profile. If you already have the bash profile file, make sure to make a
backup of the current file in case something goes wrong. 

cp .bash_profile .bash_profile_backUp


You should now have a file .bash_profile_backUp in your home directory. This
ensures that if anything goes wrong during the tutorial, you can still go back
to your previous setup.

32162F --> This is color code for background
Next up open terminal by pressing cmd+; or open prefrences, go to profiles and
in the bottom left you have a + sign where you can click and make a new
profile.'

Next chooce background. 

Chooce the secont tab and paste in the hex code 32162F or alternatively use RGB
values (48, 10, 36)

You should now have a similar looking terminal window.Next up we want to color
the command prompt which is currenty white and maybe change the font.  I will be
using the Ubuntu font which you can download here
[https://www.fontsquirrel.com/fonts/ubuntu].

The thing we want to change is called PS which stands for process status.

export CLICOLOR=1
export LSCOLORS=GxFxCxDxBxegedabagaced
export PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
export LSCOLORS=ExGxBxDxCxEgEdxbxgxcxd


By adding those line to either .bash_profile or .bashrc file you should have
something like that.

I prefer the look one below. When you are using the built in terminal that comes
with the mac, the colors for folderds are purple instead of blue. My fix for
that is using the Iterm2 [https://www.iterm2.com/]  instead. All the same
principles apply, but you will have more possibilities to configure the
terminal.
