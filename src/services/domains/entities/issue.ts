import type { AuthorModel, LabelModel } from '@/services/entities'

export class Issue {
  constructor(
    private readonly _id: string,
    private readonly _url: string,
    private readonly _title: string,
    private readonly _author: AuthorModel,
    private readonly _hasAssignees: boolean,
    private readonly _labels: LabelModel[],
    private readonly _createdAt: Date,
    private readonly _updatedAt: Date
  ) {}

  id(): string {
    return this._id
  }

  url(): string {
    return this._url
  }

  title(): string {
    return this._title
  }

  author(): AuthorModel {
    return this._author
  }

  hasAssignees(): boolean {
    return this._hasAssignees
  }

  labels(): LabelModel[] {
    return this._labels
  }

  createdAt(): Date {
    return this._createdAt
  }

  updatedAt(): Date {
    return this._updatedAt
  }
}
