export interface Tech  {
    name: string,
    description: string,
    logoUrl: string,
    category: string,
    trainable: boolean,
    training : {
      internal: string,
      pluralsight: string,
      linkedin: string
    }
  };