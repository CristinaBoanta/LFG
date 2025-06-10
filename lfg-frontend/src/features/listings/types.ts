export interface Listing {
    _id?: string;
    game: string;
    platform: string;
    region: string;
    playstyle: string[];
    description: string;
    voiceRequired: boolean;
  }