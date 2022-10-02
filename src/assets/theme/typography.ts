import i18next from 'i18next';

export type TypographyValueType = {
  fontSize: 36 | 32 | 30 | 26 | 22 | 18 | 15 | 13 | 12 | 10;
  fontWeight: '800' | '700' | '600' | '500' | '400' | '300';
  fontFamily:
    | 'Almarai-Light'
    | 'Almarai-Bold'
    | 'Almarai-ExtraBold'
    | 'Almarai-Regular'
    | 'OpenSans-Bold'
    | 'OpenSans-BoldItalic'
    | 'OpenSans-ExtraBold'
    | 'OpenSans-ExtraBoldItalic'
    | 'OpenSans-Italic'
    | 'OpenSans-Light'
    | 'OpenSans-LightItalic'
    | 'OpenSans-Medium'
    | 'OpenSans-MediumItalic'
    | 'OpenSans-Regular'
    | 'OpenSans-SemiBold'
    | 'OpenSans-SemiBoldItalic';
};
export type TypographyType = {
  [name: string]: TypographyValueType;
};

export const typography: TypographyType = {
  h1: {
    fontSize: 36,
    fontWeight: '800',
    fontFamily:
      i18next.language === 'ar' ? 'Almarai-ExtraBold' : 'OpenSans-ExtraBold',
  },
  h2: {
    fontSize: 32,
    fontWeight: '800',
    fontFamily:
      i18next.language === 'ar' ? 'Almarai-ExtraBold' : 'OpenSans-ExtraBold',
  },
  h3: {
    fontSize: 30,
    fontWeight: '800',
    fontFamily:
      i18next.language === 'ar' ? 'Almarai-ExtraBold' : 'OpenSans-ExtraBold',
  },
  h4: {
    fontSize: 26,
    fontWeight: '700',
    fontFamily: i18next.language === 'ar' ? 'Almarai-Bold' : 'OpenSans-Bold',
  },
  h5: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: i18next.language === 'ar' ? 'Almarai-Bold' : 'OpenSans-Bold',
  },
  h6: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: i18next.language === 'ar' ? 'Almarai-Bold' : 'OpenSans-Bold',
  },
  s1: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily:
      i18next.language === 'ar' ? 'Almarai-Bold' : 'OpenSans-SemiBold',
  },
  s2: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily:
      i18next.language === 'ar' ? 'Almarai-Bold' : 'OpenSans-SemiBold',
  },
  p1: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily:
      i18next.language === 'ar' ? 'Almarai-Regular' : 'OpenSans-Regular',
  },
  p2: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily:
      i18next.language === 'ar' ? 'Almarai-Regular' : 'OpenSans-Regular',
  },
  c1: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily:
      i18next.language === 'ar' ? 'Almarai-Regular' : 'OpenSans-Regular',
  },
  c2: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily:
      i18next.language === 'ar' ? 'Almarai-Regular' : 'OpenSans-Regular',
  },
  label: {
    fontSize: 10,
    fontWeight: '800',
    fontFamily:
      i18next.language === 'ar' ? 'Almarai-ExtraBold' : 'OpenSans-ExtraBold',
  },
};
