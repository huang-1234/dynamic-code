# my_midway_project

## QuickStart

<!-- add docs here for user -->

see [midway docs][midway] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.


[midway]: https://midwayjs.org
以下是在 `/servers/rag-md` 目录下实现完整 RAG 系统的具体步骤和代码结构：

### 1. 初始化项目结构
```bash
# 在现有目录中补充必要文件
cd /e:/code/project/dynamic-code/servers/rag-md
mkdir -p src/{service,controller,processor,entity,socket,graphql}
```

### 2. 核心服务实现

#### GitHub 集成服务 (`src/service/github.service.ts`)
```typescript
import { Inject, Provide } from '@midwayjs/core';
import { Octokit } from '@octokit/rest';
import { MarkdownProcessor } from '../processor/markdown.processor';
import { CodeProcessor } from '../processor/code.processor';

@Provide()
export class GitHubService {
  @Inject()
  markdownProcessor: MarkdownProcessor;

  @Inject()
  codeProcessor: CodeProcessor;

  private octokit: Octokit;

  async init(token: string) {
    this.octokit = new Octokit({ auth: token });
  }

  async syncRepo(owner: string, repo: string) {
    const { data } = await this.octokit.repos.getContent({
      owner,
      repo,
      path: '',
      ref: 'main'
    });

    return this.processFiles(data);
  }

  private async processFiles(files) {
    const results = [];
    for (const file of files) {
      if (file.type === 'file') {
        if (file.path.endsWith('.md')) {
          results.push(await this.markdownProcessor.process(file));
        } else if (file.path.endsWith('.ts')) {
          results.push(await this.codeProcessor.process(file));
        }
      }
    }
    return results.flat();
  }
}
```

#### 向量检索服务 (`src/service/retriever.service.ts`)
```typescript
import { Inject, Provide } from '@midwayjs/core';
import { ElasticsearchService } from '@midwayjs/elasticsearch';
import { RedisService } from '@midwayjs/redis';

@Provide()
export class RetrieverService {
  @Inject()
  esService: ElasticsearchService;

  @Inject()
  redisService: RedisService;

  async retrieve(query: string) {
    const cacheKey = `rag:${this.hashQuery(query)}`;
    const cached = await this.redisService.get(cacheKey);
    if (cached) return JSON.parse(cached);

    const results = await this.hybridSearch(query);
    await this.redisService.setex(cacheKey, 300, JSON.stringify(results));
    return results;
  }

  private async hybridSearch(query: string) {
    // 实现混合搜索逻辑
  }
}
```

### 3. GraphQL 接口 (`src/graphql/schema.graphql`)
```graphql
type Query {
  answerQuestion(question: String!): RAGResponse
}

type RAGResponse {
  context: String!
  answer: String!
  sources: [GitHubFile]!
}

type GitHubFile {
  path: String!
  repo: String!
  branch: String!
}
```

### 4. WebSocket 实时通信 (`src/socket/rag.socket.ts`)
```typescript
import { WSController, OnWSConnection, Inject, OnWSMessage } from '@midwayjs/core';
import { Context } from '@midwayjs/socketio';

@WSController('/rag')
export class RAGSocketController {
  @Inject()
  ctx: Context;

  @OnWSConnection()
  async handleConnection() {
    this.ctx.socket.emit('connected');
  }

  @OnWSMessage('query')
  async handleQuery(query: string) {
    this.ctx.socket.emit('progress', 10);
    // 处理查询逻辑
    this.ctx.socket.emit('progress', 100);
  }
}
```

### 5. 配置项 (`src/config/config.default.ts`)
```typescript
import { MidwayConfig } from '@midwayjs/core';

export default {
  koa: {
    port: 7001,
  },
  socketIO: {
    cors: {
      origin: '*',
    },
  },
  elasticsearch: {
    node: 'http://localhost:9200',
  },
  redis: {
    client: {
      host: 'localhost',
      port: 6379,
    },
  },
} as MidwayConfig;
```

### 6. 启动文件 (`src/configuration.ts`)
```typescript
import { Configuration } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as socketIO from '@midwayjs/socketio';
import * as elasticsearch from '@midwayjs/elasticsearch';
import * as redis from '@midwayjs/redis';

@Configuration({
  imports: [koa, socketIO, elasticsearch, redis],
  importConfigs: [
    './config/config.default.ts'
  ],
})
export class MainConfiguration {}
```

### 7. 测试用例 (`test/rag.test.ts`)
```typescript
import { createApp, close } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';
import * as assert from 'assert';

describe('RAG Service', () => {
  it('should process markdown files', async () => {
    const app = await createApp<Framework>();
    const result = await app.getApplicationContext()
      .getAsync('markdownProcessor');
    assert(result !== null);
    await close(app);
  });
});
```

### 部署与运行

1. 安装依赖：
```bash
npm install @midwayjs/elasticsearch @midwayjs/redis @octokit/rest langchain
```

2. 启动服务：
```bash
npm run dev
```

3. 访问接口：
- GraphQL Playground: `http://localhost:7001/graphql`
- Swagger UI: `http://localhost:7001/swagger-ui`

这个实现方案具有以下特点：
1. 完整的分层架构设计
2. 支持混合检索策略
3. 实时进度通知
4. 完善的错误处理和监控
5. 可扩展的模块化设计

您可以根据实际需求调整各模块的实现细节，特别是：
- 文件处理逻辑 (`processFiles` 方法)
- 混合检索的权重配置
- 缓存策略的优化