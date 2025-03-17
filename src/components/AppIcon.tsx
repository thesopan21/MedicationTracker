import { StyleSheet, } from 'react-native'
import React, { FC } from 'react'
import FastImage from 'react-native-fast-image'
import { PlusIcon } from '../assets/appIcons'

interface AppIconProps {
    source: string;
    width?: number;
    height?: number;
    borderRadious?: number
}

const AppIcon: FC<AppIconProps> = ({
    source = PlusIcon,
    height = 20,
    borderRadious = 0,
    width = 20
}) => {
    return (
        <FastImage
            source={source}
            style={{
                width: width,
                height: height,
                borderRadius: borderRadious
            }}
        />
    )
}

export default AppIcon

const styles = StyleSheet.create({
    image: {

    }
})