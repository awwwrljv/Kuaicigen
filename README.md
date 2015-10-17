# 快词根

开发快词根的初衷是帮助广大学生党（尤其是出国党）快速记忆英语单词。

## 文件

index.html 是首页文件。

statics 文件夹中存放着 logo、CSS 文件和 JS 文件。

contents 文件夹里存放着所有单词的释义。

下面，我来介绍一下这些文件的内容以及它们之间的关系。

首先，如果直接运行 index.html（或访问 kuaicigen.com），会看到这个网站的主页面。不难看出，上方有一条导航栏（nav），其中有一个搜索框。输入单词后，下方会直接出现单词的释义。这个页面是用 iframe 配合 JS 展示的。

在 index.html 的第 22 至 24 行，可以看到这样一段简短的代码：

    <div class="content shadow">
      <iframe height="100%" width="100%" frameborder="0" src="404.html"></iframe>
    </div>

（没错，404 被我玩坏了……）

在刚打开首页、点击一个单词之前，页面的下方是一片空白。通过 JS，我实现了这样一系列程序：

    $('.searchbox').keyup(function() { // 在搜索框输入内容后……
      var txt = document.getElementById("searchbox").value.replace(/\s/g, ""); // 将“txt”定义为输入的单词
      $('.content').html('<iframe height="100%" width="100%" frameborder="0" src="contents/' + txt + '.html"></iframe>'); // 从“contents”文件夹中找到以这个单词命名的 HTML 文件并以 iframe 展示出来
    });

这样，在点击一个单词后，程序会通过替换代码的方式改变下方显示的内容。而我只需往 contents 文件夹内添加 HTML 文件即可。

## 招聘启事

要求：

（1）对英文单词的词根词缀法则有一定的了解；

（2）手里有一本单词书；

（3）有脑洞，能想出记忆一个单词的好方法（比如说谐音）；

（4）有 TOEFL、IELTS 等语言测试的考试经验者优先。

普通工作内容：

（1）从单词书里拿出一个单词；

（2）把词根、词缀拆出来，分别注明它们的意思，写入文本文档或借助表格软件整理。

进阶工作内容：

（1）有 Mac 并安装 Hype（因为 Hype 这个软件是 Mac 独有的）；

（2）直接在 Hype 里面像使用 AI 一样做出单词释义页面。