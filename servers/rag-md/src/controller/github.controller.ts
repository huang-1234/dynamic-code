// servers/rag-md/src/controller/github.controller.ts
import { Inject, Controller, Get, Query } from '@midwayjs/core';
import { GithubService } from '../service/github.service';

@Controller('/api/github')
export class GithubController {
  @Inject()
  githubService: GithubService;

  /**
   * 获取仓库信息
   * @param owner 仓库所有者
   * @param repo 仓库名称
   */
  @Get('/repo')
  async getRepo(@Query('owner') owner: string, @Query('repo') repo: string) {
    return await this.githubService.getRepo(owner, repo);
  }

  /**
   * 获取仓库中的 Markdown 文件内容
   * @param owner 仓库所有者
   * @param repo 仓库名称
   * @param path 文件路径
   */
  @Get('/content')
  async getMarkdownContent(
    @Query('owner') owner: string,
    @Query('repo') repo: string,
    @Query('path') path: string
  ) {
    return await this.githubService.getMarkdownContent(owner, repo, path);
  }

  /**
   * 获取仓库根目录下指定类型的所有文件内容
   * @param owner 仓库所有者
   * @param repo 仓库名称
   * @param extensions 文件扩展名，用逗号分隔 (例如: .md,.mdx)
   */
  @Get('/files')
  async getFilesContent(
    @Query('owner') owner: string,
    @Query('repo') repo: string,
    @Query('extensions') extensions: string = '.md'
  ) {
    const fileExtensions = extensions
      .split(',')
      .map(ext => (ext.startsWith('.') ? ext : `.${ext}`));
    return await this.githubService.getFilesContent(
      owner,
      repo,
      fileExtensions
    );
  }
}
