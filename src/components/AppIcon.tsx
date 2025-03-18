import { Image, StyleSheet, } from 'react-native'
import React, { FC } from 'react'
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
        <Image
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