export interface IResponseItemQuran {
  name: string;
  name_translations: {
    ar: string;
    en: string;
    id: string;
  };
  number_of_ayah: number;
  number_of_surah: number;
  place: string;
  recitation: string;
  type: string;
}
export type IResponseQuran = IResponseItemQuran[];

export interface IResponseSurah {
  name: string;
  name_translations: {
    ar: string;
    en: string;
    id: string;
  };
  number_of_ayah: number;
  number_of_surah: number;
  place: string;
  recitations: { audio_url: string, name: string; }[];
  tafsir: {
    id: {
      kemenag: {
        name: string;
        source: string;
        text: {
          [key: string]: string;
        };
      };
    };
  };
  type: string;
  verses: { number: number; text: string; translation_en: string; translation_id: string }[];
}
