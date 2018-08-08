# 比利小队

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# HTML（包含VUE中HTML部分）编码格式规范
<br>

> 代码规范

### 1. 元素及标签闭合
HTML元素共有以下5种：
- 空元素：area、base、br、col、command、embed、hr、img、input、keygen、link、meta、param、source、track、wbr
- 原始文本元素：script、style
- RCDATA元素：textarea、title
- 外来元素：来自MathML命名空间和SVG命名空间的元素。
- 常规元素：其他HTML允许的元素都称为常规元素。

元素标签的闭合应遵循以下原则：
> 原始文本元素、RCDATA元素以及常规元素都有一个开始标签来表示开始，一个结束标签来表示结束。<br>
> 某些元素的开始和结束标签是可以省略的，如果规定标签不能被省略，那么就绝对不能省略它。<br>
> 空元素只有一个开始标签，且不能为空元素设置结束标签。<br>
> 外来元素可以有一个开始标签和配对的结束标签，或者只有一个自闭合的开始标签，且后者情况下该元素不能有结束标签。<br>

**团队约定**
<br>
为了能让浏览器更好的解析代码以及能让代码具有更好的可读性，有如下约定：
- 所有具有开始标签和结束标签的元素都要写上起止标签，某些允许省略开始标签或和束标签的元素亦都要写上。
- 空元素标签都不加 “/” 字符
```html
<!-- 推荐 -->
<div>
    <h1>我是h1标题</h1>
    <p>我是一段文字，我有始有终，浏览器能正确解析</p>
</div>

<br>

<!-- 不推荐 -->
<div>
    <h1>我是h1标题</h1>
    <p>我是一段文字，我有始无终，浏览器亦能正确解析
</div>

<br/>
```
更多关于元素及标签关闭：<a href="https://www.w3.org/TR/html5/syntax.html#elements-0" target="_blank">#Elements</a>
<br>
<br>

### 2. 书写风格
**HTML代码大小写**
HTML标签名、类名、标签属性和大部分属性值统一用小写
```html
<!-- 推荐 -->
<div class="paras"></div>

<!-- 不推荐 -->
<div class="PARAS"></div>
<DIV CLASS="PARAS"></DIV>
```
<br>
<br>

### 3. 类型属性
不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含
```html
<!-- 推荐 -->
<link rel="stylesheet" href="" >
<script src=""></script>

<!-- 不推荐 -->
<link rel="stylesheet" type="text/css" href="" >
<script type="text/javascript" src="" ></script>
```
<br>
<br>

### 4. 元素属性
元素属性值使用双引号语法
```html
<!-- 推荐 -->
<input type="text">

<!-- 不推荐 -->
<input type=text>	
<input type='text'>
```
更多关于元素属性：<a href="https://www.w3.org/TR/html5/syntax.html#attributes-0" target="_blank">#Attributes</a>
<br>
<br>

### 5. 特殊字符引用
在 HTML 中不能使用小于号 “<” 和大于号 “>”等特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 HTML 源代码中使用字符实体
```html
<!-- 推荐 -->
<a href="#">tag&gt;&gt;</a>

<!-- 不推荐 -->
<a href="#">tag>></a>
```
更多关于符号引用：<a href="https://www.w3.org/TR/html5/syntax.html#character-references" target="_blank">#Character references</a>
<br>
<br>

### 6. 代码缩进
统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）
```html
<div class="paras">
    <a href="#"></a>
</div>
```
<br>
<br>

### 7. 代码嵌套
元素嵌套规范，每个块状元素独立一行，内联元素可选
```html
<!-- 推荐 -->
<div>
    <h1></h1>
    <p></p>
</div>	
<p><span></span><span></span></p>

<!-- 不推荐 -->
<div>
    <h1></h1><p></p>
</div>	
<p> 
    <span></span>
    <span></span>
</p>
```
<br>

