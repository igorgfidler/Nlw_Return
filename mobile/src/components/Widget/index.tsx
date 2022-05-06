import React, { useRef } from 'react';

import BottomSheet from "@gorhom/bottom-sheet";
import { ChatTeardropDots } from "phosphor-react-native";
import { TouchableOpacity } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Success } from '../Success';
import { styles } from "./styles";


export type FeedbackType = keyof typeof feedbackTypes;

export function Widget() {
    const bottomSheetRef = useRef<BottomSheet>(null);

    function handleOpenGesture() {
        bottomSheetRef.current?.expand();
    }

    return (
        <>
            <TouchableOpacity style={styles.button}
                onPress={handleOpenGesture}
            >
                <ChatTeardropDots
                    size={24}
                    weight={"bold"}
                    color={theme.colors.text_on_brand_color}
                />
            </TouchableOpacity>

            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[1, 280]}   
                backgroundStyle={styles.modal}
                handleIndicatorStyle={styles.indicator}
            >
               <Success /> 
            </BottomSheet>
        </>
    );
}

export default gestureHandlerRootHOC(Widget);