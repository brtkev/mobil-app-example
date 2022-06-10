import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Welcome: undefined;
};
export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
export type AnyRootStackScreenProps = NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>;


export type HomeStackParamList = {
  home: undefined;
  charge: undefined;
  withdraw: undefined;
}
export type HomeStackScreenProps<T extends keyof HomeStackParamList> = NativeStackScreenProps<HomeStackParamList, T>;
export type AnyHomeStackScreenProps = NativeStackScreenProps<HomeStackParamList, keyof HomeStackParamList>;

export type WelcomeStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  RecoverPassword : undefined;
}
export type WelcomeStackScreenProps<T extends keyof WelcomeStackParamList> = NativeStackScreenProps<WelcomeStackParamList, T>;
export type AnyWelcomeStackScreenProps = NativeStackScreenProps<WelcomeStackParamList, keyof WelcomeStackParamList>;

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