import type { AuthorModel, LabelModel } from '@/services/domain/models'

export class Issue {
  constructor(
    private readonly _id: string,
    private readonly _url: string,
    private readonly _title: string,
    private readonly _author: AuthorModel,
    private readonly _totalAssigneesCount: number,
    private readonly _labels: LabelModel[] // private readonly _createdAt,
  ) // private readonly _updatedAt
  {}

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

  totalAssigneesCount(): number {
    return this._totalAssigneesCount
  }

  labels(): LabelModel[] {
    return this._labels
  }

  // createdAt() {
  //   return this._createdAt
  // }

  // updatedAt() {
  //   return this._updatedAt
  // }
}
