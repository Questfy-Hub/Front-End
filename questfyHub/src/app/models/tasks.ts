export class Task {
  public shortDescription: string | undefined;
  public longDescription: string | undefined;
  public initialDate: Date | undefined;
  public conclusionDate: Date | undefined;
  public endLineDate: Date | undefined;
  public difficulty: number | undefined;
  public priority: string | undefined;
  public status: string | undefined;

  constructor();
  constructor(
    shortDescription: string,
    longDescription: string,
    initialDate: Date,
    conclusionDate: Date,
    endLineDate: Date,
    difficulty: number,
    priority: string,
    status: string
  );
  constructor(
    shortDescription?: string,
    longDescription?: string,
    initialDate?: Date,
    conclusionDate?: Date,
    endLineDate?: Date,
    difficulty?: number,
    priority?: string,
    status?: string
  ) {
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.initialDate = initialDate;
    this.conclusionDate = conclusionDate;
    this.endLineDate = endLineDate;
    this.difficulty = difficulty;
    this.priority = priority
    this.status = status
  }
}
