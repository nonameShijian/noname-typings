/**
 * 获取github授权的token
 */
export function gainAuthorization(): Promise<void>;
/**
 * 字节转换
 * @param { number } limit
 */
export function parseSize(limit: number): string;
/**
 * 对比版本号
 * @param { string } ver1 版本号1
 * @param { string } ver2 版本号2
 * @returns { -1 | 0 | 1 } -1为ver1 < ver2, 0为ver1 == ver2, 1为ver1 > ver2
 * @throws {Error}
 */
export function checkVersion(ver1: string, ver2: string): -1 | 0 | 1;
/**
 *
 * 获取指定仓库的tags
 * @param { Object } options
 * @param { string } [options.username = 'libccy'] 仓库拥有者
 * @param { string } [options.repository = 'noname'] 仓库名称
 * @param { string } [options.accessToken] 身份令牌
 * @returns { Promise<{ commit: { sha: string, url: string }, name: string, node_id: string, tarball_url: string, zipball_url: string }[]> }
 *
 * @example
 * ```js
 * getRepoTags().then(tags => {
 * 	console.log("All tags:", tags.map(tag => tag.name));
 * 	// 获取最新tag（假设按时间顺序排列，最新tag在数组首位）
 * 	const latestTag = tags[0].name;
 * 	console.log("Latest tag:", latestTag);
 * });
 * ```
 */
export function getRepoTags(options?: {
    username?: string;
    repository?: string;
    accessToken?: string;
}): Promise<{
    commit: {
        sha: string;
        url: string;
    };
    name: string;
    node_id: string;
    tarball_url: string;
    zipball_url: string;
}[]>;
/**
 * 获取指定仓库的指定tags的描述
 * @param { string } tagName tag名称
 * @param { Object } options
 * @param { string } [options.username = 'libccy'] 仓库拥有者
 * @param { string } [options.repository = 'noname'] 仓库名称
 * @param { string } [options.accessToken] 身份令牌
 * @example
 * ```js
 * getRepoTagDescription('v1.10.10')
 * 	.then(description => console.log(description))
 * 	.catch(error => console.error('Failed to fetch description:', error));
 * ```
 */
export function getRepoTagDescription(tagName: string, options?: {
    username?: string;
    repository?: string;
    accessToken?: string;
}): Promise<{
    /** @type { { browser_download_url: string, content_type: string, name: string, size: number }[] } tag额外上传的素材包 */
    assets: {
        browser_download_url: string;
        content_type: string;
        name: string;
        size: number;
    }[];
    author: {
        /** @type { string } 用户名 */
        login: string;
        /** @type { string } 用户头像地址 */
        avatar_url: string;
        /** @type { string } 用户仓库地址 */
        html_url: string;
    };
    /** @type { string } tag描述 */
    body: string;
    /** @type { string } tag页面 */
    html_url: string;
    /** @type { string } tag名称 */
    name: string;
    /** 发布日期 */
    published_at: string;
    /** @type { string } 下载地址 */
    zipball_url: string;
}>;
/**
 *
 * 获取仓库指定分支和指定(单个)目录内的所有文件和目录
 * @param { string } [path = ''] 路径名称(可放参数)
 * @param { string } [branch = ''] 仓库分支名称
 * @param { Object } options
 * @param { string } [options.username = 'libccy'] 仓库拥有者
 * @param { string } [options.repository = 'noname'] 仓库名称
 * @param { string } [options.accessToken] 身份令牌
 * @returns { Promise<({ download_url: string, name: string, path: string, sha: string, size: number, type: 'file' } | { download_url: null, name: string, path: string, sha: string, size: 0, type: 'dir' })[]> }
 * @example
 * ```js
 * getRepoFilesList()
 * 	.then(files => console.log(files))
 * 	.catch(error => console.error('Failed to fetch files:', error));
 * ```
 */
