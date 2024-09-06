export interface ExternalSystem {
  _id?: string;
  name: string;
  baseUrl: string;
  authMethod: "apiKey" | "password" | "biometric";
  key: string;
  value: string;
  authPlace: "header" | "qparams";
}
