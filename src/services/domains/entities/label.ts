/** The label infomation of the issue. */
export class Label {
  constructor(
    private readonly _color: string,
    private readonly _name: string
  ) {}

  /** The color url of the label. */
  color(): string {
    return this._color
  }

  /** The name of the label. */
  name(): string {
    return this._name
  }
}

export type LabelModel = Label
