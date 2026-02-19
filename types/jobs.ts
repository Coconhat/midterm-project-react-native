export interface ApiJob {
  title: string;
  companyName: string;
  companyLogo: string;
  applicationLink: string;
  description: string;
  currency: string;
  minSalary: number | null;
  maxSalary: number | null;
  jobType: string;
  workModel: string;
  seniorityLevel: string;
  mainCategory: string;
  pubDate: number;
  expiryDate: number;
}
export interface Job extends ApiJob {
  id: string;
  isSaved: boolean;
}
