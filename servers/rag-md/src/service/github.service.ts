// servers/rag-md/src/service/github.service.ts
import { Provide } from '@midwayjs/core';
import axios from 'axios';
import * as dotenv from 'dotenv';
import * as path from 'path';

// 加载 .env 文件
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

interface GithubContent {
  name: string;
  path: string;
  type: 'file' | 'dir';
  content?: string;
  download_url?: string;
}

@Provide()
export class GithubService {
  private readonly apiUrl = 'https://api.github.com';
  private readonly token: string;

  constructor() {
    // 直接从 process.env 读取
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      throw new Error('GITHUB_TOKEN is not set in .env file');
    }
    this.token = token;
  }

  /**
   * 获取仓库根目录下指定类型的所有文件内容
   * @param owner 仓库所有者
   * @param repo 仓库名称
   * @param fileExtensions 文件扩展名数组 (例如: ['.md', '.mdx'])
   * @example /api/github/content?owner=prettier&repo=eslint-plugin-prettier&path=README.md
   * @example /api/github/content?owner=prettier&repo=eslint-plugin-prettier&path=README.md&fileExtensions=.md,.mdx
   * @returns 文件内容数组，每个元素包含文件名和内容
   */
  async getFilesContent(
    owner: string,
    repo: string,
    fileExtensions: string[] = ['.md']
  ) {
    try {
      // 1. 获取根目录内容列表
      const contentsUrl = `${this.apiUrl}/repos/${owner}/${repo}/contents`;
      const response = await axios.get<GithubContent[]>(contentsUrl, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      });

      // 2. 过滤出指定类型的文件
      const files = response.data.filter(
        item =>
          item.type === 'file' &&
          fileExtensions.some(ext => item.name.toLowerCase().endsWith(ext))
      );

      // 3. 获取每个文件的内容
      const contents = await Promise.all(
        files.map(async file => {
          const contentResponse = await axios.get<string>(file.download_url, {
            headers: {
              Authorization: `Bearer ${this.token}`,
              Accept: 'application/vnd.github.v3.raw',
            },
          });

          return {
            name: file.name,
            path: file.path,
            content: contentResponse.data,
          };
        })
      );

      return contents;
    } catch (error) {
      console.error('Error fetching files:', error);
      throw error;
    }
  }

  /**
   * 获取仓库信息
   * @param owner 仓库所有者
   * @param repo 仓库名
   */
  async getRepo(owner: string, repo: string) {
    const url = `${this.apiUrl}/repos/${owner}/${repo}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });
    return response.data;
  }

  /**
   * 获取仓库的 Markdown 文件内容
   * @param owner 仓库所有者
   * @param repo 仓库名
   * @param path 文件路径（如 docs/README.md）
   */
  async getMarkdownContent(owner: string, repo: string, path: string) {
    const url = `${this.apiUrl}/repos/${owner}/${repo}/contents/${path}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/vnd.github.v3.raw',
      },
    });
    return response.data;
  }

  /**
   * 处理 GitHub Webhook 事件
   * @param payload Webhook 数据
   */
  async handleWebhook(payload: any) {
    const eventType = payload.headers['x-github-event'];
    const body = payload.body;

    switch (eventType) {
      case 'push':
        console.log('Push event received:', body.repository.full_name);
        break;
      case 'pull_request':
        console.log('PR event:', body.action);
        break;
      default:
        console.log('Unhandled event:', eventType);
    }
  }
}
