# Codegrade Setup

## 1- Fixtures

### Student-Facing Tests

- [codegrade_mvp.test.js](./codegrade_mvp.test.js)

## 2- Global Setup Script

It takes care of installing the latest LTS version of Node, as well as a version of Jest more modern than the one in Codegrade

```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - && sudo apt-get install -y nodejs; cg-jest install; npm i -g jest@27.5.1
```

## 3- Per-Student Setup Script

```bash
mv $FIXTURES/* . && npm install
```

## 4- Auto Tests

### Teacher Tests - Weight 100

```bash
NODE_ENV=testing cg-jest run -- codegrade_mvp.test.js --runInBand --forceExit
```