段落元素与标题元素只能嵌套内联元素
```html
<!-- 推荐 -->
<h1><span></span></h1>
<p><span></span><span></span></p>

<!-- 不推荐 -->
<h1><div></div></h1>
<p><div></div><div></div></p>
```

<br>
<br>

# CSS样式编码格式规范
<br>

> 代码风格

### 1. 代码格式化
样式书写一般有两种格式：一种是紧凑格式（Compact）
```css
.paras { display: block;width: 50%; }
```
一种是展开格式（Expanded）
```javascript
.paras {
    display: block;
    width: 50%;
}
```
**团队约定：统一使用展开格式书写样式**
<br>
<br>

### 2. 代码大小写
样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。
```css
/* 推荐 */
.paras{
	display:block;
}
	
/* 不推荐 */
.CLASSNAME{
	DISPLAY:BLOCK;
}
```
<br>
<br>

### 3. 选择器
- 尽量少用通用选择器 *
- 不使用 ID 选择器
- 不使用无具体语义定义的标签选择器
```css
/* 推荐 */
.paras {}
.paras li {}
.paras li p{}

/* 不推荐 */
*{}
#paras {}
.paras div{}
```
<br>
<br>

### 4. 代码缩进
统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）
```css
.paras {
    width: 100%;
    height: 100%;
}
```
<br>
<br>

### 5. 分号
每个属性声明末尾都要加分号；
```css
.paras {
    width: 100%;
    height: 100%;
}
```
<br>
<br>

### 6. 代码易读性
左括号与类名之间一个空格，冒号与属性值之间一个空格
```css
/* 推荐 */
.paras {
    width: 100%;
}

/* 不推荐 */
.paras{
    width:100%;
}
```

逗号分隔的取值，逗号之后一个空格
```css
/* 推荐 */
.paras {
    box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}

/* 不推荐 */
.paras{
    width:100%;
}
```

为单个css选择器或新申明开启新行
```css
/* 推荐 */
.paras, 
.className_logo, 
.className_hd {
    color: #ff0;
}
.nav{
    color: #fff;
}

/* 不推荐 */
.paras,className_logo,.className_hd {
    color: #ff0;
}.nav{
    color: #fff;
}
```

颜色值 rgb() rgba() hsl() hsla() rect() 中不需有空格，且取值不要带有不必要的 0
```css
/* 推荐 */
.paras {
    color: rgba(255,255,255,.5);
}

/* 不推荐 */
.paras {
    color: rgba( 255, 255, 255, 0.5 );
}
```

属性值十六进制数值能用简写的尽量用简写
```css
/* 推荐 */
.paras {
    color: #fff;
}

/* 不推荐 */
.paras {
    color: #ffffff;
}
```

不要为 0 指明单位
```css
/* 推荐 */
.paras {
    margin: 0 10px;
}

/* 不推荐 */
.paras {
    margin: 0px 10px;
}
```
<br>
<br>

### 7. 属性值引号
css属性值需要用到引号时，统一使用单引号
```css
/* 推荐 */
.paras {
    font-family: 'Hiragino Sans GB';
}

/* 不推荐 */
.paras {
    font-family: "Hiragino Sans GB";
}
```
<br>
<br>

### 8. 属性书写顺序
建议遵循以下顺序：
1. 布局定位属性：display / position / float / clear / visibility / overflow
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …
```css
/* 例如 */
.paras {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```
<br>
<br>

### 9. CSS3浏览器私有前缀写法
CSS3 浏览器私有前缀在前，标准前缀在后
```css
/* 例如 */
.paras {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```
更多关于浏览器私有前辍写法：<a href="https://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#vendor-keywords" target="_blank">#Vendor-specific extensions</a>

<br>
<br>

# 命名规范
<br>

### 1. 文件命名
确保文件命名总是以小写字母开头而不是数字，遵循驼峰格式，不带下划线及其他标点符号，如：
```html
home.vue
homePage.vue
```
<br>
<br>

