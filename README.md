  <img width="40%" src="https://user-images.githubusercontent.com/38316487/123796016-ff977500-d927-11eb-8b77-f6d71d9a00b5.gif">



# Memory Palace CLI

A command line utility for generating and remembering complex passwords through memory palace techniques and "choose your own adventure" style Q&A prompts: https://www.npmjs.com/package/palace-cli


_"The method of loci (loci being Latin for 'places') is a strategy of memory enhancement which uses visualizations of familiar spatial environments in order to enhance the recall of information. The method of loci is also known as the memory journey, memory palace, or mind palace technique."_

<sup>— Source Wikipedia: https://en.wikipedia.org/wiki/Method_of_loci</sup>


### Installation

```
npm install -g palace-cli
```

_Note: You may need to run `sudo`_


### Instructions

Type `palace-cli` into your command line to start the Q&A flow.


<div align="center">
  <img width="100%" src="https://user-images.githubusercontent.com/38316487/123796120-2190f780-d928-11eb-9a1c-46ef4aaa46a5.png">
</div>

<br />
<br />

The same combination of answers will always yield the same output.

```
Which room do you wish to enter?
```

_For example: GitHub, Amazon, Twitter, some other service or thing_

<br />

```
You open the door for X, describe what you see inside?
```

_Create a passphrase like "a dog smoking a cigar" or "a horse wearing clogs"_

<br />

```
ROOM          WHAT SEE YOU                 PASSWORD

Github        a dog smoking a cigar        F54c0350Df2cE%2b4a8f4%9a4+Cf4~7&8^b~6@e@97e61

Amazon        a horse wearing clogs        E22401D69c2~B#4a7bE!DeE$8&0&3+0a3&fdab4be4985
```

<br />
<div align="center">
  <img width="100%" src="https://user-images.githubusercontent.com/38316487/123796084-150c9f00-d928-11eb-81dc-6fceae371be3.png">
</div>

<br />

## Todo

• User defined custom places and characters/entities

• Choose your own adventure flow
