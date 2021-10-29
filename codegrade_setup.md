# Codegrade Setup

## 1- Fixtures

### Student-Facing

- [codegrade_mvp.test.js](./codegrade_mvp.test.js)

### Non-Student-Facing

- [codegrade_mvp.test1.js](./codegrade_mvp1.test.js)

## 2- Global Setup Script

```bash
cg-jest install
```

## 3- Per-Student Setup Script

```bash
mv $FIXTURES/* . && npm install
```

## 4- Auto Tests

### Learner-Facing - Weight 99

```bash
NODE_ENV=testing cg-jest run -- codegrade_mvp.test.js --runInBand --forceExit
```

### Non-Learner-Facing - Weight 1

```bash
NODE_ENV=testing cg-jest run -- codegrade_mvp1.test.js --runInBand --forceExit
```

## 5- Rubric

etc etc
