<!-- .slide: data-background="#333300" -->
# vite <!-- .element: class="r-fit-text" -->


<!-- .slide: data-background="#333300" -->
## what is vite

Vite is a build tool to make our world faster. <!--  .element: class="fragment" data-fragment-index="1" -->

Vite was created by Evan You, the creator of Vue.js. 
It can be used for develop with any JS libraries like Vue.js, React, VanillaJS or any other. <!--  .element: class="fragment" data-fragment-index="2" -->

[https://vitejs.dev/](https://vitejs.dev/) <!--  .element: class="fragment" data-fragment-index="3" -->


<!-- .slide: data-background="#333300" data-transition="slide-in fade-out" -->
## why Vite

![tell me why](/assets/vite-why.gif) <!--  .element: class="fragment" data-fragment-index="1" -->


<!-- .slide: data-background="#333300" data-transition="fade-in fade-out" -->

It is built on top of esbuild, a JavaScript bundler written in Go, which bundles dependencies

### _10-100 times faster_ <!--  .element: class="fragment" data-fragment-index="1" -->

than JavaScript-based bundlers. <!--  .element: class="fragment" data-fragment-index="1" -->


<!-- .slide: data-background="#333300" data-transition="fade-in slide-out" -->

![tell me why](/assets/vite-faster.gif) 


<!-- .slide: data-background="#333300" -->
## how it works

Vite creates readable for web browsers code from ES Modules then it serves it with some lightweight Node.js server as Koa.
And it is super fast and 


<!-- .slide: data-background="#333300" -->
## vite vs create-react-app

![vite vs react](/assets/vite-vs-cra.png)

and __1444__ vs __82__ packages installed
<!--  .element: class="fragment" data-fragment-index="1" -->


<!-- .slide: data-background="#333300" -->
## install

```bash[1|2|3|4]
$ npm create vite@latest
# enter project name (bank-app)
# choose framework (React)
# choose variant (Typescript)
```


<!-- .slide: data-background="#333300" -->
## run

```bash[1|2|3]
cd bank-app
npm i
npm run dev
```


<!-- .slide: data-background="#333300" -->
## questions

?
