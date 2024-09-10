### 补充插件

```
cnpm i ufo@1.5.3 -D
cnpm i node-fetch-native@1.4.1 -D
cnpm i vue-meta@2.4.0 -D
cnpm i vue-client-only@2.1.0 -D
cnpm i -D vue-no-ssr@1.1.1
cnpm i -D vue-router@3.6.5
cnpm i -D axios@0.21.1
cnpm i -D defu@5.0.0
```

### nuxt 2.14.5 初始化

```
npx create-nuxt-app
```

```
1. `kgithub.com`：您可以将GitHub源网址前面加`k`来使用，例如将`https://github.com/username/repo.git`改为`https://kgithub.com/username/repo.git`。这个镜像站点允许查看代码、Issue和评论，但不能注册、上传文件，也不能从`raw.githubusercontent.com`下载文件，可以登录并在线编辑。
```

```
2. `hub.nuaa.cf` 和 `hub.fgit.ml`：这些是推荐的镜像站点，您可以通过更改GitHub仓库地址的域名部分来使用它们，例如将 `https://github.com/username/repo.git` 改为 `https://hub.nuaa.cf/username/repo.git` 或 `https://hub.fgit.ml/username/repo.git`。
```

```
3. `gitclone.com`：这是一个提供下载缓存的代码下载网站，可以在仓库地址前面加上 `gitclone.com`，例如将 `https://github.com/username/repo.git` 改为 `https://gitclone.com/github.com/username/repo.git`，然后使用 `git clone` 命令来下载仓库
```

### npm/cnpm/yarn 镜像源

#### npm

```
npm config set registry https://mirrors.huaweicloud.com/repository/npm/
```

```
npm config set registry https://registry.npm.taobao.org
```

```
npm config set registry https://registry.npmmirror.com
```

```
npm config set registry https://registry.npmjs.org
```

#### cnpm

```
cnpm config set registry https://mirrors.huaweicloud.com/repository/npm/
```

```
cnpm config set registry https://registry.npm.taobao.org
```

```
cnpm config set registry https://registry.npmmirror.com
```

```
cnpm config set registry https://registry.npmjs.org
```

#### yarn

```
yarn config set registry https://mirrors.huaweicloud.com/repository/npm/
```

```
yarn config set registry https://registry.npm.taobao.org
```

```
yarn config set registry https://registry.npmmirror.com
```

```
yarn config set registry https://registry.npmjs.org
```

### 提交代码

```
git remote add origin https://github.com/aenuen/hatch-www-a1.git
```

```
git branch -M main
```

```
git push -u origin main
```
