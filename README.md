# 快词根

开发快词根的初衷是帮助广大学生党（尤其是出国党）快速记忆英语单词。

## 文件

index.html 是首页文件。

statics 文件夹中存放着 CSS 文件和 JS 文件。

bootstrap-3.3.5-dist 和 jquery-2.1.4.min.js 自然不用多说……

contents 文件夹里存放着所有单词的解释。

下面，我来介绍一下这些文件的内容以及它们之间的关系。

首先，如果直接运行 index.html（或访问 kuaicigen.com），会看到这个网站的主页面。不难看出，上方有一条导航栏（nav），左侧是一个单词列表（col-md-3），用于显示所有的单词（关于速度优化的内容会在后面说到）。点击一个单词后，右侧会出现单词的解释（col-md-9），我们看到的解释实际上是一个存放在 contents 文件夹里的 HTML 文件。比如说，我们点击 prefix，则右侧出现的页面是 contents/prefix.html。这个页面是用 iframe 配合 JS 展示的。
在 index.html 的第 51 至 54 行，可以看到这样一段简短的代码：

    <div class="col-md-9 row">
      <div class="content">
      </div>
    </div>

在刚打开首页，点击一个单词之前，页面的右侧时一片空白。通过 JS，我实现了这样一系列程序：

    var txt = $(this).text().replace(/\s/g, ""); // 把 txt 定义为当前点击的这个单词的文本内容
    $('.word').removeClass('current'); // 取消当前单词的样式（包括底色）（当然如果刚打开页面还没有点击某一个单词则无视此条）
    $(this).addClass('current'); // 给当前选中的单词加上样式
    $('.content').html('<iframe height="100%" width="100%" frameborder="0" src="contents/' + txt + '.html"></iframe>'); // 把一段 iframe 代码插入（替换）前面提到的那段 <div class="content"></div> 中间

这样，在点击一个单词后，程序会通过替换代码的方式改变右侧显示的内容。而我只需往 contents 文件夹内添加 HTML 文件即可。

## 现在的问题

在 index.html 的第 25 行开始，我用若干个 div 分别代表现有的几个单词。

然而这些代码都是我手动打进去的。

我希望有这样一个程序，可以自动获取 contents 文件夹内的所有 HTML 文件并取它们的文件名，然后自动生成这些 div。比如说，我为单词 A 写好了解释，放在 contents 文件夹内，命名为 A.html。无需其他操作，我只需打开 index.html，就会发现这单词 A 自动出现在左侧列表中了。而且这一列单词都是按照字母顺序排的。听说用 Node.js 可以实现，我最近就在研究这货……

## 以后的问题

你可能会有疑问了。如果单词逐渐增多，页面的访问速度会不会变慢呀！

所以下一步我要做的就是翻到底部自动加载，而不是每次加载全部。

然而没有人会闲着无聊把这个列表当微博一样往下翻……再说了来这个网站就是为了「查」单词嘛……

所以再下一步要做的就是搜索功能啦……不过目测还有些遥远，慢慢来……