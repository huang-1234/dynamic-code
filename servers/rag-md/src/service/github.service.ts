// servers/rag-md/src/service/github.service.ts
import axios from 'axios';
import { Provide } from '@midwayjs/core';
import { IConfigService } from '@midwayjs/core';
@Provide()
export class GithubService {
  private readonly apiUrl = 'https://api.github.com';
  private readonly token: string;

  constructor(private configService: IConfigService) {
    this.token = this.configService.getConfiguration('github.accessToken');
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
