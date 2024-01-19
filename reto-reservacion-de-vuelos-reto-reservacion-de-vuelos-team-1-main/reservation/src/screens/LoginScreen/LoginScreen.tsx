import React, {useState} from 'react';

import {ActivityIndicator, Text, View} from 'react-native';

import {Input} from '../../components/Input/Input';
import {PrimaryButton} from '../../components/PrimaryButton/PrimaryButton';

import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {AnchorButton} from '../../components/AnchorButton/AnchorButton';

import styles from './style';
import {initialValues, loginScreenSchema} from './LoginScreenSchema';

import {FIREBASE_AUTH} from '../../../config/firebase-config';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/Navigator';

import Snackbar from 'react-native-snackbar';

export const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const [isLoading, setIsLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const onSubmit = async (values: any) => {
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      const user = response.user;
      if (user) navigation.navigate('MyFlightsScreen');
    } catch (error) {
      Snackbar.show({
        text: 'User not found, please check your credentials!',
        backgroundColor: '#5C6EF8',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <>
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#5C6EF8" />
      </View>
    </>
  ) : (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginScreenSchema}
        onSubmit={values => onSubmit(values)}>
        {({
          handleChange,
          handleSubmit,
          errors,
          touched,
          values: {email, password},
          setFieldValue,
        }) => (
          <View style={[styles.column, {backgroundColor: '#ffffff'}]}>
            <Text style={styles.screenTitle}>Login</Text>
            <Input
              errorMessage={errors.email}
              handleChange={handleChange('email')}
              hint="example@gmail.com"
              isShowError={!!errors.email && !!touched.email}
              title="Email"
              value={email}
              width={wp('80%')}
            />
            <Input
              errorMessage={errors.password}
              handleChange={handleChange('password')}
              hint="********"
              isShowError={!!errors.password && !!touched.password}
              title="Password"
              value={password}
              width={wp('80%')}
              isPassword={true}
            />

            <PrimaryButton
              isActive={Object.values(errors).length <= 1}
              title="Login"
              onPress={() => {
                handleSubmit();
              }}
              width={wp('70%')}
            />
            <View style={[styles.row, {height: wp('20%')}]}>
              <Text style={[styles.textAccount, {marginRight: wp('2%')}]}>
                Don't have an account?
              </Text>
              <AnchorButton
                title={'Sign Up'}
                onPress={() => {
                  navigation.navigate('SignUpScreen');
                }}
              />
            </View>
          </View>
        )}
      </Formik>
    </>
  );
};
