// @flow

export const ENGINES = {
  InnoDB: 'InnoDB',
};

export type Engine = $Keys<typeof ENGINES>;

export const CHARSETS = {
  big5: 'big5',
  dec8: 'dec8',
  cp850: 'cp850',
  hp8: 'hp8',
  koi8r: 'koi8r',
  latin1: 'latin1',
  latin2: 'latin2',
  swe7: 'swe7',
  ascii: 'ascii',
  ujis: 'ujis',
  sjis: 'sjis',
  hebrew: 'hebrew',
  tis620: 'tis620',
  euckr: 'euckr',
  koi8u: 'koi8u',
  gb2312: 'gb2312',
  greek: 'greek',
  cp1250: 'cp1250',
  gbk: 'gbk',
  latin5: 'latin5',
  armscii8: 'armscii8',
  utf8: 'utf8',
  ucs2: 'ucs2',
  cp866: 'cp866',
  keybcs2: 'keybcs2',
  macce: 'macce',
  macroman: 'macroman',
  cp852: 'cp852',
  latin7: 'latin7',
  utf8mb4: 'utf8mb4',
  cp1251: 'cp1251',
  utf16: 'utf16',
  cp1256: 'cp1256',
  cp1257: 'cp1257',
  utf32: 'utf32',
  binary: 'binary',
  geostd8: 'geostd8',
  cp932: 'cp932',
  eucjpms: 'eucjpms',
};

export type Charset = $Keys<typeof CHARSETS>;

export const COLLATION = {
  big5_chinese_ci: 'big5_chinese_ci',
  dec8_swedish_ci: 'dec8_swedish_ci',
  cp850_general_ci: 'cp850_general_ci',
  hp8_english_ci: 'hp8_english_ci',
  koi8r_general_ci: 'koi8r_general_ci',
  latin1_swedish_ci: 'latin1_swedish_ci',
  latin2_general_ci: 'latin2_general_ci',
  swe7_swedish_ci: 'swe7_swedish_ci',
  ascii_general_ci: 'ascii_general_ci',
  ujis_japanese_ci: 'ujis_japanese_ci',
  sjis_japanese_ci: 'sjis_japanese_ci',
  hebrew_general_ci: 'hebrew_general_ci',
  tis620_thai_ci: 'tis620_thai_ci',
  euckr_korean_ci: 'euckr_korean_ci',
  koi8u_general_ci: 'koi8u_general_ci',
  gb2312_chinese_ci: 'gb2312_chinese_ci',
  greek_general_ci: 'greek_general_ci',
  cp1250_general_ci: 'cp1250_general_ci',
  gbk_chinese_ci: 'gbk_chinese_ci',
  latin5_turkish_ci: 'latin5_turkish_ci',
  armscii8_general_ci: 'armscii8_general_ci',
  utf8_general_ci: 'utf8_general_ci',
  ucs2_general_ci: 'ucs2_general_ci',
  cp866_general_ci: 'cp866_general_ci',
  keybcs2_general_ci: 'keybcs2_general_ci',
  macce_general_ci: 'macce_general_ci',
  macroman_general_ci: 'macroman_general_ci',
  cp852_general_ci: 'cp852_general_ci',
  latin7_general_ci: 'latin7_general_ci',
  utf8mb4_general_ci: 'utf8mb4_general_ci',
  cp1251_general_ci: 'cp1251_general_ci',
  utf16_general_ci: 'utf16_general_ci',
  cp1256_general_ci: 'cp1256_general_ci',
  cp1257_general_ci: 'cp1257_general_ci',
  utf32_general_ci: 'utf32_general_ci',
  binary: 'binary',
  geostd8_general_ci: 'geostd8_general_ci',
  cp932_japanese_ci: 'cp932_japanese_ci',
  eucjpms_japanese_ci: 'eucjpms_japanese_ci',
};

export type Collation = $Keys<typeof COLLATION>;

export const REFERENCE_OPTIONS = {
  RESTRICT: 'RESTRICT',
  CASCADE: 'CASCADE',
  SET_NULL: 'NULL',
  NO_ACTION: 'ACTION',
  SET_DEFAULT: 'SET DEFAULT',
};

export type ReferenceOption = $Values<typeof REFERENCE_OPTIONS>;

export const INDEX_TYPES = {
  BTREE: 'BTREE',
  HASH: 'HASH',
};

export type IndexType = $Keys<typeof INDEX_TYPES>;

export type RowType = {[string]: any};
export type ConditionType = number | RowType;
