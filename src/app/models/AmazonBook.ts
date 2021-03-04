export class AmazonBook {
  public id: number;
  public title: string;
  public isbn: number;
  public pageCount: number;
  public publishedDate: Date;
  public shortDescription: string;
  public longDescription: string;
  public status: string;
  public authors: any[];
  public categories: any[];
  constructor() {}
}