### 2. ClassName命名
ClassName的命名应该尽量精短、明确，必须以字母开头命名，且全部字母为小写，单词之间统一使用下划线 “_” 连接
<br>
注：ad、banner、gg、guanggao 等有机会和广告挂勾的字眠不建议直接用来做ClassName，因为有些浏览器插件（Chrome的广告拦截插件等）会直接过滤这些类名
<br>
广告的英文或拼音类名不应该出现
```html
<!-- 避免出现的关键字 -->
<div class="ad"></div>
<div class="fuck"></div>
<div class="jer"></div>
<div class="sm"></div>
<div class="gcd"></div> 
<div class="ass"></div> 
<div class="KMT"></div> 
...
```

<br>
<br>

# JS代码规范
<br>

### 1. 单行代码块
在单行代码块中使用空格
```javascript
// 推荐
function foo () { return true }
if (foo) { bar = 0 }

// 不推荐
function foo () {return true}
if (foo) {bar = 0}
```
<br>
<br>

### 2. 大括号风格
在编程过程中，大括号风格与缩进风格紧密联系，用来描述大括号相对代码块位置的方法有很多。在 JavaScript 中，主要有三种风格，如下：
- One True Brace Style
```javascript
if (foo) {
  bar()
} else {
  baz()
}
```
<br>

- Stroustrup
```javascript
if (foo) {
  bar()
}
else {
  baz()
}
```
<br>

- Allman
```javascript
if (foo)
{
  bar()
}
else
{
  baz()
}
```
**团队约定使用 One True Brace Style 风格**
<br>
<br>

### 3. 变量命名
当命名变量时，主流分为驼峰式命名（variableName）和下划线命名（variable_name）
**团队约定使用驼峰式命名**
<br>
<br>

### 4. 拖尾逗号
在 ECMAScript5 里面，对象字面量中的拖尾逗号是合法的，但在 IE8（非 IE8 文档模式）下，当出现拖尾逗号，则会抛出错误。
<br>

拖尾逗号的好处是，简化了对象和数组添加或删除元素，我们只需要修改新增的行即可，并不会增加差异化的代码行数。
```javascript
// 建议使用情况
var foo = {
  name: 'foo',
  age: '22',
}

// 不建议使用情况
var foo = { name: 'foo', age: '22',}
```
<br>
<br>

### 5. 逗号空格
逗号前后的空格可以提高代码的可读性，团队约定在逗号后面使用空格，逗号前面不加空格。
```javascript
// 推荐
var foo = 1, bar = 2

// 不推荐
var foo = 1,bar = 2
var foo = 1 , bar = 2
var foo = 1 ,bar = 2
```
<br>
<br>

### 6. 逗号风格
逗号分隔列表时，在 JavaScript 中主要有两种逗号风格：
- 标准风格，逗号放置在当前行的末尾
- 逗号前置风格，逗号放置在下一行的开始位置
```javascript
// 推荐
var foo = 1,
    bar = 2

var foo = ['name',
            'age']

// 不推荐
var foo = 1
,
bar = 2

var foo = 1
, bar = 2

var foo = ['name'
          , 'age']
```
**团队约定使用标准风格**
<br>
<br>

### 7. 计算属性的空格
```javascript
// 推荐
obj['foo']

// 不推荐
obj['foo' ]
obj[ 'foo']
obj[ 'foo' ]
```
**团队约定在对象的计算属性内，禁止使用空格**
<br>
<br>

### 8. 拖尾换行
在非空文件中，存在拖尾换行是一个常见的 UNIX 风格，它的好处是可以方便在串联和追加文件时不会打断 Shell 的提示。在日常的项目中，保留拖尾换行的好处是，可以减少版本控制时的代码冲突。
```javascript
// 推荐
function func () {
    // do something
}
    // 此处是新的一行
function other () {
    // do something
}
    // 此处是新的一行

// 不推荐
function func () {
    // do something
}
function other () {
    // do something
}
```
<br>
<br>

