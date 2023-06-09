# 说明

### npm 安装

```bash
npm i && npx pm2 install pm2-logrotate
```

### yarn 安装

```bash
yarn && npx pm2 install pm2-logrotate
```

### pm2 启动

```bash
npm run pm2:start
```

### 保存 pm2 状态

```sh
npx pm2 save
```

### win 设置开机自启

```bash
npm i pm2-windows-startup -g && pm2-startup install
```

### linux 或 macos

```bash
pm2 startup
```

### 手动恢复启动状态

```bash
pm2 update
```

### 注意事项

要下载新的包前，请先清理本地缓存,否则不会下载压缩包

npm

```sh
npm cache clean --force
```

yarn

```sh
yarn cache clean --force
```
