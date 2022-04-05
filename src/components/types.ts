import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
  Login: undefined;
  Register: undefined;
  RecoverPassword : undefined
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = 
NativeStackScreenProps<RootStackParamList, T>;

export type AnyRootStackScreenProps = NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>;

export type RegisterStackParamList = {
  Phone? : {
    "placeholder" : string,
    "rightIcon"? : string,
    "initialNumber" : number,
    "country": string,
  },
  CountrySelect: undefined,
  VerifyCode?: {
    "nextScreen" : keyof RegisterStackParamList,
  },
  UserInfo: undefined,
  UserPassword? : {
    "nextScreen" : keyof RegisterStackParamList
  },
  userSecurityQuestions? : {
    "nextScreen" : keyof RegisterStackParamList
  },
  pin: undefined,
  success: undefined
  
}
export type RegisterStackScreenProps<T extends keyof RegisterStackParamList > = NativeStackScreenProps<RegisterStackParamList, T>;
export type AnyRegisterStackScreenProps = NativeStackScreenProps<RegisterStackParamList, keyof RegisterStackParamList>;