### 9. 函数调用
```javascript
// 推荐
fn()

// 不推荐
fn ()
fn
()
```
**为了避免语法错误，团队约定在函数调用时，禁止使用空格**
<br>
<br>

### 10. 缩进
**团队暂定约定为4空格**
<br>
<br>

### 11. 对象字面量的键值缩进
```javascript
// 推荐
var obj = { 'own': 'two' }

// 不推荐
var obj = { 'own' : 'two' }
```
**团队约定对象字面量的键和值之间不能存在空格，且要求对象字面量的冒号和值之间存在一个空格**
<br>
<br>

### 12. 构造函数首字母大写
在 JavaScript 中 new 操作符用来创建某个特定类型的对象的一个实例，该类型的对象是由一个构造函数表示的。由于构造函数只是常规函数，唯一区别是使用 new 来调用。所以我们团队约定构造函数的首字母要大小，以此来区分构造函数和普通函数。
```javascript
// 推荐
var fooItem = new Foo()

// 不推荐
var fooItem = new foo()
```
<br>
<br>

### 13. 构造函数的参数
在 JavaScript 中，通过 new 调用构造函数时，如果不带参数，可以省略后面的圆括号。但这样会造成与整体的代码风格不一致，所以团队约定使用圆括号
```javascript
// 推荐
var person = new Person()

// 不推荐
var person = new Person
```
<br>
<br>

### 14. 链式调用
链式调用如果放在同一行，往往会造成代码的可读性差，但有些时候，短的链式调用并不会影响美观。团队约定一行最多只能有四个链式调用，超过就要求换行。
<br>
<br>

### 15. 空行
空白行对于分离代码逻辑有帮助，但过多的空行会占据屏幕的空间，影响可读性。团队约定最大连续空行数为 2
```javascript
// 推荐
var own = 1
    // 1
    // 2
var two = 2

// 不推荐
var own = 1
    // 1
    // 2
    // 3
    // 4
var two = 2
```
<br>
<br>

### 16. 链式赋值
```javascript
// 推荐
var a = 1
var b = 1
var c = 1

// 不推荐
var a = b = c = 1
```
**链式赋值容易造成代码的可读性差，所以团队约定禁止使用链式赋值**
<br>
<br>

### 17. 变量声明
JavaScript 允许在一个声明中，声明多个变量。团队约定在声明变量时，一个声明只能有一个变量
```javascript
// 推荐
var a
var b
var c

// 不推荐
var a, b, c
```
<br>
<br>

### 18. 分号
JavaScript 在所有类 C 语言中是比较独特的，它不需要在每个语句的末尾有分号。在很多情况下，JavaScript 引擎可以确定一个分号应该在什么位置然后自动添加它。此特征被称为 自动分号插入 (ASI)，被认为是 JavaScript 中较为有争议的特征。
<br>
需要使用分号的情况（一行的开头是()或[]，则在代码前使用分号）：
```javascript
// 自执行函数
;(function func(){
    // 代码块
})()
```
**团队内约定不使用分号，在应该加分号的情况下才使用分号**
<br>
<br>

### 19. 代码块空格
```javascript
// 推荐
if(a) {
  b()
}

function a() {}

// 不推荐
if(a){
  b()
}

function a(){}
```
**团队约定代码块前要添加空格**
<br>
<br>

### 20. 函数声明的空格
当格式化一个函数，函数名或 function 关键字与左括号之间允许有空白。命名函数与匿名函数和 function 关键字之间无需加空格。
```javascript
// 推荐
function func(x) {
  // ...
}

// 不推荐
function func (x) {
  // ...
}
```
<br>
<br>

### 21. 操作符的空格
```javascript
// 推荐
var sum = 1 + 2

// 不推荐
var sum = 1+2
```
**团队约定操作符前后都需要添加空格**