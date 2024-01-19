import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface CheckBoxProps {
  description: string;
  handleChange: (value: boolean) => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({description, handleChange}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
        <>
        <View style={styles.checkboxContainer}>
            <BouncyCheckbox
                size={25}
                onPress={() => {
                  setToggleCheckBox(!toggleCheckBox)
                }}
                bounceEffectIn={0.8}
                fillColor='#5C6EF8'
                style={{marginVertical: '3%'}}
            />
            <Text style={styles.label}>{description}</Text>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: 'gray',
  },
});
