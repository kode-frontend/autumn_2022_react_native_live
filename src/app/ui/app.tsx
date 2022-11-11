import { StrictMode, ReactNode, useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';

import { AppThemeProvider, styled } from '@ui/theme';
import { AppNavigation } from '../app-navigation';
import { Storybook } from '../../../.storybook';

const StorybookButton = styled.TouchableOpacity`
  height: 32px;
  padding: ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.button.primary};
`;
const StorybookButtonText = styled.Text`
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
`;

const customFonts = {
  SF_PRO_BOLD_700: require('../../../assets/fonts/SFProDisplay-Bold.ttf'),
  SF_PRO_SEMIBOLD_600: require('../../../assets/fonts/SFProDisplay-Semibold.ttf'),
  SF_PRO_MEDIUM_500: require('../../../assets/fonts/SFProDisplay-Medium.ttf'),
  SF_PRO_REGULAR_400: require('../../../assets/fonts/SFProDisplay-Regular.ttf'),
};

// Keep the splash screen visible while we fetch resources
// Ref: https://docs.expo.dev/versions/latest/sdk/splash-screen/
SplashScreen.preventAutoHideAsync();

export const App = () => {
  const [isFontsLoaded] = useFonts(customFonts);
  const [isStorybookClosed, setStorybookClosed] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (isFontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isFontsLoaded]);

  if (!isFontsLoaded) {
    return null;
  }

  if (!isStorybookClosed) {
    return (
      <StrictMode>
        <AppThemeProvider>
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
              <Storybook />
              <StorybookButton onPress={() => setStorybookClosed(true)}>
                <StorybookButtonText>OPEN APP</StorybookButtonText>
              </StorybookButton>
            </SafeAreaView>
          </SafeAreaProvider>
        </AppThemeProvider>
      </StrictMode>
    );
  }

  return (
    <StrictMode>
      <AppThemeProvider>
        <NavigationContainer>
          <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <AppNavigation />
          </View>
        </NavigationContainer>
      </AppThemeProvider>
    </StrictMode>
  );
};
