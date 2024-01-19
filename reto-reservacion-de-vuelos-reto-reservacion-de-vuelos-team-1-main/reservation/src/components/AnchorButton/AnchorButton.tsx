import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './style';

interface AnchorButtonProps {
    title: string;
    onPress: () => void;
}

export const AnchorButton: React.FC<AnchorButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};