import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TabHomeIcon(props) {
    return (
        <Svg {...props} width={24} height={24} viewBox="0 0 24 24">
            <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </Svg>
    )
}

export default TabHomeIcon
