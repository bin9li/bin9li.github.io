# 指引

使用 VitePress v4.2.1 搭建的静态网站。

## 编写

VitePress 带有内置的 Markdown 扩展。

### 头部锚点

头部会自动获取锚点链接。可以通过 `markdown.anchor` 选项配置锚点的渲染。

### 内部链接

内部链接转换为 SPA 导航的路由链接。 此外，每个子目录中包含的每个 `index.md` 都会自动转换为 `index.html`，并带有相应的URL `/`。

举个例子，现在有以下目录结构：

```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
```

在 `foo/one.md`中:

```markdown
[Home](/) <!-- 点击跳转到 根目录的 index.md -->
[foo](/foo/) <!-- 点击跳转到 foo 目录的 index.html -->
[foo heading](./#heading) <!-- 锚点会定位到 foo 的 heading 标题 -->
[bar - three](../bar/three) <!-- 你可以不写后缀名 -->
[bar - three](../bar/three.md) <!-- 也可以加 .md -->
[bar - four](../bar/four.html) <!-- 或者加 .html -->
```

### 外部链接

外部的链接会自动识别并生成 `target="_blank" rel="noreferrer"` 的链接。

### Emoji

**输入**

```
:tada: :100:
```

**输出**

🎉 💯

可用的emoji可以通过[这里](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)了解

### 生成目录

**输入**

```
[[toc]]
```

可以使用 `markdown.toc` 选项配置 TOC 的渲染。

### 容器

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

可以通过在容器的“类型”后面添加文本来设置自定义标题。
