/** The author infomation about created the issue. */
export class Author {
  constructor(
    private readonly _avatarUrl: string,
    private readonly _login: string,
    private readonly _url: string
  ) {}

  /** The avatar url of the author. */
  avatarUrl(): string {
    return this._avatarUrl
  }

  /** The id of the author. */
  login(): string {
    return this._login
  }

  /** The url of the author. */
  url(): string {
    return this._url
  }
}

export type AuthorModel = Author
