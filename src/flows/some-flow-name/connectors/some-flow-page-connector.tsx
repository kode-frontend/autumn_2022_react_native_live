import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '@ui/molecules';
import { Typography } from '@ui/atoms';
import { styled } from '@ui/theme';



const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex:1;
  padding: 16px;
`

export const SomeFlowPageConnector = () => {
  const { navigate } = useNavigation();
  // @ts-expect-error
  const onNavigate = () => navigate('profile');

  return (
    <Wrapper>
      <Typography variant='largeTitle' >Profile page!</Typography>
      <Typography variant='caption1'>{JSON.stringify(process.env, null, ' ')}</Typography>

      <PrimaryButton onPress={onNavigate}>Go to profile!</PrimaryButton>

    </Wrapper>
  );
};
