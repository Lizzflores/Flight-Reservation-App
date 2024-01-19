import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import styles from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  isActive?: boolean;
  width?: number;
  isGoogle?: boolean;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  isActive = false,
  width,
  isGoogle,
}) => {
  const buttonStyles = [isActive ? styles.buttonActive : styles.buttonInActive];

  const googleLogo = '../../assets/google-logo.png';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[buttonStyles, {width: width}]}
        onPress={isActive ? onPress : null}>
        <View style={styles.row}>
          {isGoogle ? (
            <Image style={styles.icon} source={require(googleLogo)} />
          ) : null}
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
