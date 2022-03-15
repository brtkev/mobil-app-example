import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
  Login: undefined;
  Register: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = 
NativeStackScreenProps<RootStackParamList, T>;

export type AnyRootStackScreenProps = NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>;

export type RegisterStackParamList = {
  Phone: undefined;
}