export function getRepoFilesList(path?: string, branch?: string, options?: {
    username?: string;
    repository?: string;
    accessToken?: string;
}): Promise<({
    download_url: string;
    name: string;
    path: string;
    sha: string;
    size: number;
    type: 'file';
} | {
    download_url: null;
    name: string;
    path: string;
    sha: string;
    size: 0;
    type: 'dir';
})[]>;
/**
 *
 * 获取仓库指定分支和指定目录内的所有文件(包含子目录的文件)
 *
 * **注意： 此api可能会大幅度消耗请求次数，请谨慎使用**
 *
 * @param { string } [path = ''] 路径名称(可放参数)
 * @param { string } [branch = ''] 仓库分支名称
 * @param { Object } options
 * @param { string } [options.username = 'libccy'] 仓库拥有者
 * @param { string } [options.repository = 'noname'] 仓库名称
 * @param { string } [options.accessToken] 身份令牌
 * @returns { Promise<{ download_url: string, name: string, path: string, sha: string, size: number, type: 'file' }[]> }
 * @example
 * ```js
 * flattenRepositoryFiles()
 * 	.then(files => console.log(files))
 * 	.catch(error => console.error('Failed to fetch files:', error));
 * ```
 */
export function flattenRepositoryFiles(path?: string, branch?: string, options?: {
    username?: string;
    repository?: string;
    accessToken?: string;
}): Promise<{
    download_url: string;
    name: string;
    path: string;
    sha: string;
    size: number;
    type: 'file';
}[]>;
/**
 * 请求一个文件而不是直接储存为文件，这样可以省内存空间
 * @param { string } url
 * @param { (receivedBytes: number, total?:number, filename?: string) => void } [onProgress]
 * @param { RequestInit } [options={}]
 * @example
 * ```js
 * await getRepoTagDescription('v1.10.10').then(({ zipball_url }) => request(zipball_url));
 * ```
 */
export function request(url: string, onProgress?: (receivedBytes: number, total?: number, filename?: string) => void, options?: RequestInit): Promise<Blob>;
/**
 *
 * @param { string } [title]
 * @param { string | number } [max]
 * @param { string } [fileName]
 * @param { string | number } [value]
 * @returns { progress }
 */
export function createProgress(title?: string, max?: string | number, fileName?: string, value?: string | number): progress;
/**
 * 从GitHub存储库检索最新版本(tag)，不包括特定tag。
 *
 * 此函数从GitHub存储库中获取由所有者和存储库名称指定的tags列表，然后返回不是“v1998”的最新tag名称。
 * @param {string} owner GitHub上拥有存储库的用户名或组织名称。
 * @param {string} repo 要从中提取tag的存储库的名称。
 * @returns {Promise<string>} 以最新版本tag的名称解析的promise，或者如果操作失败则以错误拒绝。
 * @throws {Error} 如果获取操作失败或找不到有效tag，将抛出错误。
 */
export function getLatestVersionFromGitHub(owner?: string, repo?: string): Promise<string>;
/**
 * 从指定目录中的GitHub存储库中获取树
 * @param {string[]} directories 要从中获取树的目录列表
 * @param {string} version 从中获取树的版本或分支。
 * @param {string} [owner = 'libccy'] GitHub上拥有存储库的用户名或组织名称。
 * @param {string} [repo = 'noname'] GitHub存储库的名称
 * @returns {Promise<{
 * 	path: string;
 * 	mode: string;
 * 	type: "blob" | "tree";
 * 	sha: string;
 * 	size: number;
 * 	url: string;
 * }[][]>} A promise that resolves with trees from the specified directories.
 * @throws {Error} Will throw an error if unable to fetch the repository tree from GitHub.
 */
export function getTreesFromGithub(directories: string[], version: string, owner?: string, repo?: string): Promise<{
    path: string;
    mode: string;
    type: "blob" | "tree";
    sha: string;
    size: number;
    url: string;
}[][]>;
