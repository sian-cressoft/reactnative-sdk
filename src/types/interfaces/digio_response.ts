export interface DigioResponse {
  code: number;
  message?: string;
  documentId?: string;
  permissions?: Array<string>;
}
