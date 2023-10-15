export interface ICommonResponse<Data = any> {
  code: string;
  data?: Data;
  message: string;
  status: string;
}

export interface IResponseItemQuran {
  arti: string;
  audioFull: {
    '01': string;
    '02': string;
    '03': string;
    '04': string;
    '05': string;
  };
  deskripsi: string;
  jumlahAyat: number;
  nama: string;
  namaLatin: string;
  nomor: number;
  tempatTurun: string;
}
export type TResponseQuran = ICommonResponse<IResponseItemQuran[]>;

export interface IDataSurah {
  arti: string;
  audioFull: {
    '01': string;
    '02': string;
    '03': string;
    '04': string;
    '05': string;
  };
  ayat: {
    audio: {
      '01': string;
      '02': string;
      '03': string;
      '04': string;
      '05': string;
    };
    nomorAyat: number;
    teksArab: string;
    teksIndonesia: string;
    teksLatin: string;
  }[];
  deskripsi: string;
  jumlahAyat: number;
  nama: string;
  namaLatin: string;
  nomor: number;
  suratSebelumnya:
    boolean | {
        jumlahAyat: number;
        nama: string;
        namaLatin: string;
        nomor: number;
      };
  suratSelanjutnya:
    boolean | {
        jumlahAyat: number;
        nama: string;
        namaLatin: string;
        nomor: number;
      };
  tempatTurun: string;
}
export interface IResponseSurah extends ICommonResponse {
  data: IDataSurah;
}
