export class Task {
  public shortDescription: string | undefined;
  public longDescription: string | undefined;
  public initialDate: Date | undefined;
  public conclusionDate: Date | undefined;
  public endLineDate: Date | undefined;
  public difficulty: number | undefined;
  public status: string | undefined

  constructor();
  constructor(
    shortDescription: string,
    longDescription: string,
    initialDate: Date,
    conclusionDate: Date,
    endLineDate: Date,
    difficulty: number,
    status: string
  );
  constructor(
    shortDescription?: string,
    longDescription?: string,
    initialDate?: Date,
    conclusionDate?: Date,
    endLineDate?: Date,
    difficulty?: number,
    status?: string
  ) {
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.initialDate = initialDate;
    this.conclusionDate = conclusionDate;
    this.endLineDate = endLineDate;
    this.difficulty = difficulty;
    this.status = status
  }
}
